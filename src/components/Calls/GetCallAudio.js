"use client";

import ClientConfig from "@/components/client.config";
import { useState, useRef, useEffect } from "react";
import Meyda from "meyda";
import { useUser } from "../../providers/UserProvider";
import { Button, addToast } from "@heroui/react";
import { BsFillRecordFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";

export default function GetCallAudio({
  callId,
  source,
  interval,
  autoInterval,
  llm,
  role,
  context,
  messages,
  setMessages,
  setStatus,
}) {

  const { userData, setUserData, storeUserData, getUserData, message, setMessage, handleGetIdToken } = useUser();
  const [isCapturing, setIsCapturing] = useState(false);
  const audioStreamRef = useRef(null);
  const recorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const silenceTimeoutRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const intervalIdRef = useRef(null);
  const sourceValue = [...source][0];

  const getAudioStream = async () => {
    try {
      console.log("🔊 Requesting audio stream...");
      let audioTracks = [];

      // Capture Microphone Audio
      if (sourceValue === "both" || sourceValue === "user") {
        console.log("🎤 Capturing microphone...");
        const micStream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
        });
        audioTracks.push(...micStream.getAudioTracks());
      }

      // Capture Speaker/Tab Audio
      if (sourceValue === "both" || sourceValue === "others") {
        console.log("🔊 Capturing speaker/tab audio...");
        const speakerStream = await navigator.mediaDevices.getDisplayMedia({ audio: true });

        if (!speakerStream.getAudioTracks().length) {
          console.warn("⚠️ No audio track found in display media stream!");
        } else {
          audioTracks.push(...speakerStream.getAudioTracks());
        }
      }

      if (audioTracks.length === 0) {
        console.error("❌ No audio tracks available!");
        return null;
      }

      // Create a MediaStream with all tracks
      const finalStream = new MediaStream(audioTracks);
      console.log("✅ Final audio stream contains:", finalStream.getAudioTracks());
      return finalStream;
    } catch (error) {
      console.error("❌ Error accessing media devices:", error);
      return null;
    }
  };

  const startCapture = async () => {
    console.log("🎤 Starting audio capture...");
    setStatus("Starting audio capture...")
    if (isCapturing) return;

    const stream = await getAudioStream();
    if (!stream) return;

    audioStreamRef.current = stream;
    audioChunksRef.current = [];

    audioContextRef.current = new AudioContext();
    const sourceNode = audioContextRef.current.createMediaStreamSource(stream);
    analyzerRef.current = Meyda.createMeydaAnalyzer({
      audioContext: audioContextRef.current,
      source: sourceNode,
      bufferSize: 512,
      featureExtractors: ["rms"],
      callback: (features) => {
        if (autoInterval) {
          handleAutoIntervalSilenceDetection(features);
        }
      },
    });
    analyzerRef.current.start();

    startRecording();

    if (!autoInterval) {
      console.log("📅 Using fixed interval:", interval, "seconds");
      intervalIdRef.current = setInterval(() => {
        console.log("⏳ Interval reached, stopping recording...");
        stopRecording(true); // Pass `true` to ensure it restarts
      }, interval * 1000);
    }

    setIsCapturing(true);
  };

  const handleAutoIntervalSilenceDetection = (features) => {
    if (features.rms < 0.002) {
      if (!silenceTimeoutRef.current) {
        console.log("🤫 Silence detected, setting timeout to stop recording...");
        silenceTimeoutRef.current = setTimeout(() => {
          console.log("🛑 Stopping recording due to silence...");
          stopRecording(true);
        }, 3000);
      }
    } else {
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
        console.log("🔊 Sound detected, resetting silence timer...");
      }
    }
  };

  const startRecording = () => {
    console.log("🎙️ Starting new recording...");
    setStatus("Recording chunk...")

    if (!audioStreamRef.current || audioStreamRef.current.getTracks().length === 0) {
      console.error("❌ No valid audio stream to record!");
      return;
    }

    // Log all tracks for debugging
    console.log("🎧 Audio Tracks Being Recorded:", audioStreamRef.current.getTracks());

    const recorder = new MediaRecorder(audioStreamRef.current, { mimeType: "audio/webm" });
    recorderRef.current = recorder;

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    recorder.onstop = async () => {
      await sendAudioData();
      if (isCapturing) startRecording(); // Restart immediately after sending
    };

    recorder.start();
  };

  const stopRecording = (restart = false) => {
    if (!recorderRef.current || recorderRef.current.state === "inactive") return;

    console.log("🛑 Stopping recording...");
    recorderRef.current.stop();

    if (restart) {
      setTimeout(startRecording, 100); // Restart recording immediately after stopping
    }
  };

  const sendAudioData = async () => {
    if (audioChunksRef.current.length === 0) return;
    console.log("🚀 Sending audio data to backend...");
    setStatus("Sending audio for processing...")

    const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
    audioChunksRef.current = [];

    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.webm");    
    formData.append("user_id", userData.uid);
    formData.append("public_id", userData.public_id);
    formData.append("call_id", callId);
    formData.append("llm", llm.values().next().value);
    formData.append("role", ClientConfig.roles[[...role][0]]);
    formData.append("context", context);
    formData.append("stringified_messages", JSON.stringify(messages));

    try {
      const response = await fetch(ClientConfig.call_audio, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${await handleGetIdToken()}`,
          },
        body: formData,
      });
      
      const data = await response.json();
      setMessages((prev) => [...prev, data.message]);
      setUserData(data.user_data)
      storeUserData(data.user_data)

      if (messages.length && (messages.length % 5) === 0) {
        await getUserData(userData.uid, userData.email);
      }

    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  const stopCapture = () => {
    console.log("🛑 Stopping capture...");
    setIsCapturing(false);

    if (recorderRef.current) recorderRef.current.stop();
    if (audioStreamRef.current) audioStreamRef.current.getTracks().forEach(track => track.stop());
    if (analyzerRef.current) analyzerRef.current.stop();
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    if (silenceTimeoutRef.current) clearTimeout(silenceTimeoutRef.current);

    console.log("✅ Capture fully stopped.");
    setStatus("Recording stopped...")

  };

  return (
    <div className="flex items-center justify-center gap-6">
      <div className="p-6">
        {isCapturing ? (
          <Button
            onPress={stopCapture}
            startContent={<FaStop size={24} />}
            className="w-12 h-16 flex items-center justify-center rounded-full animate-pulse bg-gray-400 border border-gray-800"
          />
        ) : (
          <Button
            onPress={startCapture}
            startContent={<BsFillRecordFill size={24} />}
            className="w-12 h-16 flex items-center justify-center rounded-full bg-red-500 border border-gray-800"
          />
        )}
      </div>
    </div>
  );
}

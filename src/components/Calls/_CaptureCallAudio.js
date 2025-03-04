"use client";

import ClientConfig from "@/components/client.config";
import { useState, useRef } from "react";

export default function CaptureCallAudio({
  callId, //a string, the id of the call, needs to be passed to the backend
  source, //a string, can be the following: both, you, others and is to choose what channel to record
  interval, // number, how long does a recording last
  autoInterval, // boolean, if true interval should not be taken into account and the recording should last as there is a pause longer than 2 seconds
}) {

  const [messages, setMessages] = useState([ClientConfig.motivationalSamples[Math.floor(Math.random * ClientConfig.motivationalSamples.length)]])

  const [isCapturing, setIsCapturing] = useState(false);
  const audioStreamRef = useRef(null);
  const socketRef = useRef(null);
  const recorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Helper function to start a new MediaRecorder instance
  const startRecorder = () => {
    if (!audioStreamRef.current || !socketRef.current) return;

    // Create a new MediaRecorder using the mixed audio stream
    const recorder = new MediaRecorder(audioStreamRef.current, { mimeType: "audio/webm" });
    audioChunksRef.current = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    recorder.onstop = () => {
      // When the recorder stops, send the collected data over the WebSocket
      if (
        socketRef.current.readyState === WebSocket.OPEN &&
        audioChunksRef.current.length > 0
      ) {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        audioBlob.arrayBuffer().then((buffer) => {
          socketRef.current.send(buffer);
        });
      }
    };

    recorder.start();
    recorderRef.current = recorder;
  };

  const startCapture = async () => {
        if (isCapturing) return;
        try {
        // Capture both your microphone and the web call's audio
        const mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: true, // Capture your own microphone audio
            video: false, // No need for video
        });

        const audioTrack = mediaStream.getAudioTracks()[0];
        if (!audioTrack) {
            console.error("No audio track found!");
            return;
        }

        // Assuming the web call has a media stream that includes audio
        // You will need to have access to the web call's MediaStream object
        const callStream = await navigator.mediaDevices.getDisplayMedia({
            audio: true, // This assumes you can access the other side's audio, adjust accordingly
        });

        const callAudioTrack = callStream.getAudioTracks()[0];
        if (!callAudioTrack) {
            console.error("No audio track found for the web call!");
            return;
        }

        // Combine both tracks into one stream (your mic + call audio)
        const mixedStream = new MediaStream([audioTrack, callAudioTrack]);
        audioStreamRef.current = mixedStream;

        // Open a WebSocket connection
        const ws = new WebSocket("ws://localhost:3001");
        socketRef.current = ws;

        ws.onopen = () => {
            // Start the first recorder
            startRecorder();

            // Start sending chunks every 5 seconds by stopping and restarting the recorder
            const intervalId = setInterval(() => {
            if (recorderRef.current) {
                recorderRef.current.stop(); // Stop the current recorder
                startRecorder(); // Start a new recorder
            }
            }, 20000); // Every 20 seconds

            // Save the interval ID to clear it later
            socketRef.current.intervalId = intervalId;
        };

        // Listen for messages from the server (transcription and response)
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Received from server:", data);
            setMessages(prev => [...prev, { message: data.response, transcription: data.transcription}])
        };

      setIsCapturing(true);
    } catch (err) {
      console.error("Error capturing audio:", err);
    }
  };

  const stopCapture = () => {
    setIsCapturing(false);
    // Stop the current recorder if active
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    } 
    // Close the WebSocket connection
    if (socketRef.current) {
      clearInterval(socketRef.current.intervalId); // Clear the interval
      socketRef.current.close();
    }
  };

  return (
    <div className="flex flex-col w-full gap-6">
        <div className="p-6">
            <button
                onClick={isCapturing ? stopCapture : startCapture}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                {isCapturing ? "Stop Capturing" : "Start Audio Capture"}
            </button>
        </div>
        <div className="flex flex-col gap-2 p-8">
            {messages.map((message, index) => (
                <div 
                    key={index} 
                    className="flex flex-col gap-2 p-8 border-1 rounded-xl text-theme bg-theme"
                >
                    <p>{message.message}</p>
                    <p>{message.transcription}</p>
                </div>
            ))}
        </div>
    </div>
    
  );
}

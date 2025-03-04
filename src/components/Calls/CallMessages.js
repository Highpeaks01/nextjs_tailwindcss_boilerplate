import { useEffect, useRef } from "react";
import { formatTimestamp } from "../../utils/utils";

const getColorFromSentiment = (score) => {
  const colors = [
    "bg-red-500", "bg-red-400", "bg-red-300", "bg-orange-400", "bg-orange-300",
    "bg-yellow-400", "bg-yellow-300", "bg-lime-400", "bg-lime-300",
    "bg-green-400", "bg-green-300", "bg-emerald-400", "bg-emerald-300",
    "bg-teal-400", "bg-teal-300", "bg-cyan-400", "bg-cyan-300"
  ];
  const index = Math.min(Math.max(Math.round((score + 1) * (colors.length / 2)), 0), colors.length - 1);
  return colors[index];
};


export default function CallMessages ({ messages, status }) {

  const latestMessageRef = useRef(null)
  // Scroll to the latest message after the component has rendered
  useEffect(() => {
    if (latestMessageRef.current) {

      latestMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    }
  }, [messages]) // Scroll when the messages prop changes

  return (
    <div className="space-y-4">
      {messages?.sort((a,b) => a.timestamp - b.timestamp).map((message, index) => (
        <MessageBlock 
        key={index} 
        message={message} 
        />
      ))}
      <p className="py-4 font-semibold italic text-md">{status}</p>
      {/* Latest message ref to scroll to the right place */}
      <div className={messages.length === 0 ? "h-2" : ""} ref={latestMessageRef}></div>
    </div>
  );
};

const MessageBlock = ({ 
  message, 
}) => {

  return (
    <div className={`p-4 rounded-xl ${getColorFromSentiment(message.sentiment_score)} bg-opacity-30 shadow-lg`}>
      <p className="text-xs font-semibold italic text-theme">{formatTimestamp(message.timestamp)}</p>
      <div className="flex flex-wrap gap-1">
        {message?.segments?.map((segment, index) => (
          <p key={index} className={`px-2 py-1 rounded-md ${getColorFromSentiment(segment.sentiment_score)}`}>
            {segment?.text}
          </p>
        ))}
      </div>
      <p className="mt-4 p-2 bg-gray-200 rounded-md shadow-sm">
        {message?.responses[0]}
      </p>
    </div>
  );
};

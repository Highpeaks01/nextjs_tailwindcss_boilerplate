import { useEffect, useRef } from "react";
import { formatTimestamp } from "../../utils/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Enables tables, footnotes, and other GitHub-flavored markdown features
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <p className="py-4 animate-bounce font-semibold italic text-md">{status}</p>
      {/* Latest message ref to scroll to the right place */}
      <div className={messages.length === 0 ? "h-2" : ""} ref={latestMessageRef}></div>
    </div>
  );
};

const MessageBlock = ({ message }) => {
  return (
    <div className={`p-4 rounded-xl ${getColorFromSentiment(message.sentiment_score)} bg-opacity-30 shadow-lg`}>
      {/* Timestamp */}
      <p className="text-xs font-semibold italic text-theme">{formatTimestamp(message.timestamp)}</p>

      {/* Segments */}
      <div className="flex flex-wrap gap-1">
        {message?.segments?.map((segment, index) => (
          <p key={index} className={`px-2 py-1 rounded-md ${getColorFromSentiment(segment.sentiment_score)}`}>
            {segment?.text}
          </p>
        ))}
      </div>

      {/* Markdown-rendered response */}
      <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-sm">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-200 px-1 py-0.5 rounded-md" {...props}>
                  {children}
                </code>
              );
            },
            table({ children }) {
              return <table className="w-full border-collapse border border-gray-300">{children}</table>;
            },
            th({ children }) {
              return <th className="border border-gray-300 bg-gray-200 px-2 py-1">{children}</th>;
            },
            td({ children }) {
              return <td className="border border-gray-300 px-2 py-1">{children}</td>;
            },
          }}
        >
          {message?.responses[0]}
        </ReactMarkdown>
      </div>
    </div>
  );
};

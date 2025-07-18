type Props = {
  message: string;
  sender: "user" | "support";
  timestamp: string;
};

export default function MessageBubble({ message, sender, timestamp }: Props) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg text-sm shadow 
        ${isUser ? "bg-blue-100 text-right" : "bg-gray-200 text-right"}`}
      >
        <p className="mb-1">{message}</p>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
    </div>
  );
}

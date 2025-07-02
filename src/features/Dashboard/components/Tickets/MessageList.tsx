import MessageBubble from "./MessageBubble";

type Message = {
  message: string;
  sender: "user" | "support";
  timestamp: string;
};

type MessageListProps = {
  messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="h-[400px] overflow-y-auto px-2 py-4 bg-white rounded-md shadow-inner">
      {messages.map((msg, index) => (
        <MessageBubble key={index} {...msg} />
      ))}
    </div>
  );
}

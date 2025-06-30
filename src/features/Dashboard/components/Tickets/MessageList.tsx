import MessageBubble from "./MessageBubble";

// types/message.ts
export interface MessageType {
  id: number;
  sender: "user" | "support";
  text: string;
  timestamp: string;
}

interface MessageListProps {
  messages: MessageType[];
}

export default function MessageList({
  messages,
}: {
  messages: MessageListProps;
}) {
  return (
    <div className="h-[400px] overflow-y-auto px-2 py-4 bg-white rounded-md shadow-inner">
      {messages.map((msg, index: number) => (
        <MessageBubble key={index + 1} {...msg} />
      ))}
    </div>
  );
}

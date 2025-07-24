import MessageList from "./components/MessageList";
import ReplyBox from "./components/ReplyBox";

export type Message = {
  message: string;
  sender: "user" | "support";
  timestamp: string;
};


type Props = {
  messages: Message[];
  onSend: (msg: string) => void;
  user?: { id: number; name: string; online: boolean };
};

export default function ChatWindow({ messages, onSend }: Props) {
  return (
    <div className="flex flex-col h-full justify-between">
      <MessageList messages={messages} />
      <ReplyBox onSend={onSend} />
    </div>
  );
}

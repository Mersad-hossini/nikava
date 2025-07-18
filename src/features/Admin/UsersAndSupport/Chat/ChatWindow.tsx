import MessageList from "./components/MessageList";
import ReplyBox from "./components/ReplyBox";

type Message = {
  message: string;
  sender: "user" | "support";
  timestamp: string;
};

type Props = {
  messages: Message[];
  onSend: (msg: string) => void;
};

export default function ChatWindow({ messages, onSend }: Props) {
  return (
    <div className="flex flex-col h-full justify-between">
      <MessageList messages={messages} />
      <ReplyBox onSend={onSend} />
    </div>
  );
}

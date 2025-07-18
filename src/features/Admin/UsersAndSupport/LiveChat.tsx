// TicketChat.tsx
"use client";

import { useState } from "react";
import ChatLayout from "./Chat/ChatLayout";
import ChatWindow from "./Chat/ChatWindow";
import { MessageBubbleProps } from "./Chat/type/chat.type";

const users = [
  { id: 1, name: "مرصاد محمد حسینی", online: true },
  { id: 2, name: "علی رستمی", online: false },
];

const initialMessages: Record<number, MessageBubbleProps[]> = {
  1: [
    {
      message: "سلام، مشکلی دارم.",
      sender: "user",
      timestamp: "۱۴۰۳/۰۴/۲۱ - ۱۰:۰۰",
    },
    {
      message: "سلام، بررسی می‌کنم.",
      sender: "support",
      timestamp: "۱۴۰۳/۰۴/۲۱ - ۱۰:۰۲",
    },
  ],
  2: [
    {
      message: "چرا سفارش من ارسال نشده؟",
      sender: "user",
      timestamp: "۱۴۰۳/۰۴/۲۰ - ۰۹:۳۰",
    },
  ],
};


export default function TicketChat() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1);
  const [allMessages, setAllMessages] = useState(initialMessages);

  const handleSend = (text: string) => {
    if (!selectedUserId) return;
    const now = new Date().toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage: MessageBubbleProps = {
      sender: "support",
      message: text,
      timestamp: `امروز - ${now}`,
    };

    setAllMessages((prev) => ({
      ...prev,
      [selectedUserId]: [...(prev[selectedUserId] || []), newMessage],
    }));
  };

  return (
    <ChatLayout
      users={users}
      selectedUserId={selectedUserId}
      onSelectUser={setSelectedUserId}
    >
      {selectedUserId ? (
        <ChatWindow
          messages={allMessages[selectedUserId] || []}
          user={users.find((u) => u.id === selectedUserId)!}
          onSend={handleSend}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          یک کاربر را برای گفتگو انتخاب کنید
        </div>
      )}
    </ChatLayout>
  );
}

"use client";

import { useState } from "react";
import ChatLayout from "./Chat/ChatLayout";
import ChatWindow from "./Chat/ChatWindow";

const users = [
  { id: 1, name: "مرصاد محمد حسینی" },
  { id: 2, name: "علی رستمی" },
];

const messages = {
  1: [
    { message: "سلام، مشکلی دارم.", sender: "user", timestamp: "۱۴۰۳/۰۴/۲۱" },
    {
      message: "سلام، بررسی می‌کنم.",
      sender: "support",
      timestamp: "۱۴۰۳/۰۴/۲۱",
    },
  ],
  2: [
    {
      message: "چرا سفارش من ارسال نشده؟",
      sender: "user",
      timestamp: "۱۴۰۳/۰۴/۲۰",
    },
  ],
};

export default function TicketChat() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1);
  const [allMessages, setAllMessages] = useState(messages);

  const handleSend = (text: string) => {
    if (!selectedUserId) return;
    const newMsg = {
      message: text,
      sender: "support",
      timestamp: new Date().toLocaleTimeString("fa-IR"),
    };
    setAllMessages((prev) => ({
      ...prev,
      [selectedUserId]: [...(prev[selectedUserId] || []), newMsg],
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
          onSend={handleSend}
        />
      ) : (
        <p>کاربری را برای پاسخ انتخاب کنید.</p>
      )}
    </ChatLayout>
  );
}

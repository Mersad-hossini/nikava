"use client";

import { useState } from "react";
import MessageList from "./MessageList";
import ReplyBox from "./ReplyBox";

export type MessageBubbleProps = {
  sender: "user" | "support";
  message: string;
  timestamp: string;
};

export default function TicketDetails() {
  // 📨 پیام‌های فرضی (در عمل از API می‌گیری)
  const [messages, setMessages] = useState<MessageBubbleProps[]>([
    {
      sender: "support",
      message: "سلام، مشکل شما را بررسی کردیم و در حال پیگیری هستیم.",
      timestamp: "۱۴۰۴/۰۴/۱۰ - ۱۰:۳۰",
    },
    {
      sender: "user",
      message: "ممنون. فقط لطفاً سریع‌تر رسیدگی بشه.",
      timestamp: "۱۴۰۴/۰۴/۱۰ - ۱۰:۳۵",
    },
  ]);

  // ✅ هندل ارسال پیام جدید
  const handleSend = (newMessage: string) => {
    const now = new Date().toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages([
      ...messages,
      {
        sender: "user",
        message: newMessage,
        timestamp: `امروز - ${now}`,
      },
    ]);
  };

  return (
    <div className="container max-w-3xl bg-white shadow-md mx-auto px-4 py-10 rounded-xl">
      <h1 className="text-xl font-bold mb-6 text-zinc-800">جزئیات تیکت</h1>

      {/* پیام‌ها */}
      <MessageList messages={messages} />

      {/* باکس پاسخ */}
      <ReplyBox onSend={handleSend} />
    </div>
  );
}

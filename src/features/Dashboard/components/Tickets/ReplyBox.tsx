"use client"

import { useState } from "react";

export default function ReplyBox({ onSend }) {
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex items-center gap-2 mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (message.trim()) {
          onSend(message);
          setMessage("");
        }
      }}
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 rounded-md border border-zinc-200 outline-0 px-3 py-2 text-sm"
        placeholder="پیام خود را بنویسید..."
      />
      <button
        type="submit"
        className="bg-zinc-700 text-white text-sm px-4 py-2 rounded-md cursor-pointer hover:bg-zinc-800 transition"
      >
        ارسال
      </button>
    </form>
  );
}

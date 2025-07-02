"use client";

import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { Smile } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
}

export default function ChatInput({
  message,
  setMessage,
  onSend,
}: ChatInputProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (showEmojiPicker && event.key === "Escape") {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showEmojiPicker]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim()) {
      onSend();
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev: string) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full px-3 py-2 bg-white/30 backdrop-blur-md flex items-center gap-2 z-10">
      <div className="relative" ref={emojiRef}>
        {showEmojiPicker && (
          <div className="absolute bottom-full right-0 mb-2 z-50">
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              theme={Theme.DARK}
              autoFocusSearch={false}
              width={300}
              height={430}
            />
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="پیام خود را بنویسید..."
        className="flex-1 bg-transparent text-white placeholder-white/70 focus:outline-none px-2"
      />
      <button
        onClick={() => setShowEmojiPicker((prev) => !prev)}
        className="text-gray-300 text-xl cursor-pointer"
      >
        <Smile />
      </button>
      <button
        onClick={onSend}
        className="bg-green-500 text-sm hover:bg-green-600 text-white px-3 cursor-pointer py-1 rounded-2xl transition"
      >
        ارسال
      </button>
    </div>
  );
}

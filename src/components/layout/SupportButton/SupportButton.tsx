"use client";

import { useRef, useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import { ArrowLeft, Headset, X } from "lucide-react";

export default function ChatWidget() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { text: string; from: "user" | "support" }[]
  >([{ text: "سلام 👋 چطور می‌تونم کمکتون کنم؟", from: "support" }]);

  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        buttonRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (isModalOpen && event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { text: message.trim(), from: "user" }]);
    setMessage("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "ممنون از پیام شما 🌟", from: "support" },
      ]);
      const audio = new Audio("/sounds/chatSound.mp3");
      audio.volume = 1;
      audio.play().catch((e) => console.warn("صدا پخش نشد:", e));
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 hidden sm:flex">
      <div className="z-50">
        {/* Toggle button */}
        <div
          ref={buttonRef}
          className="border rounded-full p-3 bg-green-500 border-green-500 cursor-pointer shadow-lg"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          {isModalOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Headset className="size-6 text-white" />
          )}
        </div>

        {/* Chat modal */}
        <div
          ref={modalRef}
          className={`transition-all duration-300 ease-in-out absolute right-0 w-80 max-h-[calc(100vh-4rem)] h-[36rem] rounded-2xl shadow-2xl overflow-hidden 
          ${
            isModalOpen
              ? "bottom-14 opacity-100 scale-100"
              : "bottom-20 opacity-0 scale-95 pointer-events-none"
          }
        `}
        >
          <div
            className="flex flex-col h-full bg-cover bg-center backdrop-blur-lg"
            style={{ backgroundImage: `url("/images/contactBackground.png")` }}
          >
            {/* Header */}
            <div className="flex-none flex justify-between items-center bg-white/30 backdrop-blur-md text-white rounded-t-2xl py-3 px-5 text-lg">
              <h2 className="select-none">پشتیبانی آنلاین</h2>
              <ArrowLeft
                className="cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </div>

            {/* Scrollable chat messages */}
            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto px-3 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <p
                    className={`px-3 py-2 rounded-xl w-fit text-white text-sm sm:text-base max-w-[80%] leading-relaxed shadow-sm 
                        whitespace-pre-wrap break-words
                        ${
                          msg.from === "user"
                            ? "bg-green-600"
                            : "bg-white/20 backdrop-blur-sm"
                        }
                      `}
                  >
                    {msg.text}
                    <span className="block text-xs mt-1 text-white/60">
                      {msg.from === "user" ? `شما 4:57` : "ادمین 6:00"}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Chat input */}
            <ChatInput
              message={message}
              setMessage={setMessage}
              onSend={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";

export default function TicketForm() {
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("فنی");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold text-zinc-800 mb-6">ارسال تیکت جدید</h2>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            موضوع
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-zinc-200 outline-0 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            دپارتمان
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border border-zinc-200 outline-0 rounded-md px-3 py-2 text-sm"
          >
            <option value="فنی">فنی</option>
            <option value="مالی">مالی</option>
            <option value="سفارشات">سفارشات</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            پیام
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full border border-zinc-200 outline-0 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-zinc-700 text-white text-sm px-5 py-2 rounded-md hover:bg-zinc-800 transition cursor-pointer"
        >
          ارسال تیکت
        </button>
      </form>
    </div>
  );
}

"use client";

import React from "react";
import DataTable from "../components/DataTable/DataTable";
import { Column, CommentProps } from "../components/types/Table.type";

const comments = [
  {
    id: 1,
    username: "مرصاد محمد حسینی",
    phone_number: "09217045099",
    score: 3,
    status: true,
    createdAt: "۱۴۰۳/۰۴/۲۱",
    productTitle: "هدفون بی‌سیم سونی",
    text: "هدفون خوبی بود ولی یکم با تأخیر رسید",
    reply: "",
  },
];

const commentColumns: Column<CommentProps>[] = [
  { title: "شناسه", dataIndex: "id" },
  { title: "نام کاربر", dataIndex: "username" },
  { title: "شماره تماس", dataIndex: "phone_number" },
  { title: "امتیاز", dataIndex: "score" },
  {
    title: "وضعیت",
    dataIndex: "status",
    render: (value) => (
      <span
        className={`badge text-white ${
          value ? "badge-success" : "badge-warning"
        }`}
      >
        {value ? "تأیید شده" : "در انتظار تایید"}
      </span>
    ),
  },
  {
    title: "تاریخ",
    dataIndex: "createdAt",
    render: (value) => (
      <span>{new Date(value as string).toLocaleDateString("fa-IR")}</span>
    ),
  },
];

function Comments() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          مدیریت نظرات
        </h2>
      </div>

      <DataTable
        columns={commentColumns}
        datas={comments}
        onDelete={(id) => console.log("Delete", id)}
        onBan={(id) => console.log("Ban", id)}
        onApprove={(id) => console.log("تأیید نظر", id)}
        onReply={(id, reply) => console.log("پاسخ برای", id, "متن:", reply)}
      />
    </div>
  );
}

export default Comments;
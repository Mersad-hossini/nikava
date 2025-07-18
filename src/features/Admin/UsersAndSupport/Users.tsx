"use client";

import React from "react";
import DataTable from "../components/DataTable/DataTable";
import { Column, UsersProps } from "../components/types/Table.type";

const users = [
  {
    id: 1,
    name: "مرصاد محمد حسینی",
    email: "mersadmh007.1380@gmail.com",
    phone_number: "09217045099",
    role: "admin",
    orders: "0",
    signupAt: "۱۴۰۳/۰۴/۲۱",
    status: true,
  },
  {
    id: 2,
    name: "علی رضایی",
    email: "ali.1380@gmail.com",
    phone_number: "09217045022",
    role: "user",
    orders: "10",
    signupAt: "۱۴۰۳/۰۴/۲۱",
    status: false,
  },
];

const productColumns: Column<UsersProps>[] = [
  { title: "شناسه", dataIndex: "id" },
  { title: "نام کاربر", dataIndex: "name" },
  { title: "ایمیل", dataIndex: "email" },
  { title: "شماره تماس", dataIndex: "phone_number" },
  { title: "تاریخ ثبت نام", dataIndex: "signupAt" },
  { title: "تعداد سفارشات", dataIndex: "orders" },
  {
    title: "سطح دسترسی",
    dataIndex: "role",
    render: (value) => (
      <span
        className={`badge text-white ${
          value === "admin" ? "bg-red-400" : "bg-green-400"
        }`}
      >
        {value === "admin" ? "ادمین" : "کاربر"}
      </span>
    ),
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    render: (value) => (
      <span
        className={`badge text-white ${
          value ? "badge-success" : "badge-error"
        }`}
      >
        {value ? "فعال" : "غیرفعال"}
      </span>
    ),
  },
];

function Users() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          مدیریت کاربران
        </h2>
      </div>

      <DataTable
        columns={productColumns}
        datas={users}
        onDelete={(id) => console.log("Delete", id)}
        onBan={(id) => console.log("Ban", id)}
        onRoleChange={(id, newRole) => console.log("Role changed", id, newRole)}
      />
    </div>
  );
}

export default Users;
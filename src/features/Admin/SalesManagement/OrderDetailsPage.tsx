"use client";

import React, { useRef } from "react";
import { OrderProps } from "./types/Table.type";

// داده‌ی فرضی
const dummyOrder: OrderProps = {
  id: 1234,
  user: { name: "علی رضایی" },
  phone: "09121234567",
  createdAt: "2025-07-10T12:30",
  totalPrice: 1540000,
  paymentStatus: "paid",
  deliveryStatus: "shipped",
  address: "تهران، خیابان انقلاب، کوچه آزادی، پلاک ۱۲۳، واحد ۴",
  shippingTrackingCode: "TRK12345678",
  note: "لطفاً با بسته‌بندی هدیه ارسال شود",
  adminNote: "اولین سفارش کاربر - بررسی برای پیشنهاد وفاداری",
  items: [
    {
      id: 1,
      name: "هدفون بی‌سیم سونی",
      qty: 2,
      unitPrice: 350000,
      totalPrice: 700000,
    },
    {
      id: 2,
      name: "ماوس گیمینگ",
      qty: 1,
      unitPrice: 840000,
      totalPrice: 840000,
    },
  ],
};

export default function OrderDetails() {
  const order = dummyOrder;
  const printRef = useRef(null);

  const statusMap: Record<string, string> = {
    paid: "پرداخت‌شده",
    unpaid: "پرداخت‌نشده",
    pending: "در انتظار",
    shipped: "ارسال‌شده",
    delivered: "تحویل‌شده",
    cancelled: "لغوشده",
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">جزئیات سفارش #{order.id}</h2>
      </div>

      <div
        ref={printRef}
        className="bg-white rounded-xl border border-zinc-100 shadow-md p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="font-semibold">نام مشتری:</span> {order.user.name}
          </div>
          <div>
            <span className="font-semibold">شماره تماس:</span> {order.phone}
          </div>
          <div>
            <span className="font-semibold">تاریخ ثبت:</span>{" "}
            {new Date(order.createdAt).toLocaleString("fa-IR")}
          </div>
          <div>
            <span className="font-semibold">آدرس:</span> {order.address}
          </div>
          <div>
            <span className="font-semibold">مبلغ کل:</span>{" "}
            {order.totalPrice.toLocaleString()} تومان
          </div>
          <div>
            <span className="font-semibold">وضعیت پرداخت:</span>{" "}
            {statusMap[order.paymentStatus]}
          </div>
          <div>
            <span className="font-semibold">وضعیت ارسال:</span>{" "}
            {statusMap[order.deliveryStatus]}
          </div>
          <div>
            <span className="font-semibold">کد پیگیری:</span>{" "}
            {order.shippingTrackingCode || "-"}
          </div>
        </div>

        <h3 className="font-semibold mb-2">محصولات سفارش‌داده‌شده</h3>
        <div className="overflow-x-auto">
          <table className="table table-sm table-zebra w-full text-sm">
            <thead>
              <tr>
                <th>نام محصول</th>
                <th>تعداد</th>
                <th>قیمت واحد</th>
                <th>قیمت کل</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.unitPrice.toLocaleString()} تومان</td>
                  <td>{item.totalPrice.toLocaleString()} تومان</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm">
          <div>
            <span className="font-semibold">یادداشت مشتری:</span>{" "}
            {order.note || "-"}
          </div>
          <div className="mt-2">
            <span className="font-semibold">یادداشت ادمین:</span>{" "}
            {order.adminNote || "-"}
          </div>
        </div>
      </div>
    </div>
  );
}

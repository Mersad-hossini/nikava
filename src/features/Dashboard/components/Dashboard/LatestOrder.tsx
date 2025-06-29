import React from "react";

const orders = [
  {
    id: "DALE456",
    date: "۱۴۰۳/۰۴/۱۰",
    total: "۵۵۰٬۰۰۰",
    status: "تحویل‌شده",
  },
  {
    id: "FGWZ5",
    date: "۱۴۰۳/۰۴/۰۸",
    total: "۲۱۰٬۰۰۰",
    status: "درحال پردازش",
  },
  {
    id: "GGWZA9",
    date: "۱۴۰۳/۰۴/۰۸",
    total: "۲۱۰٬۰۰۰",
    status: "در حال رهگیری",
  },
];

function LatestOrder() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-zinc-300 rounded-lg shadow bg-zinc-300 p-4 flex flex-col gap-3"
        >
          <div className="flex items-center justify-between text-sm font-medium">
            <span>سفارش #{order.id}</span>
            <span className="text-xs">{order.date}</span>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-y-2 text-sm">
            <div className="flex items-center gap-1">
              <span>مبلغ:</span>
              <span>{order.total} تومان</span>
            </div>

            <div>
              <span
                className={`px-2 py-1 text-xs text-white rounded-full whitespace-nowrap ${
                  order.status === "تحویل‌شده"
                    ? "bg-green-600"
                    : order.status === "درحال پردازش"
                    ? "bg-yellow-600"
                    : "bg-red-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestOrder;

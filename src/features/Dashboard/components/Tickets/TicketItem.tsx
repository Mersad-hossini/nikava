import Link from "next/link";
import { MessageCircle } from "lucide-react";

type Props = {
  id: number;
  subject: string;
  department: string;
  status: string;
  createdAt: string;
};

export default function TicketItem({
  id,
  subject,
  department,
  status,
  createdAt,
}: Props) {
  return (
    <Link
      href={`/dashboard/tickets/${id}`}
      className="flex justify-between items-center bg-zinc-100 rounded-xl p-4 border border-zinc-100 shadow-md hover:shadow-lg transition"
    >
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-zinc-800">{subject}</span>
        <span className="text-sm text-zinc-500">دپارتمان: {department}</span>
        <span className="text-xs text-zinc-400">تاریخ: {createdAt}</span>
      </div>
      <div className="flex flex-col justify-end items-end gap-2 text-sm">
        <MessageCircle size={18} className="text-zinc-500" />
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "باز"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
}

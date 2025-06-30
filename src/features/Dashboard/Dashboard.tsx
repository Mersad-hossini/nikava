import {
  Book,
  ShoppingCart,
  Heart,
  Users,
  ArrowLeft,
  ListOrdered,
  Ticket,
} from "lucide-react";
import DashboardCard from "./components/Dashboard/DashboardCard";
import Link from "next/link";
import DashboardTicket from "./components/Dashboard/DashboardTicket";
import LatestOrder from "./components/Dashboard/LatestOrder";

export default function Dashboard() {
  return (
    <>
      {/* Box */}
      <div className="flex flex-wrap justify-evenly gap-4 px-4 py-6 bg-white rounded-xl shadow-lg">
        <DashboardCard
          icon={Book}
          color="text-green-500"
          title="محصول‌های من"
          value="۳۱ محصول"
        />
        <DashboardCard
          icon={ShoppingCart}
          color="text-blue-500"
          title="سفارش‌ها"
          value="۱۵ سفارش"
        />
        <DashboardCard
          icon={Heart}
          color="text-red-500"
          title="علاقه‌مندی‌ها"
          value="۸ مورد"
        />
        <DashboardCard
          icon={Users}
          color="text-yellow-500"
          title="مشتری‌ها"
          value="۱۲ نفر"
        />
      </div>

      {/* Latest Orders */}
      <section className="gap-4 px-4 py-6 bg-white rounded-xl shadow-lg mt-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ListOrdered className="text-red-500" />
            <h1 className="text-xl font-bold text-zinc-800 ">سفارش‌های من</h1>
          </div>
          <Link
            href="/dashboard/orders"
            className="flex items-center gap-2 border border-zinc-100 bg-zinc-100 shadow-md px-3 py-2 rounded-lg"
          >
            <ArrowLeft size={18} />
          </Link>
        </div>
        <LatestOrder />
      </section>

      {/* Latest Tickets */}
      <section className="gap-4 px-4 py-6 bg-white rounded-xl shadow-lg mt-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Ticket className="text-green-500" />
            <h3 className="text-lg font-bold">تیکت‌ها</h3>
          </div>
          <Link
            href="/dashboard/tickets"
            className="flex items-center gap-2 border border-zinc-100 bg-zinc-100 shadow-md px-3 py-2 rounded-lg"
          >
            <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <DashboardTicket />
          <DashboardTicket />
          <DashboardTicket />
        </div>
      </section>
    </>
  );
}

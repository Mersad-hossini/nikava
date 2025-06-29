import { Book, ShoppingCart, Heart, Users, ArrowLeft } from "lucide-react";
import DashboardCard from "./components/Dashboard/DashboardCard";
import Link from "next/link";
import DashboardTicket from "./components/Dashboard/DashboardTicket";
import LatestOrder from "./components/Dashboard/LatestOrder";

export default function Dashboard() {
  return (
    <>
      {/* Box */}
      <div className="flex flex-wrap justify-evenly gap-4 px-4 py-6 bg-zinc-200 rounded-xl shadow-lg">
        <DashboardCard icon={Book} title="محصول‌های من" value="۳۱ محصول" />
        <DashboardCard icon={ShoppingCart} title="سفارش‌ها" value="۱۵ سفارش" />
        <DashboardCard icon={Heart} title="علاقه‌مندی‌ها" value="۸ مورد" />
        <DashboardCard icon={Users} title="مشتری‌ها" value="۱۲ نفر" />
      </div>

      {/* Latest Orders */}
      <section className="gap-4 px-4 py-6 bg-zinc-200 rounded-xl shadow-lg mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">سفارش ها</h3>
          <Link
            href="#"
            className="flex items-center gap-2 border border-zinc-300 bg-zinc-300 shadow px-3 py-2 rounded-lg"
          >
            <ArrowLeft size={18} />
          </Link>
        </div>
        <LatestOrder />
      </section>

      {/* Latest Tickets */}
      <section className="gap-4 px-4 py-6 bg-zinc-200 rounded-xl shadow-lg mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">تیکت‌ها</h3>
          <Link
            href="#"
            className="flex items-center gap-2 border border-zinc-300 bg-zinc-300 shadow px-3 py-2 rounded-lg"
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
import React from "react";
import DashboardCard from "../../Dashboard/components/Dashboard/DashboardCard";
import { ShoppingCart, DollarSign, Users, Package } from "lucide-react";
import MonthlySalesChart from "./Charts/MonthlySalesChart";
import OrderStatusPieChart from "./Charts/OrderStatusPieChart";
import WeeklyIncomeBarChart from "./Charts/WeeklyIncomeBarChart";
import TopCategoriesRadarChart from "./Charts/TopCategoriesRadarChart";

function AdminDashboard() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-4 px-4 py-6 bg-white rounded-xl shadow-lg">
        <DashboardCard
          icon={ShoppingCart}
          color="text-blue-500"
          title="کل سفارش‌ها"
          value="۱۲۵۰ سفارش"
        />
        <DashboardCard
          icon={DollarSign}
          color="text-green-500"
          title="مجموع فروش"
          value="۹۸۵,۰۰۰,۰۰۰ تومان"
        />
        <DashboardCard
          icon={Users}
          color="text-yellow-500"
          title="کاربران"
          value="۴۲۰ نفر"
        />
        <DashboardCard
          icon={Package}
          color="text-purple-500"
          title="محصولات فعال"
          value="۳۱۵ محصول"
        />
      </div>

      <div className="mt-8 space-y-6">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <MonthlySalesChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <WeeklyIncomeBarChart />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <OrderStatusPieChart />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <TopCategoriesRadarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

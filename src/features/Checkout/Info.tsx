import CustomerInfoForm from "./components/Infos/CustomerInfoForm";
import OrderSummary from "./components/Infos/OrderSummary";
import PaymentSection from "./components/Infos/PaymentSection";

export default function Info() {
  return (
    <div className="min-h-screen my-4 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-xl p-6 space-y-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          🧾 تکمیل اطلاعات و تایید نهایی سفارش
        </h2>

        <CustomerInfoForm />
        <OrderSummary />
        <PaymentSection />
      </div>
    </div>
  );
}
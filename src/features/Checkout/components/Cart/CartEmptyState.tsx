import { ShoppingCart } from "lucide-react";

export default function CartEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <ShoppingCart className="w-20 h-20 text-zinc-300" />
      <span className="text-md sm:text-lg mt-5 font-bold text-zinc-400">
        هنوز محصولی به سبد خرید اضافه نشده
      </span>
    </div>
  );
}
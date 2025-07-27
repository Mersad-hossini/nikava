import React from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { ProductType } from "@/types/types";

interface CategoryProductGridProps {
  products: ProductType[];
}
const products = [
  {
    id: "1",
    title: " هارد مدل XM-22",
    price: 850000,
    discountedPrice: 690000,
    discountPercent: 19,
    rating: 4.3,
    image: "/images/product1.webp",
  },
  {
    id: "2",
    title: "لپ تاپ مدل FitPro T5",
    price: 1250000,
    discountedPrice: 980000,
    discountPercent: 22,
    rating: 4.1,
    image: "/images/product2.webp",
  },
  {
    id: "3",
    title: "ایفون مدل 16 Max Pro ",
    price: 190000,
    discountedPrice: 159000,
    discountPercent: 16,
    rating: 4.7,
    image: "/images/product3.webp",
  },
  {
    id: "4",
    title: "لباس شویی مدل LG",
    price: 460000,
    discountedPrice: 389000,
    discountPercent: 15,
    rating: 4.5,
    image: "/images/product4.webp",
  },
  {
    id: "5",
    title: "سرخ کن شیائومی",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product5.webp",
  },
  {
    id: "6",
    title: "هدفون بلوتوثی مدل XM-22",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/AirBuds.webp",
  },
];
export default function CategoryProductGrid({

}: CategoryProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mid-md:grid-cols-4 justify-items-center gap-4">
      {products.map((product, i) => (
        <ProductCard {...product} key={i} />
      ))}
    </div>
  );
}

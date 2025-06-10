import React from "react";
import CategoriesItem from "./CategoriesItem";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

function HomeCategories() {
  return (
    <div className="relative flex flex-wrap items-center justify-around gap-10 mb-10 mt-10">
      <CategoriesItem img={"/images/banner_Categoriey1.png"} title="موبایل" />
      <CategoriesItem img={"/images/banner_Categoriey2.png"} title="لپ تاپ" />
      <CategoriesItem
        img={"/images/banner_Categoriey3.png"}
        title="کنسول بازی"
      />
      <CategoriesItem img={"/images/banner_Categoriey4.png"} title="قهوه ساز" />
      <CategoriesItem img={"/images/banner_Categoriey5.png"} title="لباسشویی" />
      <Link
        href="#"
        className="hidden mid-md:flex justify-center items-center bg-neutral-100 rounded-full  text-neutral-400 p-4"
      >
        <span className="text-2xl">
          <Ellipsis />
        </span>
      </Link>
    </div>
  );
}

export default HomeCategories;

import React from "react";
import CategoriesItem from "./CategoriesItem";

function HomeCategories() {
  return (
    <div className="relative flex items-center justify-around gap-6 mt-10">
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItem />
    </div>
  );
}

export default HomeCategories;

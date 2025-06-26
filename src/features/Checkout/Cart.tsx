"use client";
import React from "react";
import Link from "next/link";
import CartTotal from "./components/Cart/CartTotal";
import CartItem from "./components/Cart/CartItem";
// import CartEmptyState from "./components/Cart/CartEmptyState";

function Cart() {
  return (
    <div className="my-4 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center sm:text-start">
          🛒 سبد خرید شما
        </h2>

        {/* Cart Item */}
        <CartItem />

        <CartTotal />

        {/* Checkout button */}
        <Link
          href="/checkout/info"
          className="flex items-center justify-center h-11 w-full text-white bg-teal-600 rounded-xl cursor-pointer transition hover:bg-teal-700"
        >
          تایید و تکمیل سفارش
        </Link>

        {/* <CartEmptyState /> */}
      </div>
    </div>
  );
}

export default Cart;

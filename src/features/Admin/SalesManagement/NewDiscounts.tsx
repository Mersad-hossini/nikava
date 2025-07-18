"use client";
import FormDatePicker from "@/components/ui/FormInput/FormDatePicker";
import FormInput from "@/components/ui/FormInput/FormInput";
import React, { useState } from "react";
import { DateObject } from "react-multi-date-picker";

function NewDiscounts() {
  const [discountType, setDiscountType] = useState<"code" | "global">("code");

  const isCodeType = discountType === "code";
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* عنوان بخش */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold text-zinc-500 mb-2 border-zinc-200 border-b pb-1">
            ایجاد تخفیف جدید
          </h3>
        </div>

        {/* نوع تخفیف */}
        <FormInput
          as="select"
          name="type"
          label="نوع تخفیف"
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value as "code" | "global")}
          options={[
            { label: "کد تخفیف", value: "code" },
            { label: "تخفیف همگانی", value: "global" },
          ]}
        />

        {/* فقط اگر نوع تخفیف "کد" باشد */}
        {isCodeType && (
          <FormInput
            as="input"
            name="code"
            type="text"
            placeholder="مثلاً: OFF20"
            label="کد تخفیف"
          />
        )}

        {/* درصد تخفیف */}
        <FormInput
          as="input"
          name="discountPercent"
          type="number"
          placeholder="مثلاً 20"
          label="درصد تخفیف"
        />

        {/* تعداد مجاز استفاده */}
        <FormInput
          as="input"
          name="usageLimit"
          type="number"
          placeholder="مثلاً 100"
          label="تعداد استفاده مجاز"
        />

        <FormDatePicker
          name="startDate"
          label="زمان شروع"
          value={startDate}
          onChange={setStartDate}
        />

        <FormDatePicker
          name="endDate"
          label="زمان پایان"
          value={endDate}
          onChange={setEndDate}
        />

        {/* انتخاب دسته‌بندی‌ها */}
        <FormInput
          as="select"
          type="select"
          name="categories"
          label="دسته‌بندی‌ها"
          options={[
            { label: "همه محصولات", value: "all" },
            { label: "کالای دیجیتال", value: "digital" },
            { label: "پوشاک", value: "clothing" },
            { label: "کتاب", value: "book" },
          ]}
        />

        <FormInput
          as="input"
          type="file"
          name="isActive"
          label="بنر تخفیفات"
        />
        {/* فعال بودن */}
        <FormInput
          as="input"
          type="checkbox"
          name="isActive"
          label="فعال باشد؟"
        />

        {/* دکمه ارسال */}
        <div className="md:col-span-2 text-left mt-4">
          <button type="submit" className="btn btn-success text-white px-8">
            ثبت تخفیف
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewDiscounts;

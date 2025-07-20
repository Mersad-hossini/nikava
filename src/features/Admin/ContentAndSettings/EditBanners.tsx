import FormInput from "@/components/ui/FormInput/FormInput";
import React from "react";

export default function EditBanners() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <h2 className="text-xl font-bold text-zinc-700 mb-6">ویرایش بنر صفحه اصلی</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput as="input" name="title" label="عنوان بنر" />
        <FormInput as="input" name="link" label="لینک مقصد" />
        <FormInput
          as="select"
          name="position"
          label="مکان نمایش"
          options={[
            { value: "homepage", label: "صفحه اصلی" },
            { value: "category", label: "دسته‌بندی" },
            { value: "offer", label: "پیشنهاد شگفت‌انگیز" },
            { value: "sidebar", label: "سایدبار" },
          ]}
        />
        <FormInput as="input" type="number" name="order" label="ترتیب نمایش" />
        <FormInput as="input" type="file" name="image" label="تصویر بنر" />
        <FormInput
          as="input"
          type="checkbox"
          name="isActive"
          label="بنر فعال باشد؟"
        />
        <div className="md:col-span-2 text-left">
          <button className="btn btn-success text-white px-8">
            ویرایش بنر
          </button>
        </div>
      </form>
    </div>
  );
}

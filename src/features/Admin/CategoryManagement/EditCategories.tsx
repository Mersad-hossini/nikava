import FormInput from "@/components/ui/FormInput/FormInput";
import React from "react";

function EditCategories() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <h2 className="text-xl font-bold text-zinc-700 mb-6">
        ویرایش دسته بندی هدفون
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          as="input"
          name="name"
          type="text"
          placeholder="مثلاً هدفون"
          label="نام دسته‌بندی"
        />

        <FormInput
          as="input"
          name="slug"
          type="text"
          placeholder="مثلاً headphones"
          label="نامک (Slug)"
        />

        <FormInput
          as="select"
          name="parentId"
          label="زیرمجموعه‌ی دسته"
          options={[
            { value: "", label: "دسته اصلی" },
            { value: "1", label: "کالای دیجیتال" },
            { value: "2", label: "لوازم جانبی" },
          ]}
        />

        <FormInput
          as="input"
          type="checkbox"
          name="status"
          label="فعال باشد؟"
        />

        <div className="md:col-span-2 text-left">
          <button className="btn btn-success text-white px-8">
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCategories;

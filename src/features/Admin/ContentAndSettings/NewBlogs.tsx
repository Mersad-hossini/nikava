"use client";

import FormInput from "@/components/ui/FormInput/FormInput";
import MinimalEditor from "../components/Editor/Editor";

export default function NewBlog() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        📝 افزودن وبلاگ جدید
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          as="input"
          label="عنوان وبلاگ"
          name="title"
          type="text"
          placeholder="مثلاً راهنمای خرید لپ‌تاپ"
        />

        <FormInput
          as="input"
          label="نام نویسنده"
          name="author"
          type="text"
          placeholder="مثلاً علی رضایی"
        />

        <FormInput
          as="input"
          label="آپلود تصویر کاور"
          name="cover"
          type="file"
        />

        <div className="flex items-center gap-x-2">
          <FormInput
            as="input"
            label="منتشر شود؟"
            name="cover"
            type="checkbox"
          />
        </div>

        {/* ادیتور CKEditor برای محتوای وبلاگ */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            متن کامل وبلاگ
          </label>
          <MinimalEditor />
        </div>

        <div className="md:col-span-2 text-left mt-4">
          <button className="btn btn-success text-white px-10">
            ذخیره وبلاگ
          </button>
        </div>
      </form>
    </div>
  );
}
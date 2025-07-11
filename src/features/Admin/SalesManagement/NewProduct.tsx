import FormInput from "@/components/ui/FormInput/FormInput";
import TagInput from "@/components/ui/TagInput";
import React from "react";
import ProductSpecsForm from "../components/ProductSpecsForm/ProductSpecsForm";

function NewProduct() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <h2 className="text-xl font-bold text-zinc-700 mb-6">
        افزودن محصول جدید
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* بخش اول: مشخصات کلی */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold text-zinc-500 mb-2 border-zinc-200 border-b pb-1">
            مشخصات کلی
          </h3>
        </div>

        <FormInput
          as="input"
          name="name"
          type="text"
          placeholder="نام محصول"
          label="نام محصول"
        />
        <FormInput
          as="select"
          name="category"
          label="دسته‌بندی"
          options={[
            { value: "", label: "انتخاب کنید" },
            { value: "phone", label: "گوشی موبایل" },
            { value: "laptop", label: "لپ‌تاپ" },
          ]}
        />
        <FormInput
          as="input"
          name="price"
          type="number"
          placeholder="مثلاً ۹۰۰۰۰۰"
          label="قیمت (تومان)"
        />
        <FormInput
          as="input"
          name="stock"
          type="number"
          placeholder="موجودی"
          label="موجودی"
        />

        {/* وضعیت و توضیحات */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold text-zinc-500 mb-2 border-zinc-200 border-b pb-1">
            وضعیت و توضیحات
          </h3>
        </div>

        <FormInput
          as="textarea"
          name="shortDescription"
          placeholder="توضیح کوتاه..."
          label="توضیح کوتاه"
          rows={4}
        />
        <FormInput
          as="textarea"
          name="description"
          placeholder="توضیحات بلند..."
          label="توضیحات بلند"
          rows={4}
        />
        <FormInput
          as="input"
          type="checkbox"
          name="active"
          label="محصول فعال باشد؟"
        />

        {/* برچسب‌ها */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold text-zinc-500 mb-2 border-zinc-200 border-b pb-1">
            برچسب‌ها و تگ‌ها
          </h3>
        </div>
        <TagInput title="برچسب‌ها" />
        <TagInput title="تگ‌ها" />

        {/* مشخصات فنی و تصویر */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold text-zinc-500 mb-2 border-zinc-200 border-b pb-1">
            تصویر و مشخصات فنی
          </h3>
        </div>
        <ProductSpecsForm />
        <FormInput
          as="input"
          type="file"
          name="image"
          label="تصویر محصول"
          accept="image/*"
        />

        {/* دکمه */}
        <div className="md:col-span-2 text-left">
          <button className="btn btn-success text-white px-8">
            افزودن محصول
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;

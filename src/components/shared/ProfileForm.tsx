// components/ProfileForm.tsx
"use client";
import FormInput from "@/components/ui/FormInput/FormInput";
import Image from "next/image";

export default function ProfileForm({
  title = "ویرایش اطلاعات حساب",
  defaultImage = "/images/profile.jpg",
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-white shadow-md rounded-xl space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        🧾{title}
      </h1>

      {/* Profile Image */}
      <div className="flex justify-center">
        <label className="cursor-pointer relative w-24 h-24">
          <Image
            src={defaultImage}
            alt="profile"
            fill
            className="rounded-full border-4 border-zinc-200 object-cover"
          />
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          as="input"
          label="نام و نام خانوادگی"
          name="fullName"
          type="text"
          placeholder="مثلاً علی رضایی"
        />

        <FormInput
          as="input"
          label="ایمیل"
          type="email"
          name="email"
          placeholder="example@email.com"
        />

        <FormInput
          as="input"
          label="شماره موبایل"
          type="tel"
          name="phone"
          placeholder="0912..."
        />

        <FormInput
          as="input"
          label="کد پستی"
          type="text"
          name="postalCode"
          placeholder="مثلاً ۱۷۱۵۴۳۲۶۴۱"
          dir="ltr"
        />

        <FormInput
          as="textarea"
          label="آدرس کامل"
          type="text"
          name="address"
          placeholder="مثلاً تهران، خیابان شریعتی..."
        />

        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold pt-4 border-t border-gray-200 text-gray-700">
            🔒 تغییر یا تنظیم رمز عبور
          </h2>
        </div>

        <FormInput
          as="input"
          label="رمز عبور فعلی"
          name="currentPassword"
          type="password"
          placeholder="رمز عبور فعلی را وارد کنید"
        />

        <FormInput
          as="input"
          label="رمز عبور جدید"
          name="newPassword"
          type="password"
          placeholder="رمز عبور جدید را وارد کنید"
        />

        <FormInput
          as="input"
          label="تکرار رمز عبور جدید"
          name="confirmPassword"
          type="password"
          placeholder="رمز عبور جدید را مجدداً وارد کنید"
        />
        <div className="md:col-span-2 pt-4">
          <button className="flex items-center justify-center h-11 w-full text-white bg-teal-600 rounded-xl cursor-pointer transition hover:bg-teal-700">
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}

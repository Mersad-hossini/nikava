import FormInput from "@/components/ui/FormInput/FormInput";

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-white shadow-md rounded-xl space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        🧾ویرایش اطلاعات حساب
      </h1>

      <form className="space-y-4">
        <FormInput
          as="input"
          label="نام و نام خانوادگی"
          name="fullName"
          type="string"
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
          placeholder="مثلاً تهران, خیابان شریعتی..."
        />
      </form>

      <div className="pt-4">
        <button className="flex items-center justify-center h-11 w-full text-white bg-teal-600 rounded-xl cursor-pointer transition hover:bg-teal-700">
          ذخیره تغییرات
        </button>
      </div>
    </div>
  );
}

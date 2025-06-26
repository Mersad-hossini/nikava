export default function CustomerInfoForm() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          نام و نام خانوادگی
        </label>
        <input
          className="border border-gray-300 rounded-md py-1 px-2 outline-0 w-full mt-1"
          placeholder="مثلاً علی رضایی"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          آدرس کامل
        </label>
        <textarea
          className="border border-gray-300 rounded-md py-1 px-2 outline-0 w-full mt-1"
          rows={4}
          placeholder="خیابان، کوچه، پلاک، طبقه..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            کد پستی
          </label>
          <input
            className="border border-gray-300 rounded-md py-1 px-2 outline-0 w-full mt-1"
            placeholder="1234567890"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            شماره موبایل
          </label>
          <input
            className="border border-gray-300 rounded-md py-1 px-2 outline-0 w-full mt-1 bg-gray-100 cursor-not-allowed"
            placeholder="09123456789"
            readOnly
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          یادداشت اختیاری
        </label>
        <textarea
          className="border border-gray-300 rounded-md py-1 px-2 outline-0 w-full mt-1"
          rows={4}
          placeholder="مثلاً تماس نگیرین، زنگ در خرابه و..."
        />
      </div>
    </div>
  );
}

import FormInput from "@/components/ui/FormInput/FormInput";

export default function TicketForm() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold text-zinc-800 mb-6">ارسال تیکت جدید</h2>

      <form className="space-y-4">
        <FormInput as="input" label="موضوع" name="subject" type="text" />

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            دپارتمان
          </label>
          <select className="w-full border resize-none border-gray-200 rounded-2xl p-3 text-sm bg-gray-100 outline-0">
            <option value="فنی">فنی</option>
            <option value="مالی">مالی</option>
            <option value="سفارشات">سفارشات</option>
          </select>
        </div>

        <FormInput
          as="textarea"
          label="پیام"
          name="subject"
          type="text"
          rows={5}
        />

        <button
          type="submit"
          className="bg-zinc-700 text-white text-sm px-5 py-2 rounded-md hover:bg-zinc-800 transition cursor-pointer"
        >
          ارسال تیکت
        </button>
      </form>
    </div>
  );
}

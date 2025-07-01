import React from "react";
import { Mail, Map, Phone } from "lucide-react";
import FormInput from "@/components/ui/FormInput/FormInput";

function ContactUs() {
  return (
    <div className="w-full p-4 flex justify-center bg-zinc-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">تماس با ما</h2>
          <p className="text-gray-500 text-sm mt-2">
            برای ارتباط با تیم پشتیبانی فرم زیر را پر کنید.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <form className="space-y-8 p-5  bg-white/70 backdrop-blur-md shadow-lg ring-1 rounded-2xl ring-gray-100">
              <FormInput as="input" name="نام" type="نام" placeholder="نام" />
              <FormInput
                as="input"
                name="ایمیل"
                type="email"
                placeholder="ایمیل"
              />
              <FormInput
                as="input"
                name="موضوع"
                type="text"
                placeholder="موضوع"
              />

              <FormInput
                as="textarea"
                name="متن پیام"
                type="text"
                placeholder="متن پیام"
                rows={5}
              />

              <button
                type="submit"
                className="w-full bg-zinc-700 text-white text-sm px-5 py-2 rounded-md hover:bg-zinc-800 transition cursor-pointer"
              >
                ارسال پیام
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-sm text-right text-gray-700 px-2">
            <div>
              <div className="flex items-center mb-2 text-gray-600">
                <Map className="ml-2 w-5 h-5" />
                <span className="font-medium">آدرس:</span>
              </div>
              <p className="text-gray-500">تهران، ملاصدرا، کوچه 17</p>
            </div>
            <div>
              <div className="flex items-center mb-2 text-gray-600">
                <Phone className="ml-2 w-5 h-5" />
                <span className="font-medium">تلفن:</span>
              </div>
              <p className="text-gray-500">09217045099</p>
            </div>
            <div>
              <div className="flex items-center mb-2 text-gray-600">
                <Mail className="ml-2 w-5 h-5" />
                <span className="font-medium">ایمیل:</span>
              </div>
              <p className="text-gray-500">nikava@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
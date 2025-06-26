import React from "react";
import { Mail, Map, Phone } from "lucide-react";
import ContactInput from "./ContactInput";

function ContactUs() {
  return (
    <div className="w-full px-4 py-12 flex justify-center my-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-8">
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
            <form className="space-y-5 p-2 bg-white/70 backdrop-blur-md shadow-lg ring-1 rounded-2xl ring-gray-100">
              <ContactInput title="نام" />
              <ContactInput title="ایمیل" />
              <ContactInput title="موضوع" />
              <textarea
                rows={5}
                className="w-full border resize-none border-gray-200 rounded-2xl p-3 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                placeholder="متن پیام"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white text-sm py-3 rounded-2xl hover:bg-gray-900 transition cursor-pointer"
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
              <p className="text-gray-500">تهران، خیابان فلان، کوچه فلان</p>
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

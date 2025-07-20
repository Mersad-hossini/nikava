"use client";

import FormInput from "@/components/ui/FormInput/FormInput";
import { StoryModalProps } from "../types/Table.type";



export default function StoryModal({ story, onClose }: StoryModalProps) {
  return (
    <dialog open className="modal modal-middle">
      <div className="modal-box p-4">
        <h3 className="font-bold text-lg mb-2">
          {story ? "✏️ ویرایش استوری" : "➕ افزودن استوری"}
        </h3>

        <form className="space-y-4">
          <FormInput
            as="input"
            name="name"
            type="text"
            placeholder="مثلاً معرفی محصول"
            label="موضوع استوری"
          />

          <FormInput
            as="input"
            type="file"
            name="cover"
            label="کاور استوری (تصویر اصلی)"
          />

          <FormInput
            as="input"
            type="file"
            name="slides"
            label="تصاویر اسلاید (می‌توانید چند فایل انتخاب کنید)"
            multiple
          />

          <FormInput
            as="textarea"
            name="slug"
            placeholder="توضیحات کوتاه استوری"
            label="توضیحات"
          />

          <FormInput
            as="input"
            type="checkbox"
            name="isActive"
            label="فعال باشد؟"
          />

          <div className="text-right mt-4">
            <button
              type="submit"
              className="btn btn-success ml-2 text-white px-8"
            >
              ذخیره تغییرات
            </button>
            <button
              type="button"
              className="btn btn-error text-white px-8"
              onClick={onClose}
            >
              لغو
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

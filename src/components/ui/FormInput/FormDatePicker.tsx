"use client";

import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type Props = {
  label: string;
  name: string;
  value?: DateObject | null;
  onChange?: (value: DateObject | null) => void;
};

export default function FormDatePicker({
  label,
  name,
  value,
  onChange,
}: Props) {
  return (
    <div className="form-control flex flex-col gap-2 w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <DatePicker
        value={value}
        onChange={onChange}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD HH:mm"
        name={name}
        plugins={[<TimePicker position="bottom" key="time" />]}
        inputClass="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0"
        calendarPosition="bottom-right"
        editable
      />
    </div>
  );
}

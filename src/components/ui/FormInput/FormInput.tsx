import { FormInputProps } from "./FormInput.type";

export default function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  as = "input",
  rows = 4,
  disabled = false,
  dir,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-zinc-700">{label}</label>
      )}

      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          className="w-full border resize-none border-gray-200 rounded-2xl p-3 text-sm bg-gray-100 outline-0"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          dir={dir}
        />
      ) : (
        <input
          name={name}
          type={type}
          className="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          dir={dir}
        />
      )}
    </div>
  );
}

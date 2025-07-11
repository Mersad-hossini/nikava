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
  options,
  accept,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}

      {as === "textarea" && (
        <textarea
          name={name}
          rows={rows}
          className="w-full border resize-none border-gray-200 rounded-2xl p-3 text-sm bg-gray-100 outline-0"
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          dir={dir}
        />
      )}

      {as === "select" && options && (
        <select
          name={name}
          className="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0"
          onChange={onChange}
          disabled={disabled}
        >
          {options.map((opt) => (
            <option key={opt.value} className="bg-gray-200" value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {as === "input" && type === "checkbox" && (
        <div className="flex items-center gap-2">
          <input
            id={name}
            name={name}
            type="checkbox"
            defaultChecked={!!value}
            disabled={disabled}
            className="checkbox checkbox-sm"
          />
          <label htmlFor={name} className="text-sm text-zinc-700">
            {placeholder}
          </label>
        </div>
      )}

      {as === "input" && type === "file" && (
        <input
          name={name}
          type="file"
          multiple
          accept={accept}
          className="w-full border border-gray-200 rounded-xl p-2 text-sm bg-gray-100 outline-0"
          onChange={onChange}
          disabled={disabled}
        />
      )}

      {as === "input" && type !== "checkbox" && type !== "file" && (
        <input
          name={name}
          type={type}
          className="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0"
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          dir={dir}
        />
      )}
    </div>
  );
}

export type Option = {
  value: string | number;
  label: string;
};

export type FormInputProps = {
  label?: string;
  name?: string;
  value?: string | number | boolean;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder?: string;
  type?: string; // e.g. "text", "email", "file", "checkbox"
  as?: "input" | "textarea" | "select";
  rows?: number;
  disabled?: boolean;
  dir?: "rtl" | "ltr";
  options?: Option[]; // فقط برای select
  accept?: string; // فقط برای فایل
  multiple?: boolean | undefined
};

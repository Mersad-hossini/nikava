export type FormInputProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: string; // For input (e.g. "text", "email", etc.)
  as?: "input" | "textarea";
  rows?: number;
  disabled?: boolean;
  dir?: "rtl" | "ltr";
};

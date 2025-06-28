import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" data-theme="light">
      <body>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
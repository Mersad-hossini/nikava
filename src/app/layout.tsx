import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
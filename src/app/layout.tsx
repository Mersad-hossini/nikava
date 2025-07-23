import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

export const metadata = {
  title: "نیکاوا",
  description:
    "نیکاوا، فروشگاه اینترنتی با تنوعی گسترده از کالاهای دیجیتال، لوازم خانگی، آرایشی، بهداشتی و ... با ارسال سریع و تضمین اصالت کالا.",
  keywords: [
    "نیکاوا",
    "فروشگاه اینترنتی",
    "خرید آنلاین",
    "کالای دیجیتال",
    "لوازم خانگی",
    "کالا",
    "قیمت روز",
    "محصولات نیکاوا",
    "ارسال سریع",
    "تضمین اصالت",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  openGraph: {
    title: "نیکاوا | تجربه لذت‌بخش خرید آنلاین",
    description:
      "با نیکاوا به‌راحتی کالای مورد نیاز خود را آنلاین خریداری کنید. ارسال سریع، قیمت مناسب و اصالت کالا در اولویت ماست.",
    url: "https://nikava.ir",
    siteName: "نیکاوا",
    images: [
      {
        url: "https://nikava.ir/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "نیکاوا - فروشگاه اینترنتی",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/Nikava.png" /> 
      </head>
      <body>
        <Providers>{children}</Providers>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}

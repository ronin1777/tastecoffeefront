import localFont from "next/font/local";
import "./globals.css";

import { cookies } from "next/headers";
import { fetchUserData } from "@/services/user/userProfile";
import { Providers } from "./utils/providers";

const Vazir = localFont({
  src: "./fonts/Vazir-WOL.woff",
});
const VazirBold = localFont({
  src: "./fonts/Vazir-Bold-WOL.woff",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: {
//     template: "%s | TasteCoffee",
//     default: "Welcome | TasteCoffee",
//   },
//   description: "Selling specialty coffees with the best quality",
// };
export const metadata = {
  title: {
    template: "%s | تیست کافی",
    default: "خوش آمدید | تیست کافی",
  },
  description: "فروش قهوه‌های تخصصی با بهترین کیفیت",
  keywords: [
    "اسپرسو",
    "قهوه‌ساز",
    "قهوه",
    "قهوه‌های تخصصی",
    "روبوستا",
    "عربیکا",
  ],
  openGraph: {
    title: "تیست کافی",
    description: "فروش قهوه‌های تخصصی با بهترین کیفیت در تیست کافی.",
    images: ["/images/coffee/shop1.jpg"],
  },

  metadataBase: new URL("http://localhost:3000"),
};

export default async function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`bg-gray-100 dark:bg-zinc-800 ${Vazir.className}`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

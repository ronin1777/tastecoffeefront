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

export const metadata = {
  title: {
    template: "%s | TasteCoffee",
    default: "Welcome | TasteCoffee",
  },
  description: "Selling specialty coffees with the best quality",
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  let user;
  let error;

  if (accessToken) {
    try {
      user = await fetchUserData(accessToken);
    } catch (err) {
      error = err.message;
      console.error("Error fetching user data1:", error);
    }
  } else {
    console.log("User is not logged in, no access token found.");
  }

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

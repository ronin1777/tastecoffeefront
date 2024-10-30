// app/rules/layout.js

import apiUrl from "@/services/config";

export const metadata = {
  title: {
    template: "%s | تیست کافی",
    default: "قوانین و مقررات",
  },
  description: "قوانین و مقررات استفاده از خدمات تیست کافی را مطالعه کنید.",
  openGraph: {
    title: "قوانین و مقررات | تیست کافی",
    description:
      "در این صفحه به بررسی قوانین و مقررات استفاده از خدمات ما بپردازید.",
    images: ["/images/coffee/terms_conditions.jpg"],
  },
  metadataBase: new URL(`${apiUrl}`),
};

const RulesLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">قوانین و مقررات</h1>
      {children}
    </div>
  );
};

export default RulesLayout;

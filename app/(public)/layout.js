import { Suspense } from "react";

import MainHeader from "@/app/_components/navbars/MainHeader";
import Footer from "@/app/_components/navbars/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Suspense fallback={<p>loading header...</p>}>
        <MainHeader />
      </Suspense>
      <main>{children}</main>
      <Footer />
    </>
  );
}

import MainHeader from "@/app/_components/navbars/MainHeader";
import Footer from "@/app/_components/navbars/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

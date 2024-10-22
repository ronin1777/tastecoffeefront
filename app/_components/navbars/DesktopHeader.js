import LoginButton from "@/app/_components/Modals/LoginButton";
import LeftHeader from "@/app/_components/navbars/LeftHeader";
import RightHeader from "@/app/_components/navbars/RightHeader";

export default async function DesktopHeader({ user }) {
  return (
    <header className="relative">
      <div className="fixed top-9 right-0 left-0 hidden md:flex items-center  w-[98%] ipad:w-[90%] mx-auto px-5 ipad:px-8 py-2 ipad:py-3 rounded-3xl bg-black/50 backdrop-blur-[6px] z-50">
        <div className="flex justify-between items-center w-full">
          {/* right side */}
          <RightHeader />
          {/* left side */}
          <LeftHeader user={user} />
        </div>
      </div>
      <LoginButton user={user} />
    </header>
  );
}

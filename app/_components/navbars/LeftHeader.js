import Image from "next/image";
import ThemeSwitcher from "@/app/_components/navbars/ThemeSwitcher";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import CartDesktopHeader from "@/app/_components/navbars/CartDesktopHeader";

export default function LeftHeader() {
    return <div className="flex ml-10 lg:ml-36 gap-x-10 lg:gap-x-7 text-orange-200 text-lg">
        <div className="flex gap-x-4 lg:gap-x-5 items-center">
            {/*cart*/}
            <CartDesktopHeader/>
            {/* dark mode */}
            <span className="cursor-pointer toggle-theme">
                <ThemeSwitcher x={8}/>
              </span>
        </div>
        <span className="block ml-10 bg-white/20 w-px h-14"></span>
        {/* login button */}

    </div>
}
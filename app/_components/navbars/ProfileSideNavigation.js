// components/SideNavigation.js
import Link from "next/link";
import LogoutLink from "@/app/_components/Modals/LogoutLink";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiSettings, CiShoppingBasket } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import LogoutProfile from "@/app/_components/user/LogoutProfile";
import ThemeSwitcher from "@/app/_components/navbars/ThemeSwitcher";

export default function SideNavigation() {
  return (
    <div className="hidden dark:text-white text-zinc-700 md:block md:w-2/12 max-h-screen p-6 pl-0">
      <div className="min-h-full px-1 overflow-y-auto">
        <h1 className="text-4xl font-morabba-medium ms-1 mb-10">حساب کاربری</h1>
        <ul className="space-y-2 ipad:space-y-5 pb-3">
          <li>
            <Link
              aria-current="page"
              className="flex items-center hover:bg-orange-400 hover:text-white p-3 rounded text-base transition-colors bg-orange-400 text-white"
              href="/account/profile"
            >
              <MdOutlineDashboard className="w-5 h-5" />
              داشبورد
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-2 p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base"
              href="/account/profile/orders"
            >
              <CiShoppingBasket className="w-5 h-5" />
              سفارش ها
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-2 p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base"
              href="/account/profile/details"
            >
              <CiSettings className="w-5 h-5" />
              تنظیمات
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-x-2 p-3 w-full rounded hover:bg-orange-400 hover:text-white transition-colors text-base"
            >
              <IoHomeOutline className="w-5 h-5" />
              خانه
            </Link>
          </li>
          <li>
            <span className="flex items-center gap-x-2 p-3 w-full">
              <ThemeSwitcher x={5} />
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 p-3 w-full rounded hover:bg-orange-400 hover:text-white transition-colors text-base">
              <LogoutProfile />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

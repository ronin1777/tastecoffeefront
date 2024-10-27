"use client";

import React, { useState } from "react";
import {
  HiArrowRightOnRectangle,
  HiBars3,
  HiOutlineXMark,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/app/_components/navbars/ThemeSwitcher";
import {
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { LuPhoneForwarded } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DropdownMenu from "@/app/_components/navbars/DropdownMenu";
import { CiSettings, CiShoppingBasket } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { logout } from "@/app/utils/logout";
import LogoutLink from "@/app/_components/Modals/LogoutLink";
import LogoutProfile from "@/app/_components/user/LogoutProfile";

export default function MobileProfileSideN() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close cart if open when menu is toggled
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    // Close menu if open when cart is toggled
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Dark overlay for dimming background */}
      {(isMenuOpen || isCartOpen) && (
        <div className="fixed inset-0 bg-black/50 z-10" onClick={closeAll} />
      )}
      <header className="flex fixed top-0 left-0 right-0 z-20 md:hidden items-center justify-between px-4 h-16">
        <div onClick={toggleMenu}>
          <HiBars3 className="w-6 h-6 text-zinc-700 dark:text-white cursor-pointer" />
        </div>
      </header>
      {/* Menu */}
      <div
        className={`fixed overflow-y-auto  top-0 bottom-0 right-0 w-64 pt-3 px-4 min-h-screen bg-white text-orange-300 dark:text-white dark:bg-zinc-700 z-40 transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-b-gray-100 dark:border-b-white/10 mb-6">
          <div className="flex items-center gap-x-3.5">
            <Image
              src="/images/app-logo.svg"
              width="41"
              height="40"
              alt="app logo"
            />
            <Image
              src="/images/app-logo-type.svg"
              width="110"
              height="55"
              alt="logo mobile header"
            />
          </div>
          <HiOutlineXMark
            className="w-6 h-6 text-zinc-600 dark:text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div>
          {/* Nav menu */}
          <div className="flex  items-center mb-4 rounded-md bg-orange-200/20 text-orange-300 pr-2.5 h-10">
            <Link
              href="/account/profile"
              className="flex items-center gap-x-2"
              onClick={closeAll}
            >
              <MdOutlineDashboard className="w-5 h-5" />
              داشبورد
            </Link>
          </div>
          <ul className="child:pr-2.5 space-y-6 dark:text-white text-zinc-600">
            {/* Sub menu */}
            <li>
              <Link
                href="/account/profile/orders"
                className="flex items-center gap-x-2"
                onClick={closeAll}
              >
                <CiShoppingBasket className="w-5 h-5" />
                سفارش ها
              </Link>
            </li>
            <li>
              <Link
                href="/account/profile/details"
                className="flex items-center gap-x-2"
                onClick={closeAll}
              >
                <CiSettings className="w-5 h-5" />
                تنظیمات
              </Link>
            </li>
          </ul>
        </div>
        {/* Nav footer */}
        <div className="flex flex-col gap-y-6 items-start py-8 px-2.5 text-orange-300 mt-8 border-t border-t-gray-100 dark:border-t-white/10">
          <Link href="/" className="inline-flex items-center gap-x-2">
            <IoHomeOutline className="w-5 h-5" />
            صفحه اصلی
          </Link>
          <span className="flex items-center gap-x-2">
            <ThemeSwitcher x={5} />
          </span>
          <span className="inline-flex text-red-500 items-center gap-x-2">
            <LogoutProfile />
          </span>
        </div>
      </div>
    </>
  );
}

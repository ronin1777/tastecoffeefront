'use client'

import React, {useState} from 'react';
import {HiBars3, HiOutlineXMark, HiOutlineShoppingBag } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from '@/app/_components/navbars/ThemeSwitcher';
import { IoBriefcaseOutline, IoDocumentTextOutline, IoHomeOutline } from 'react-icons/io5';
import { LuPhoneForwarded } from 'react-icons/lu';

import LoginButton from "@/app/_components/Modals/LoginButton";

import ItemCart from "@/app/_components/navbars/ItemListCart";


export default function MobileHeader({user, cartItems, totalPriceFormatted, totalQuantity, accessToken, cartId}) {

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
                <div
                    className="fixed inset-0 bg-black/50 z-10"
                    onClick={closeAll}
                />
            )}
            <header
                className="flex fixed top-0  left-0 right-0 z-20 md:hidden items-center justify-between bg-white dark:bg-zinc-700 px-4 h-16">
                <div onClick={toggleMenu}>
                    <HiBars3 className="w-6 h-6 text-zinc-700 dark:text-white cursor-pointer"/>
                </div>
                <div>
                    <Image src="/images/app-logo-type.svg" width="138" height="55" alt="logo mobile header"/>
                </div>
                <div>
                    <LoginButton user={user}/>
                </div>
                <div className="cart-icon relative">
                    <HiOutlineShoppingBag onClick={toggleCart} className="w-7 h-7 text-zinc-700 dark:text-white cursor-pointer"/>
                    <span className="flex justify-center items-center absolute -top-1 -right-3 bg-green-600 dark:bg-green-500 w-5 h-5 text-sm rounded-full text-white">{totalQuantity}</span>
                </div>
            </header>

            {/* Menu */}
            <div
                className={`fixed overflow-y-auto top-0 bottom-0 right-0 w-64 pt-3 px-4 min-h-screen bg-white text-orange-300 dark:text-white dark:bg-zinc-700 z-20 transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div
                    className="flex items-center justify-between border-b border-b-gray-100 dark:border-b-white/10 mb-6">
                    <div className="flex items-center gap-x-3.5">
                        <Image src="/images/app-logo.svg" width="41" height="40" alt="app logo"/>
                        <Image src="/images/app-logo-type.svg" width="110" height="55" alt="logo mobile header"/>
                    </div>
                    <HiOutlineXMark className="w-6 h-6 text-zinc-600 dark:text-white cursor-pointer"
                                    onClick={toggleMenu}/>
                </div>
                <div>
                    {/* Nav menu */}
                    <div className="flex  items-center mb-4 rounded-md bg-orange-200/20 text-orange-300 pr-2.5 h-10">
                        <Link href="/" className="flex items-center gap-x-2">
                            <IoHomeOutline className="w-5 h-5"/>
                            صفحه اصلی
                        </Link>
                    </div>
                    <ul className="child:pr-2.5 space-y-6 dark:text-white text-zinc-600">
                        {/* Sub menu */}

                        <li>
                            <Link href="/blog" className="flex items-center gap-x-2">
                                <IoBriefcaseOutline className="w-5 h-5"/>
                                بلاگ
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="flex items-center gap-x-2">
                                <IoDocumentTextOutline className="w-5 h-5"/>
                                درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="flex items-center gap-x-2">
                                <LuPhoneForwarded className="w-5 h-5"/>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Nav footer */}
                <div
                    className="flex flex-col gap-y-6 items-start py-8 px-2.5 text-orange-300 mt-8 border-t border-t-gray-100 dark:border-t-white/10">
                    <span className="flex items-center gap-x-2">
                        <ThemeSwitcher x={5}/>
                    </span>
                </div>
            </div>

            {/* Cart */}
            <div className={`fixed pt-5 overflow-y-auto flex flex-col top-0 bottom-0 left-0 w-80 px-4 min-h-screen bg-white text-orange-300 dark:text-white dark:bg-zinc-700 z-30 transition-transform ${isCartOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between border-b border-b-gray-300 dark:border-b-white/10 mb-5">
                    <HiOutlineXMark className="w-6 h-6 text-zinc-600 dark:text-white cursor-pointer" onClick={toggleCart}/>
                    <span className='text-zinc-700 dark:text-white'>سبد خرید</span>
                </div>
                {cartItems.length === 0 ? (<div className="cart-container">
                        <div className="flex flex-col items-center justify-center gap-y-3">
                            <Image
                                src="/images/headerimage/emptycart.png"
                                width={100}
                                height={100}
                                alt="Cart Empty Image"
                                className="w-36 h-36"
                            />
                            <p className="text-red-600 dark:text-gray-200 font-bold dark:font-normal">
                                سبد خرید شما خالی است
                            </p>
                        </div>
                    </div>) :
                    (<div>
                    {/* Cart content */}
                        {cartItems.map((item) => (
                            <ItemCart key={item.id} item={item} user={accessToken ? 'logged-in' : 'guest'} cartId={cartId} accessToken={accessToken}/>
                        ))}
                    {/* Cart footer */}
                    <div className='flex items-end mt-auto justify-between gap-x-4 mb-8'>
                            {accessToken ? (
                                <Link href="/order" className="bg-teal-600 hover:bg-teal-700 transition-colors text-white rounded-lg p-3">
                                    ثبت سفارش
                                </Link>
                            ) : (
                                <p className="text-red-600 font-bold">
                                    برای ثبت سفارش لطفا وارد شوید.
                                </p>
                            )}                        <div>
                            <span className='text-gray-500 dark:text-emerald-500 text-xs tracking-tighter'> مبلق کل</span>
                            <div className='text-zinc-700 dark:text-white'>
                                {totalPriceFormatted}
                            </div>
                    </div>

                </div>
                </div>)}

            </div>
            <div>

            </div>

        </>
    );
}






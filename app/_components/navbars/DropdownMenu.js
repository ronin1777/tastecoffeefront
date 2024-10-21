"use client"

import { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Link from "next/link";

export default function DropdownMenu({ title, linkHref, menuItems, isMenuOpen }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = (e) => {
        e.preventDefault(); // Prevent default link behavior for the button
        setIsSubmenuOpen(prev => !prev); // Toggle submenu visibility
    };

    useEffect(() => {
        // Close the submenu if the main menu is closed
        if (!isMenuOpen) {
            setIsSubmenuOpen(false);
        }
    }, [isMenuOpen]); // Dependency array includes isMenuOpen

    return (
        <li className="relative">
            {/* Title Section */}
            <div className="flex items-center justify-between">
                <Link href={linkHref} className="flex items-center gap-x-2">
                    {title}
                </Link>
                {/* Chevron icon to toggle submenu */}
                <button
                    onClick={toggleSubmenu}
                    className="focus:outline-none ml-2"
                    aria-label="Toggle submenu"
                >
                    <HiOutlineChevronDown
                        className={`w-4 h-4 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                    />
                </button>
            </div>

            {/* Submenu */}
            <div
                className={`absolute right-0 mt-2 transition-all duration-300 ease-in-out transform z-20 ${
                    isSubmenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
                }`}
            >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 rounded-md shadow-lg w-48">
                    {menuItems.map((item, index) => (
                        <Link href={item.href} key={index} className="block">
                            <div
                                className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors ${
                                    item.active ? "bg-gray-100 dark:bg-zinc-700" : ""
                                }`}
                            >
                                {item.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </li>
    );
}


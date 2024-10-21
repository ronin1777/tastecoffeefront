// DropdownMenu.jsx
'use client'

import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import Link from 'next/link';

const DropdownMenu = ({ title, linkHref, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-2 py-2 text-left hover:bg-orange-200/20 rounded-md">
                {title}
                <AiOutlineDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isOpen && (
                <ul className="mt-2 space-y-2 pl-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="block px-2 py-1 hover:bg-orange-200/20 rounded-md">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;

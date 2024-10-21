'use client'

import {useRouter} from "next/navigation";
import {logout} from "@/app/utils/logout";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import React from "react";

export default function LogoutProfile(){
        const router = useRouter();

    const handleLogout = () => {

    logout();
    router.push('/');
  };


    return (
        <button onClick={handleLogout} className="flex items-center gap-x-2  rounded hover:bg-orange-400 hover:text-white transition-colors text-base">
            <HiArrowRightOnRectangle className="w-5 h-5"/>
            خروج
        </button>
    );
}

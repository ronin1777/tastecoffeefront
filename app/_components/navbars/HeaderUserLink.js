"use client";

import { FaUser } from "react-icons/fa";

import Link from "next/link";

import { logout } from "@/app/utils/logout";
import { useRouter } from "next/navigation";
import LogoutLink from "@/app/_components/Modals/LogoutLink";

export default function HeaderUserLink({ user }) {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div>
      <div className="flex gap-3">
        <FaUser className="w-7 h-7 hidden lg:block" />
        <span className="mt-1.5 lg:max-w-48 lg:truncate">
          {user?.name?.split(" ")[0]}
        </span>
      </div>

      {/* منو */}
      <div className="relative group-hover:text-orange-300 transition-colors">
        <ul className="absolute left-5 top-4 flex flex-col  opacity-0 h-max max-h-[510px] overflow-auto invisible group-hover:opacity-100 group-hover:visible transition-all bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white text-base rounded-2xl border-t-[3px] border-orange-300 shadow-normal child:inline-block child:transition-colors child-hover:text-orange-400 dark:child-hover:text-orange-300 tracking-normal">
          <li>
            <Link
              href="/account/profile"
              className="block text-white hover:bg-orange-400 hover:text-white transition-colors rounded p-2"
            >
              پروفایل
            </Link>
          </li>
          <li>
            <LogoutLink />
          </li>
        </ul>
      </div>
    </div>
  );
}

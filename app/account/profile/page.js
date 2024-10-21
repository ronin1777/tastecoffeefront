import {cookies} from 'next/headers';
import {redirect} from "next/navigation";
import Image from "next/image";
import {
    HiOutlineMail, HiOutlinePhone,
} from "react-icons/hi";


import UserStats from "@/app/_components/user/UserStats";

import {fetchUserData, fetchUserProfile} from "@/services/user/userProfile";


export default async function UserProfilePage() {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    if (!accessToken){
        redirect('/')
    }

    let user;
    let error;

    // بارگذاری اطلاعات کاربر
    try {
        user = await fetchUserData(accessToken);
    } catch (err) {
        error = err.message;
        console.error("Error fetching user data:", error);
    }



    return (
        <section className="my-account bg-gray-50 dark:bg-zinc-900">
            <div className="container mx-auto px-4 py-8">
                {/* Profile Overview */}
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md mb-6 transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col items-center">
                        <Image
                            src={user?.profile_picture || '/images/profile/profile-icon.png'} // استفاده از یک تصویر پیش‌فرض
                            width={100}
                            height={100}
                            alt="Profile Picture"
                            className="rounded-full w-24 h-24 border-4 border-gray-300 dark:border-gray-700"
                        />
                        <h2 className="text-xl text-zinc-700 font-semibold mt-4 dark:text-white">{user?.name}</h2>
                        <div className="flex items-center text-gray-500 dark:text-gray-300 mt-2">
                            <HiOutlineMail className="w-5 h-5 mr-2" />
                            <p>{user?.email || ''}</p>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-300 mt-2">
                            <HiOutlinePhone className="w-5 h-5 mr-2" />
                            <p>{user?.phone_number || ''}</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-medium dark:text-white">درباره من</h3>
                        <p className="text-gray-600 dark:text-gray-300">{user?.bio || ''}</p>
                    </div>
                </div>

                {/* User Stats */}
                <UserStats user={user}/>
            </div>
        </section>
    );
}
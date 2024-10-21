'use client'

import cookie, {parse} from 'cookie';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {completeRegistrationAction} from "@/services/user/authActions";
import {assignCartToUser, connectCart} from "@/services/assingnCartToUser";

export default function CompleteRegistrationModal({handleCloseModal}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const router = useRouter();


const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
        const {access, refresh} = await completeRegistrationAction({name, email});

        const response = await fetch('http://localhost:3000/api/auth/set-cookies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ access, refresh }),
            });
        if (response.ok){
            setSuccess('تکمیل ثبت نام موفقیت آمیز بود.');
            await connectCart(access);
            handleCloseModal()
            router.push('/account/profile');
        }


    } catch (error) {
        if (error.status === 400) {
            setError('شما قبلاً ثبت نام کرده‌اید');
        } else {
            setError(error.message);
        }
    }
}



    return (
        <form className='relative flex flex-col items-center space-y-3' onSubmit={handleSubmit}>
            <div className='absolute -top-6 flex items-center gap-6'>
                <div className='flex flex-col gap-10'>
                    <label className="block  font-medium text-zinc-700 dark:text-white mb-2">
                        نام:
                    </label>
                    <label className="block  font-medium text-zinc-700 dark:text-white mb-2">
                        ایمیل:
                    </label>

                </div>
                <div className='flex flex-col gap-2'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                           className="block w-80 text-zinc-700 dark:text-white border border-gray-300 rounded-xl p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-orange-300 dark:focus:ring-blue-500"
                    />

                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                           className="block w-80 text-zinc-700 dark:text-white border border-gray-300 rounded-xl p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-orange-300 dark:focus:ring-blue-500"
                    />

                </div>
            </div>
            {error && <p className="absolute top-20 text-red-500 text-sm">{error}</p>}
            {success && <p className="absolute top-20 text-green-500 text-sm">{success}</p>}
            <button type="submit"
                    className="absolute top-28 w-[20%] bg-teal-500 hover:bg-teal-600 dark:bg-blue-600 text-zinc-700 dark:text-white placeholder:text-zinc-700 rounded-2xl py-2 dark:hover:bg-blue-700 transition"> ثبت‌نام
            </button>
        </form>
    );
}



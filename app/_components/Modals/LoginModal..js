'use client';

import { useState } from 'react';

import VerifyOtpModal from './VerifyOtpModal';
import {sendOtpAction} from "@/services/user/authActions"; // مسیر درست را تنظیم کنید
import { motion } from 'framer-motion';

export default function LoginModal({handleCloseModal}) {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const validatePhoneNumber = (input) => {
        const phoneRegex = /^(\+98|0098|98|0)?9(0[1-5]|1[0-9]|2[0-2]|3[0-9]|4[0-9]|9[0-9])[0-9]{7}$/;
        return phoneRegex.test(input);
    };

     const handlePhoneChange = (e) => {
        const inputPhone = e.target.value;
        setPhone(inputPhone);

        if (!validatePhoneNumber(inputPhone)) {
            setError('شماره تلفن معتبر نمی‌باشد.');
            setSuccess('');
        } else {
            setError('');
            setSuccess('شماره تلفن معتبر است.');
        }
    };


    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validatePhoneNumber(phone)) {
        setError('لطفاً یک شماره تلفن معتبر وارد کنید.');
        return;
    }

    try {
        const response = await sendOtpAction(phone);
        setSuccess('OTP ارسال شد.');
        setIsOtpSent(true);
    } catch (error) {
        setError(error.message);
    }
    };

    return (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col px-5 space-y-3">

    {!isOtpSent ? (
        <form onSubmit={handleSubmit} noValidate className='relative flex flex-col px-5 space-y-3'>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-white mb-2">
                شماره تلفن خود را وارد کنید
            </label>
            <div className='flex flex-col gap-4 items-center'>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="block w-[100%] text-zinc-700 dark:text-white border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-orange-300 dark:focus:ring-blue-500"
                    required
                    placeholder='09380200564'
                />
                {error && <p className="absolute bottom-10 text-red-500 text-sm">{error}</p>}
                {success && <p className="absolute bottom-10 text-green-500 text-sm">{success}</p>}
                <button
                    type="submit"
                    className="w-[20%] bg-teal-500 hover:bg-teal-600 dark:bg-blue-600 text-zinc-700 dark:text-white placeholder:text-zinc-700 rounded-2xl py-2 dark:hover:bg-blue-700 transition mt-4"
                >
                    ورود
                </button>
            </div>
        </form>
    ) : (
        <VerifyOtpModal phone={phone} handleCloseModal={handleCloseModal}/>
    )}
        </motion.div>
    );
}
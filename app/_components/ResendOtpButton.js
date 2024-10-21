'use client'

import { useEffect, useState } from 'react';

export default function ResendOtpButton({ onResend, phone }) {
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(60); // تنظیم تایمر به 60 ثانیه

    // مدیریت تایمر
    useEffect(() => {
        let interval;
        if (isDisabled) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }

        if (timer === 0) {
            clearInterval(interval);
            setIsDisabled(false); // دکمه فعال می‌شود
            setTimer(60); // تایمر مجددا به 60 ثانیه تنظیم می‌شود
        }

        return () => clearInterval(interval);
    }, [isDisabled, timer]);

    const handleResend = () => {
        setIsDisabled(true); // غیرفعال کردن دکمه
        onResend(phone); // ارسال مجدد OTP
    };

    return (
        <div className="absolute flex flex-col items-center bottom-36 left-0">
          <div className=' flex flex-col items-center'>
            <button
                onClick={handleResend}
                disabled={isDisabled}
                className={`bg-teal-500 hover:bg-teal-600 p-2 text-white text-xs rounded-2xl py-2 transition ${
                    isDisabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
            >
                ارسال مجدد کد
            </button>

              </div>
            {isDisabled && <p className=" top-6 text-xs mt-2">{timer} ثانیه</p>}
        </div>
    );
}




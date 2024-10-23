"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import ResendOtpButton from "@/app/_components/ResendOtpButton";
import CompleteRegistrationModal from "@/app/_components/Modals/CompleteRegistrationModal";
import { connectCart } from "@/services/assingnCartToUser";
import { sendOtpAction, verifyOtpAction } from "@/services/user/authActions";

export default function VerifyOtpModal({ phone, handleCloseModal }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isVerify, setIsVerify] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (error || success) {
      const timeout = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const { status, access, refresh } = await verifyOtpAction(otp);
      if (status === 201 || status === 202) {
        setSuccess(
          "ثبت‌نام موفقیت‌آمیز بود. لطفا اطلاعات بیشتری را تکمیل کنید."
        );
        setIsVerify(true);
      } else if (status === 200 && access && refresh) {
        // ارسال توکن‌ها به API Route برای ذخیره در کوکی‌ها
        const response = await fetch("api/auth/set-cookies", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ access, refresh }),
        });

        if (response.ok) {
          setSuccess("ورود موفقیت‌آمیز بود.");
          await connectCart(access);
          handleCloseModal();
          router.refresh();
        } else {
          setError("خطا در ذخیره توکن‌ها.");
        }
      }
    } catch (error) {
      if (error.message === "invalid") {
        setError("کد وارد شده صحیح نیست.");
      } else {
        setError("یک خطای غیرمنتظره رخ داد.");
      }
    }
  };

  const handleResendOtp = async (phoneNumber) => {
    try {
      await sendOtpAction(phoneNumber);
      setSuccess("کد جدید ارسال شد.");
    } catch (error) {
      setError(
        "شما نمی‌توانید بیشتر از یک بار در دقیقه درخواست ارسال کد کنید."
      );
    }
  };
  console.log(`otp: ${otp}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col px-5 space-y-3"
    >
      {!isVerify ? (
        <form
          className="relative flex flex-col px-5 space-y-3"
          onSubmit={handleSubmit}
        >
          <ResendOtpButton onResend={handleResendOtp} phone={phone} />
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-zinc-700 dark:text-white mb-2"
          >
            کد OTP خود را وارد کنید
          </label>
          <div className="flex flex-col gap-4 items-center">
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="block w-[100%] text-zinc-700 dark:text-white border border-gray-300 rounded-xl p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-orange-300 dark:focus:ring-blue-500"
              required
              placeholder="کد OTP"
            />
            {error && (
              <p className="absolute bottom-10 text-red-500 text-sm">{error}</p>
            )}
            {success && (
              <p className="absolute bottom-10 text-green-500 text-sm">
                {success}
              </p>
            )}
            <button
              type="submit"
              className="w-[20%] bg-teal-500 hover:bg-teal-600 dark:bg-blue-600 text-zinc-700 dark:text-white placeholder:text-zinc-700 rounded-2xl py-2 dark:hover:bg-blue-700 transition"
            >
              تایید
            </button>
          </div>
        </form>
      ) : (
        <CompleteRegistrationModal handleCloseModal={handleCloseModal} />
      )}
    </motion.div>
  );
}

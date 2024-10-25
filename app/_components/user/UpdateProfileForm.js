"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import { useState } from "react";
import { updateUserProfile } from "@/services/user/userProfile";
import PageTransition from "@/app/utils/PageTransition";

export default function UpdateProfileForm({ user, accessToken }) {
  const [updateMessage, setUpdateMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
  } = useForm({
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      location: user.location || "",
      birth_date: user.birth_date || null,
      postal_code: user.postal_code || "",
      bio: user.bio || "",
    },
  });

  const [selectedDate, setSelectedDate] = useState(
    user.birth_date ? new Date(user.birth_date) : null
  );

  const handleDateChange = (dateObject) => {
    const gregorianDate = dateObject.convert(gregorian).format("YYYY-MM-DD");
    setValue("birth_date", gregorianDate);
    setSelectedDate(dateObject);
  };

  const onSubmit = async (data) => {
    try {
      const responseData = await updateUserProfile(data, accessToken);
      console.log("Profile updated successfully:", responseData);
      setUpdateMessage("بروزرسانی با موفقیت انجام شد.");
      setIsError(false);
    } catch (error) {
      console.error("Error updating profile:", error.message);
      setUpdateMessage(error.message);
      setIsError(true);
    }

    setTimeout(() => {
      setUpdateMessage("");
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="details bg-gray-100 dark:bg-zinc-700 p-6 rounded-lg shadow-lg">
        <h3 className="font-morabba-medium pb-4 border-b border-b-gray-400/50 text-xl text-gray-800 dark:text-gray-200">
          جزئیات حساب
        </h3>
        <form
          className="mt-6 text-zinc-700"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-x-5 gap-y-6">
            {/*name*/}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                نام
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 border dark:bg-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="نام جدید خود را وارد کنید..."
                  {...register("name", {
                    required: "نام ضروری است",
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/,
                      message: "لطفاً فقط حروف فارسی وارد کنید",
                    },
                    minLength: {
                      value: 5,
                      message: "نام باید حداقل ۵ حرف باشد",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            {/*phone*/}
            <div>
              <label
                htmlFor="user-phone"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                شماره تماس
              </label>
              <input
                type="text"
                id="user-phone"
                disabled
                className={`w-full p-3 border bg-zinc-300 dark:bg-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={user.phone_number}
              />
            </div>
            {/*email*/}
            <div>
              <label
                htmlFor="user-email"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                ایمیل
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  id="user-email"
                  className={`w-full p-3 border dark:bg-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="ایمیل جدید خود را وارد کنید..."
                  {...register("email", {
                    required: "ایمیل ضروری است",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "ایمیل نامعتبر است",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            {/*location*/}
            <div>
              <label
                htmlFor="user-loc"
                className="block text-sm font-medium dark:text-gray-200"
              >
                آدرس
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="user-loc"
                  className={`w-full p-3 border dark:bg-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="آدرس جدید خود را وارد کنید..."
                  {...register("location")}
                />
              </div>
            </div>
            {/*date*/}
            <div>
              <label
                htmlFor="user-birth_date"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                تاریخ تولد
              </label>
              <div className="mt-1 relative w-full p-3 border dark:bg-black rounded-md focus:outline-none">
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  value={selectedDate}
                  // value={user.birth_date ? new Date(user.birth_date) : null} // تنظیم مقدار اولیه
                  onChange={handleDateChange}
                  calendarPosition="bottom-right"
                  format="YYYY/MM/DD" // فرمت تاریخ شمسی
                />
                {/*<input*/}
                {/*  type="date"*/}
                {/*  id="user-birth_date"*/}
                {/*  className={`w-full p-3 border dark:bg-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}*/}
                {/*  {...register("birth_date")}*/}
                {/*/>*/}
              </div>
            </div>
            {/*postal-code*/}
            <div>
              <label
                htmlFor="user-postal_code"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                کد پستی
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="user-postal_code"
                  className={`w-full p-3 border dark:bg-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="کد پستی جدید خود را وارد کنید..."
                  {...register("postal_code", {
                    required: "وارد کردن کد پستی الزامی است",
                    pattern: {
                      value: /^[0-9\u06F0-\u06F9]+$/,
                      message: "کد پستی باید فقط شامل اعداد باشد",
                    },
                    minLength: {
                      value: 5,
                      message: "کد پستی باید حداقل ۵ رقم باشد",
                    },
                    maxLength: {
                      value: 10,
                      message: "کد پستی نباید بیشتر از ۱۰ رقم باشد",
                    },
                  })}
                />
                {errors.postal_code && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.postal_code.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="user-bio"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                بیوگرافی
              </label>
              <div className="mt-1 relative">
                <textarea
                  id="user-bio"
                  className={`w-full p-3 border dark:bg-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="بیوگرافی جدید خود را وارد کنید..."
                  {...register("bio")}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="relative flex justify-center items-center">
                <Image
                  src={user.profile_picture || "/images/avatars/avatar1.jpg"}
                  width={200}
                  height={200}
                  quality={100}
                  alt="My Profile Image"
                  className="w-16 h-16 rounded-full border-2 border-orange-500 shadow"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                تغییرعکس پروفایل
              </label>
              <div className="mt-1 relative">
                <input
                  type="file"
                  id="profile_picture"
                  className="w-full p-3 border rounded-md focus:outline-none dark:bg-blue-200/60"
                  accept="image/*"
                  {...register("profile_picture")}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-orange-500 text-white p-3 mt-6 rounded-md transition duration-200 hover:bg-orange-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "در حال بروزرسانی..." : "بروزرسانی پروفایل"}
          </button>
        </form>
        {updateMessage && (
          <div
            className={`mt-4 ${isError ? "text-red-500" : "text-green-500"}`}
          >
            {updateMessage}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

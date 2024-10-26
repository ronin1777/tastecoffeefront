"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShippingSection() {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن
    });
  }, []);

  return (
    <section className="shipping-section dark:bg-zinc-800 container overflow-hidden mb-10 md:mb-20 mx-auto py-12 px-4">
      {/* Title */}
      <h2
        className="text-3xl text-zinc-700 dark:text-white text-center font-bold mb-6"
        data-aos={"fade-up"}
      >
        از سفارش تا نوش جان کردن قهوه
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleToggle("home")}
          className={`px-4 py-2 rounded-lg ${
            selectedOption === "home" ? "bg-teal-600 text-white" : "bg-zinc-700"
          }`}
        >
          مشتریان خانگی و اداری
        </button>
        <button
          onClick={() => handleToggle("cafe")}
          className={`px-4 py-2 rounded-lg ${
            selectedOption === "cafe"
              ? "bg-orange-400 text-white"
              : "bg-zinc-700"
          }`}
        >
          مشتریان هتل، کافه و رستوران
        </button>
      </div>

      {/* Content Area */}
      <div className="flex justify-between items-start space-x-4">
        {/* Right Side List */}
        <ul className="w-full md:w-2/3 space-y-8 relative">
          {selectedOption === "home" ? (
            <>
              <li className="flex items-start relative" data-aos="fade-right">
                <div className="relative">
                  {/* Circle */}
                  <div className="w-8 h-8 bg-teal-600 ml-2 text-white rounded-full flex items-center justify-center z-10">
                    <Image
                      src="/images/PikPng.com_check-box-png_405320.png"
                      width="20"
                      height="20"
                      alt="tick ok"
                    />
                  </div>
                  {/* Line connecting circles */}
                  <div className="absolute top-8 ml-1 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-black"></div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl text-zinc-700 dark:text-white font-semibold">
                    ارسال رایگان
                  </h5>
                  <p className="text-zinc-700 dark:text-white">
                    سفارش‌های خانگی و اداری بالای 1.300.000 تومان رایگان ارسال
                    خواهد شد.
                  </p>
                </div>
              </li>

              <li className="flex items-start relative" data-aos="fade-right">
                <div className="relative">
                  {/* Circle */}
                  <div className="w-8 h-8 ml-2 bg-teal-600 text-white rounded-full flex items-center justify-center z-10">
                    <Image
                      src="/images/PikPng.com_check-box-png_405320.png"
                      width="20"
                      height="20"
                      alt="tick ok"
                    />
                  </div>
                  {/* Line connecting circles */}
                  <div className="absolute ml-1 top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-black"></div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl text-zinc-700 dark:text-white font-semibold">
                    نحوه ارسال سفارش
                  </h5>
                  <p className="text-zinc-700 dark:text-white">
                    در شهر تهران امکان انتخاب نحوه ارسال به دو روش پست و پیک
                    موتوری وجود دارد.
                  </p>
                </div>
              </li>

              <li className="flex items-start relative" data-aos="fade-right">
                <div className="relative">
                  {/* Circle */}
                  <div className="w-8 h-8 ml-2 bg-teal-600 text-white rounded-full flex items-center justify-center z-10">
                    <Image
                      src="/images/PikPng.com_check-box-png_405320.png"
                      width="20"
                      height="20"
                      alt="tick ok"
                    />
                  </div>
                  {/* No line after the last item */}
                </div>
                <div className="ml-4">
                  <h5 className="text-xl text-zinc-700 dark:text-white font-semibold">
                    زمان ارسال سفارش
                  </h5>
                  <p className="text-zinc-700 dark:text-white">
                    در صورتی که سفارش شما تا قبل از ساعت 13 ثبت شود، همان روز
                    ارسال خواهد شد.
                  </p>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-start relative" data-aos="fade-left">
                <div className="relative">
                  {/* Circle */}
                  <div className="w-8 h-8 ml-2 bg-orange-400 text-white rounded-full flex items-center justify-center z-10">
                    <Image
                      src="/images/PikPng.com_check-box-png_405320.png"
                      width="20"
                      height="20"
                      alt="tick ok"
                    />
                  </div>
                  {/* Line connecting circles */}
                  <div className="absolute ml-1 top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-black"></div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl text-zinc-700 dark:text-white font-semibold">
                    ارسال رایگان برای مشتریان هتل
                  </h5>
                  <p className="text-zinc-700 dark:text-white">
                    ارسال برای سفارش‌های بالای 1.000.000 تومان رایگان است.
                  </p>
                </div>
              </li>

              <li className="flex items-start relative" data-aos="fade-left">
                <div className="relative">
                  {/* Circle */}
                  <div className="w-8 h-8 ml-2 bg-orange-400 text-white rounded-full flex items-center justify-center z-10">
                    <Image
                      src="/images/PikPng.com_check-box-png_405320.png"
                      width="20"
                      height="20"
                      alt="tick ok"
                    />
                  </div>
                  {/* Line connecting circles */}
                  <div className="absolute ml-1 top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-black"></div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl text-zinc-700 dark:text-white font-semibold">
                    نحوه ارسال سفارش به هتل‌ها
                  </h5>
                  <p className="text-zinc-700 dark:text-white">
                    ارسال از طریق پیک موتوری یا پست امکان پذیر است.
                  </p>
                </div>
              </li>

              <li className="flex items-start relative" data-aos="fade-left">
                <div className="relative">
                  {/* Circle */}
                  <div className="w-8 h-8 ml-2 bg-orange-400 text-white rounded-full flex items-center justify-center z-10">
                    <Image
                      src="/images/PikPng.com_check-box-png_405320.png"
                      width="20"
                      height="20"
                      alt="tick ok"
                    />
                  </div>
                  {/* No line after the last item */}
                </div>
                <div className="ml-4">
                  <h5 className="text-xl text-zinc-700 dark:text-white font-semibold">
                    زمان ارسال سفارش به هتل‌ها
                  </h5>
                  <p className="text-zinc-700 dark:text-white">
                    در صورت ثبت سفارش قبل از ساعت 12 ظهر، همان روز ارسال انجام
                    می‌شود.
                  </p>
                </div>
              </li>
            </>
          )}
        </ul>
        {/* Left Side Image */}
        <div className="hidden md:block w-1/3 relative" data-aos="fade-left">
          <Image
            src="/images/contact.png"
            alt="Coffee cup"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

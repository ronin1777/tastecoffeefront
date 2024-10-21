'use client'

import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {formatWeight} from "@/app/utils/utils";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ProductSpecifications({product}) {
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
    AOS.init();
  }, []);

    const types = product?.coffee_type;
    const type = types === 'bean' ? 'دانه' : 'پودر'
    const weight = formatWeight(product?.weight);

    const productSpecifications = [
        {name: 'نام محصول', value: product?.name},
        {name: 'گونه', value: product?.variety},
        {name: 'خاستگاه', value: product?.origin},
        {name: 'مواد تشکیل‌دهنده', value: type},
        {name: 'طعم‌یاد', value: product?.flavor_notes},
        {name: 'شیرینی', value: product?.sweetness},
        {name: 'جان‌مایه (بادی)', value: product?.body},
        {name: 'درجه برشته‌کاری', value: product?.roast_level},
        {name: 'میزان تلخی', value: product?.bitterness},
        {
            name: 'دم‌افزار پیشنهادی',
            value: product?.brewing_method
        },
        {name: 'رنگ‌ بسته‌بندی', value: product?.packaging_color},
        {name: 'وزن بسته‌بندی', value: weight},
        {name: 'ساخت', value: 'ایران'},
    ];

    const initialDisplayCount = 6;

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };


    return (
        <div
            className="relative text-zinc-700 rounded-xl p-10 dark:bg-zinc-700 dark:text-white text-sm bg-zinc-200 s-modular mb-md mt-24 md:mt-36 mb-16 md:mb-28"
            data-aos="fade-up" // اضافه کردن انیمیشن AOS
            data-aos-duration="500" // زمان انیمیشن
        >
            <div className="container">
                {/* specifications-header */}
                <div className="text-center mb-4">
                    <h2 className="fw-400 text-zinc-600 dark:text-white text-2xl">مشخصات محصول</h2>
                </div>
                {/* Product specifications list */}
                <ul className="grid grid-cols md:grid-cols-2   gap-4 ">
                    {/* Only show a limited number of items or full list based on state */}
                    {productSpecifications.slice(0, showMore ? productSpecifications.length : initialDisplayCount).map((spec, index) => (
                        <li
                            key={index}
                            className="flex justify-between border p-2 bg-zinc-300 dark:bg-zinc-600  rounded-xl"
                            data-aos={showMore ? "fade-up" : "fade-down"} // انیمیشن برای نمایش و پنهان کردن
                            data-aos-duration="300" // زمان انیمیشن
                        >
                            <span className="font-medium">{spec.name}:</span>
                            <span>{spec.value}</span>
                        </li>
                    ))}
                </ul>

                {/* Button with arrow icon inside a colored circle */}
                <div className="text-center mt-4 flex flex-col absolute right-0 left-0 mx-auto">
                    <button
                        onClick={toggleShowMore}
                        className="text-teal-600 dark:text-blue-500 text-sm flex flex-col items-center gap-2"
                        data-aos={showMore ? "fade-down" : "fade-up"} // انیمیشن برای دکمه
                        data-aos-duration="300" // زمان انیمیشن
                    >
                        {showMore ? 'بستن' : 'نمایش مشخصات بیشتر'}
                        {/* Colored circle with conditional arrow */}
                        <span
                            className="w-6 h-6 flex items-center justify-center bg-teal-600 dark:bg-blue-600 text-white rounded-full">
                            {showMore ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
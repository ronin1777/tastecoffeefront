import Image from "next/image";
import React from "react";

export default function ListCartMobile() {
    return <div className='child:pb-5 child:mb-5'>
        <div className='max-h-[400px] overflow-y-auto  scrollbar-color'>
            <div
                className='pb-1 border-b border-b-gray-300  dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5 max-h-[300px] overflow-y-auto'>
                <div
                    className='flex gap-x-1 border-b border-b-gray-100 dark:border-white/10'>
                    <Image src='/images/p1.png' width='90' height='90' alt='products'/>
                    <div className='flex flex-col justify-between gap-y-1.5'>
                        <h4 className='text-zinc-700 dark:text-white text-sm'>قهوه اسپرسو تیست مدل ۲۵۰
                            گرمی</h4>
                        <div>
                                            <span
                                                className='text-teal-600 dark:text-emerald-500 text-xs tracking-tighter'> 14.500 تومان تخفیف</span>
                            <div className='text-zinc-700 dark:text-white'>
                                175,000
                                <span className='text-xm'>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
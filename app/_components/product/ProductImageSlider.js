'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductImageSlider({ primaryImage, secondaryImage }) {
    const productImages = [
        primaryImage ? primaryImage.image : null,
        secondaryImage ? secondaryImage.image : null,
    ].filter(Boolean);


    return (
        <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg w-full md:w-1/2 lg:w-1/4">
            <Swiper loop={true} navigation={true} modules={[Navigation, Thumbs]} className="mySwiper2 rounded-md select-none h-auto">
                {productImages.map((image, index) => (
                    <SwiperSlide key={index} className="flex items-stretch justify-center cursor-zoom-in relative h-auto">
                        <div className="swiper-zoom-container">
                            <img loading="lazy" src={image} alt={`Product ${index + 1}`} className="object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper spaceBetween={7} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[Thumbs]} className="mySwiper mt-2 select-none swiper-thumbs">
                {productImages.map((image, index) => (
                    <SwiperSlide key={index} className="flex items-stretch justify-center h-auto">
                        <img loading="lazy" src={image} alt={`Thumbnail ${index + 1}`} className="rounded-[5px] object-cover thumbnail-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
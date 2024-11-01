// components/ProductSwiper.js
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import ProductCart from "@/app/_components/ShopItem";

export default function ProductSwiper({ products }) {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      spaceBetween={16}
      navigation={true}
      autoplay={{
        delay: 3000, // زمان تأخیر بین اسلایدها به میلی‌ثانیه
        disableOnInteraction: false, // پس از تعامل کاربر، اسلایدها ادامه پیدا می‌کنند
      }}
      modules={[Autoplay, Navigation, EffectCards]}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20, effect: "slide" },
        1024: { slidesPerView: 3, spaceBetween: 30, effect: "slide" },
      }}
      className="swiper-container"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCart product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

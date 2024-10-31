"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";

import ProductCart from "@/app/_components/ShopItem";
import { fetchProducts } from "@/services/product/fetchProducts";
import { useEffect, useState } from "react";

export default function HomePopularP() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      console.log("Fetched products:", response); // این خط را اضافه کنید
      if (response.results && Array.isArray(response.results)) {
        setProducts(response.results);
      } else {
        console.error("Products is not an array", response);
      }
    };
    getProducts();
  }, []);

  return (
    <section className="products-popular mb-9 md:mb-20">
      <div className="container">
        <div className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
          <div>
            <h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl">
              محبوب ترین محصولات
            </h2>
            <p className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5">
              پیشنهاد قهوه خورها
            </p>
          </div>
        </div>
        <div className="swiper">
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
        </div>
      </div>
    </section>
  );
}

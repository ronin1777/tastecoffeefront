"use client"


import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Parallax} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';


export default function HomeBanner() {
    return <section className="home relative w-full ">
        <Swiper
            speed={3000}
            pagination={true}
            parallax={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Parallax, Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div
                    className=" h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-no-repeat bg-cover bg-[center_top] bg-[url('/images/headerBgMobile.webp')] md:bg-[url('/images/headerBgDesktop.webp')]"
                >
                    <div data-swiper-parallax="-23%"
                         className="container-start container h-full md:min-h-screen flex justify-end items-center">
                        <div className="text-white">
                            <h2 data-swiper-parallax="-300" className="title md:text-6xl text-2xl mb-0.5 md:mb-2">قهوه
                                تیست</h2>
                            <span data-swiper-parallax="-200"
                                  className="subtitle md:text-5xl text-xl">یک فنجان قهوه</span>
                            <span className="w-[100px] h-px md:h-0.5 block bg-orange-300 my-3 md:my-8"></span>
                            <p data-swiper-parallax="-100"
                               className="text md:text-2xl text-xs max-w-[201px] md:max-w-[460px]">تجربه ای متفاوت از
                                طعم واقعی
                                قهوه</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className=" h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-no-repeat bg-cover bg-[center_top] bg-[url('/images/headerBgMobile.webp')] md:bg-[url('/images/headerBgDesktop.webp')]"
                >
                    <div data-swiper-parallax="-23%"
                         className="container-start container h-full md:min-h-screen flex justify-end items-center">
                        <div className="text-white">
                            <h2 data-swiper-parallax="-300" className="title md:text-6xl text-2xl mb-0.5 md:mb-2">قهوه
                                باورنکردنی</h2>
                            <span data-swiper-parallax="-200" className="subtitle md:text-5xl text-xl">معجزه در دستان شما</span>
                            <span className="w-[100px] h-px md:h-0.5 block bg-orange-300 my-3 md:my-8"></span>
                            <p data-swiper-parallax="-100"
                               className="text md:text-2xl text-xs max-w-[201px] md:max-w-[460px]">با نوشیدن یک فنجان
                                شما اد
                                دیگری میشوید</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className=" h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-no-repeat bg-cover bg-[center_top] bg-[url('/images/headerBgMobile.webp')] md:bg-[url('/images/headerBgDesktop.webp')]"
                >
                    <div data-swiper-parallax="-23%"
                         className="container-start container h-full md:min-h-screen flex justify-end items-center">
                        <div className="text-white">
                            <h2 data-swiper-parallax="-300" className="title md:text-6xl text-2xl mb-0.5 md:mb-2">قهوه
                                های
                                عربیکا</h2>
                            <span data-swiper-parallax="-200" className="subtitle md:text-5xl text-xl">قهوه هایی از دل جزایر ناشناخته</span>
                            <span className="w-[100px] h-px md:h-0.5 block bg-orange-300 my-3 md:my-8"></span>
                            <p data-swiper-parallax="-100"
                               className="text md:text-2xl text-xs max-w-[201px] md:max-w-[460px]">قهوه ایی با طعم یاد
                                های
                                گیلاس</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className=" h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-no-repeat bg-cover bg-[center_top] bg-[url('/images/headerBgMobile.webp')] md:bg-[url('/images/headerBgDesktop.webp')]"
                >
                    <div data-swiper-parallax="-23%"
                         className="container-start container h-full md:min-h-screen flex justify-end items-center">
                        <div className="text-white">
                            <h2 data-swiper-parallax="-300" className="title md:text-6xl text-2xl mb-0.5 md:mb-2"> قهوه
                                تیست
                                قهوه نیست</h2>
                            <span data-swiper-parallax="-200" className="subtitle md:text-5xl text-xl">نوشیدنی از لابلای جنگل های بهشت</span>
                            <span className="w-[100px] h-px md:h-0.5 block bg-orange-300 my-3 md:my-8"></span>
                            <p data-swiper-parallax="-100"
                               className="text md:text-2xl text-xs max-w-[201px] md:max-w-[460px]">با خرید قهوه تیست
                                دیگر نگران
                                کافيین خود نباشید</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
}


// mt-16 md:mt-0 h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]
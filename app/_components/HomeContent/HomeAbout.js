'use client'

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeAbout() {

    useEffect(() => {
        AOS.init({ duration: 1500, easing: 'ease-out-back' });
    }, []);

    return (
        <section className="about-us py-10 md:py-20 overflow-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Text section with fade-right effect */}
                <div
                    className="about-text"
                    data-aos="fade-left"
                >
                    <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-zinc-700 dark:text-white">
                        دنیای قهوه را کشف کنید
                    </h2>
                    <p className="text-sm xs:text-md md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                        قهوه یکی از محبوب‌ترین نوشیدنی‌های جهان است که از دانه‌های میوه قهوه تهیه می‌شود.
                        هر فنجان قهوه حاوی طعمی منحصر به فرد است که می‌تواند حس تازگی و انرژی را به شما هدیه دهد.
                        از مزرعه‌های قهوه در آمریکای جنوبی تا کوهستان‌های آفریقا، هر دانه قهوه داستانی از خاک، آب‌وهوا و دستانی
                        که آن را برداشت کرده‌اند، دارد.
                        در دنیای ما، قهوه تنها یک نوشیدنی نیست؛ بلکه تجربه‌ای است از فرهنگ، هنر و زندگی.
                        با هر جرعه‌ای که می‌نوشید، طعم یادهای خاصی از کاکائو، میوه‌ها و ادویه‌ها را حس می‌کنید.
                        ما با افتخار بهترین دانه‌های قهوه را برای شما فراهم کرده‌ایم تا تجربه‌ای فراموش‌نشدنی از نوشیدن قهوه
                        داشته باشید.
                    </p>
                    <a
                        href="/about"
                        className="inline-block px-5 py-3 bg-orange-400 text-white text-sm md:text-md rounded-lg transition hover:bg-orange-500"
                    >
                        ادامه مطلب
                    </a>
                </div>

                {/* Image section with fade-left effect */}
                <div
                    className="about-image"
                    data-aos="fade-right"
                >
                    <Image
                        src="/images/blog-4.png"
                        alt="درباره ما - قهوه"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";

export default function CategoryBanner() {
    return (
        <section className="category-banner mb-10 md:mb-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-6 pt-9 sm:pt-12 md:pt-20 lg:pt-24">
                    <Link href="/shop" className="relative flex items-start justify-center flex-col pr-12 bg-category-banner-left h-32 xs:h-44 lg:h-60 bg-cover bg-[left_top] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <span className="relative z-10 text-white font-dana-bold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">انواع  پودر قهوه</span>
                        {/*<span className="relative z-10 text-white font-dana-medium md:text-xl">ترکیبی و پر رو</span>*/}
                    </Link>
                    <Link href="/shop" className="relative flex items-start justify-center flex-col pr-12 bg-category-banner-right h-32 xs:h-44 lg:h-60 bg-cover bg-[center_top] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <span className="relative z-10 text-white font-dana-bold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">بسته بندی قهوه</span>
                        {/*<span className="relative z-10 text-white font-dana-medium md:text-xl">نسکافه ، هات چاکلت ،ماسالا</span>*/}
                    </Link>

                </div>
            </div>
        </section>
    );
}
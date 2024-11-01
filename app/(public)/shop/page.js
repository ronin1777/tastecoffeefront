import ListShop from "@/app/_components/ListShop";

import ProductFilters from "@/app/_components/product/FilterBar";
import PaginationComponent from "@/app/_components/product/PaginationComponent";
import apiUrl from "@/services/config";
import Image from "next/image";
import imag from "@/public/images/coffee/shop1.jpg";
const style = {
  width: "100%",
  height: "50%",
  objectFit: "cover", // اطمینان حاصل می‌کند که تصویر به‌طور متناسب در عرض کل صفحه بدون کشیدگی قرار گیرد
  objectPosition: "center", // برای تمرکز تصویر در وسط
};

export const metadata = {
  title: {
    template: "%s | تیست کافی",
    default: "فروشگاه",
  },
  description:
    "فروشگاه تیست کافی، جایی برای خرید قهوه‌های تخصصی با کیفیت عالی.",
  openGraph: {
    title: "فروشگاه | تیست کافی",
    description:
      "به فروشگاه تیست کافی خوش آمدید. قهوه‌های تخصصی و با کیفیت را با بهترین قیمت پیدا کنید.",
    images: ["/images/coffee/shop1.jpg"], // مسیر تصویر مخصوص صفحه فروشگاه
  },
  // metadataBase: new URL(apiUrl || "http://localhost"),
};

export default async function ShopPage({ searchParams }) {
  const currentPage = parseInt(searchParams.page) || 1;

  const itemsPerPage = 10;

  const queryParams = new URLSearchParams({
    ...searchParams,
    page: currentPage,
    page_size: itemsPerPage,
  }).toString();
  const res = await fetch(`${apiUrl}/api/product/products/?${queryParams}`, {
    method: "GET",
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "خظا در دریافت اطلاعات");
  }

  const { results: products, count, next, previous } = await res.json();
  const url = "shop";
  console.log(searchParams);

  return (
    <div className="flex flex-col gap-11">
      <section className="shop-header  mt-7 md:mt-0 h-60 xs:h-80 md:h-screen  bg-no-repeat bg-cover bg-[center_top] xs:bg-[left_top]">
        <div className=" flex items-center h-full">
          <Image
            src={imag}
            alt="banner image"
            style={style}
            layout="responsive"
          />

          {/* <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl select-none text-white">
            فروشگاه محصولات
          </h1> */}
        </div>
      </section>

      <section className="shop my-20 md:my-20">
        <div className="container max-w-custom mx-auto">
          <div className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
            <h2 className="text-xl xs:text-2xl md:text-5xl">همه محصولات</h2>
          </div>
          <div>
            <div className="relative w-full sm:w-1/2">
              <ProductFilters />
            </div>
            <div>
              {products.length ? (
                <ListShop products={products} />
              ) : (
                <p className="text-red-500">محصولی پیدا نشد</p>
              )}
            </div>
            <PaginationComponent
              count={count}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              searchParams={searchParams}
              url={url}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

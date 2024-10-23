import HomeProductS from "@/app/_components/HomeContent/HomeProductS";
import HomeCategoryP from "@/app/_components/HomeContent/HomeCategoryP";
import CategoryBanner from "@/app/_components/HomeContent/CategoryBanner";
import HomeAbout from "@/app/_components/HomeContent/HomeAbout";

import ShippingSection from "@/app/_components/SendProducts";
import HomeBlog from "@/app/_components/HomeContent/HomeBlog";
import HomeBanner from "@/app/_components/HomeContent/HomeBanner";
import { fetchProducts } from "@/services/product/fetchProducts";

export default async function Home() {
  const { results: products } = await fetchProducts();
  return (
    <>
      <HomeBanner />
      <HomeProductS products={products} />
      <CategoryBanner />
      <HomeAbout />
      <HomeCategoryP />
      <ShippingSection />
      {/* <HomePopularP products={products} /> */}
      <HomeBlog />
    </>
  );
}

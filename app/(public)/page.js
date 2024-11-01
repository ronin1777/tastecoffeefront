import HomeProductS from "@/app/_components/HomeContent/HomeProductS";
import HomeCategoryP from "@/app/_components/HomeContent/HomeCategoryP";
import CategoryBanner from "@/app/_components/HomeContent/CategoryBanner";
import HomeAbout from "@/app/_components/HomeContent/HomeAbout";

import ShippingSection from "@/app/_components/SendProducts";
import HomeBlog from "@/app/_components/HomeContent/HomeBlog";
import HomeBanner from "@/app/_components/HomeContent/HomeBanner";
import { fetchProducts } from "@/services/product/fetchProducts";
import HomePopularP from "../_components/HomeContent/HomePopularP";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import SearchProducts from "./SearchProducts";

export default async function Home() {
  return (
    <>
      <HomeBanner />
      {/* <SearchProducts /> */}
      <HomeProductS />

      <CategoryBanner />
      <HomeAbout />
      <HomeCategoryP />
      <ShippingSection />
      <HomePopularP />
      <HomeBlog />
    </>
  );
}

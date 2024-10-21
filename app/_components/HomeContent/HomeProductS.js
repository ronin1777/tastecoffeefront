
import {fetchProducts} from "@/services/product/fetchProducts";
// import HomeProductList from "@/app/_components/HomeContent/HomeProductList";
// import {Suspense} from "react";
//
//
// export default async function HomeProductS() {
//
//     return <section className="products-section pt-8 md:pt-20 lg:pt-36 bg-no-repeat">
//         <div className="container mt-5">
//             <div
//                 className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
//                 <div><h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl"> جدیدترین محصولات </h2><p
//                     className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5">فرآوری شده از دانه قهوه</p>
//                 </div>
//                 <a href="/shop"
//                    className="flex justify-center items-center md:gap-x-0.5 pr-3 pl-1 h-11 rounded-lg transition-colors text-orange-400 dark:text-orange-300 hover:dark:bg-orange-300/20 hover:bg-orange-300/35 text-sm xs:text-lg ipad:text-xl tracking-tightest">مشاهده
//                     همه
//                 </a>
//             </div>
//             <Suspense fallback={<h1>در حال بارگذاری جدید ترین محصولات...</h1>}>
//                 <HomeProductList/>
//                 </Suspense>
//         </div>
//     </section>
// }


import { Suspense } from "react";
import HomeProductList from "./HomeProductList";
import NewProductsLoading from "@/app/_components/Loadings/NewProducts";

export default function HomeProductS({products}) {
    return (
        <section className="products-section pt-8 md:pt-20 lg:pt-36 bg-no-repeat">
            <div className="container mt-5">
                <div className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
                    <div>
                        <h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl"> جدیدترین محصولات </h2>
                        <p className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5">فرآوری شده از دانه قهوه</p>
                    </div>
                    <a href="/shop"
                       className="flex justify-center items-center md:gap-x-0.5 pr-3 pl-1 h-11 rounded-lg transition-colors text-orange-400 dark:text-orange-300 hover:dark:bg-orange-300/20 hover:bg-orange-300/35 text-sm xs:text-lg ipad:text-xl tracking-tightest">
                        مشاهده همه
                    </a>
                </div>

                <Suspense fallback={<NewProductsLoading/>}>
                    <HomeProductList products={products}/>
                </Suspense>
            </div>
        </section>
    );
}
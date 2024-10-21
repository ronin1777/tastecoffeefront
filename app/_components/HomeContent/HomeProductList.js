// 'use client'
//
// import Grid from "@mui/material/Grid";
// import ShopItem from "@/app/_components/ShopItem";
//
// export default function HomeProductList({products}){
//     return             <Grid container spacing={3} className="mt-10">
//                 {products.map((product) => (
//                     <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={product.id}>
//                         <ShopItem product={product} />
//                     </Grid>
//                 ))}
//             </Grid>
// }



// "use client";
//
// import { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import ShopItem from "@/app/_components/ShopItem";
// import { fetchProducts } from "@/_api/product/fetchProducts";
//
// export default function HomeProductList() {
//     const [products, setProducts] = useState([]);
//
//
//     useEffect(() => {
//         const loadProducts = async () => {
//             try {
//                 const { results } = await fetchProducts();
//                 setProducts(results);
//             } catch (error) {
//                 console.error("خطا در بارگذاری محصولات:", error);
//             }
//         };
//
//         loadProducts();
//     }, []); // فقط در بار اول کامپوننت
//
//
//     return (
//         <Grid container spacing={3} className="mt-10">
//             {products.map((product) => (
//                 <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={product.id}>
//                     <ShopItem product={product} />
//                 </Grid>
//             ))}
//         </Grid>
//     );
// }


import Grid from "@mui/material/Grid";
import ShopItem from "@/app/_components/ShopItem";
import { fetchProducts } from "@/services/product/fetchProducts";


export default async function HomeProductList({products}) {
    const limitedProducts = products.slice(0, 6);

    return (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            {limitedProducts.map((product) => (
                <div className="" key={product.id}>
                    <ShopItem product={product} />
                </div>
            ))}
        </div>
    );
}

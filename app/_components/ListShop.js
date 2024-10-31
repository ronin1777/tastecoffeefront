// "use client";

// import ShopItem from "@/app/_components/ShopItem";

// import Grid from "@mui/material/Grid";

// export default function ListShop({ products }) {
//   return (
//     <Grid container spacing={3} className="mt-10">
//       {products.map((product) => (
//         <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={product.id}>
//           <ShopItem product={product} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

"use client";

import ShopItem from "@/app/_components/ShopItem";

export default function ListShop({ products }) {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 ">
      {products.map((product, index) => (
        <div key={index} className="rounded-lg p-4">
          <ShopItem product={product} />
        </div>
      ))}
    </div>
  );
}

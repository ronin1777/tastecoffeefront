"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, formatWeight } from "@/app/utils/utils";
import { blue } from "@mui/material/colors";

export default function ShopItem({ product }) {
  const primaryImage = product?.images.find(
    (image) => image.image_type === "primary"
  );
  const secondaryImage = product?.images.find(
    (image) => image.image_type === "secondary"
  );
  const isAvailable = product?.available;
  const type = product?.coffee_type;
  const price = formatPrice(product?.base_price);
  const weight = formatWeight(product?.weight);
  console.log(`primeryimage: ${primaryImage.image}`);

  return (
    <div
      className="relative group p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl dark:shadow-lg dark:shadow-black/50 max-w-xs mx-auto rounded-2xl bg-white dark:bg-gray-700 dark:text-white text-black opacity-100"
      style={{ opacity: isAvailable ? 1 : 0.6 }}
    >
      <div className="relative">
        <Link
          href="/shop"
          className="flex flex-col justify-center items-center relative aspect-square"
        >
          {/* Primary Image */}
          {primaryImage && (
            <Image
              src={primaryImage.image}
              fill
              placeholder="blur"
              blurDataURL="/images/coffee/1.webp"
              alt="Product Image Primary"
              className="rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
          )}
          {/* Secondary Image */}
          {secondaryImage && (
            <Image
              src={secondaryImage.image}
              fill
              alt="Product Image Secondary"
              className="absolute inset-0 w-auto rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Weight */}
        <div className="absolute top-0 right-0 z-10 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-bl-lg">
          {weight}
        </div>

        {/* Tooltip */}
        {!isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center group-hover:block opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
            <span className="absolute bg-black text-white text-xs rounded py-1 px-2 -translate-y-full translate-x-1/2 shadow-md">
              این محصول در حال حاضر ناموجود است
            </span>
          </div>
        )}
      </div>

      <div className="text-center py-2">
        {/* Product Name */}
        <h6 className="font-bold text-lg truncate leading-snug">
          <Link href="/shop" className="no-underline text-inherit">
            {product?.name}
          </Link>
        </h6>

        {/* Base Price */}
        <p className="font-bold text-yellow-600 text-base">{price}</p>

        {/* Coffee Type */}
        <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-1">
          {type === "bean" ? "دانه" : "پودر"} قهوه
        </p>
      </div>

      <Link
        href={`/shop/${product?.id}`}
        className="mt-2 inline-block text-center font-bold text-sm border-2 border-orange-500  rounded-lg py-2 px-4 hover:bg-orange-500 hover:text-white transition-colors"
      >
        جزئیات
      </Link>
    </div>
  );
}

// export default function ShopItem({ product }) {
//     const primaryImage = product?.images.find(image => image.image_type === 'primary');
//     const secondaryImage = product?.images.find(image => image.image_type === 'secondary');
//     const isAvailable = product?.available;
//     const type = product?.coffee_type
//     const price = formatPrice(product?.base_price);
//     const weight = formatWeight(product?.weight);
//
//     return (
//
//         <Tooltip title={isAvailable ? "" : "این محصول در حال حاضر ناموجود است"} followCursor>
//         <Card
//             sx={{
//                 p: 2,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: (theme) => theme.palette.mode === 'dark' ? '0px 8px 40px rgba(255, 255, 255, 0.4)' : '0px 8px 40px rgba(0, 0, 0, 0.2)',
//                 },
//                 maxWidth: 300,
//                 margin: '0 auto',
//                 borderRadius: '16px', // لبه های گرد
//                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#424242' : '#fff',
//                 color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#000',
//                 opacity: isAvailable ? 1 : 0.6, // تغییر شفافیت برای محصولات ناموجود
//             }}
//         >
//             <div className="relative group">
//                 <Link href="/shop" className="flex relative flex-col justify-center items-center aspect-square">
//                     {/* Primary Image */}
//                     {primaryImage && (
//                         <Image
//                             src={primaryImage.image}
//                             fill
//                             alt="Product Image Primary"
//                             className="rounded-lg transition-opacity duration-300 transform group-hover:scale-105"
//                         />
//                     )}
//                     {/* Secondary Image */}
//                     {secondaryImage && (
//                         <Image
//                             src={secondaryImage.image}
//                             fill
//                             alt="Product Image Secondary"
//                             className="absolute inset-0 w-auto aspect-square rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
//                         />
//                     )}
//                 </Link>
//
//                 {/* Weight */}
//                 <Chip
//                     label={weight}
//                     sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         zIndex: 1,
//                         fontSize: '0.7rem',
//                     }}
//                 />
//             </div>
//
//             <CardContent sx={{ textAlign: 'center', padding: '0.5rem' }}>
//                 {/* Product Name */}
//                 <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} className="line-clamp-2">
//                     <Link href="/shop" className="no-underline" style={{ color: 'inherit' }}>
//                         {product?.name}
//                     </Link>
//                 </Typography>
//
//                 {/* Base Price */}
//                 <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', fontSize: '1rem' }}>
//                     {price}
//                 </Typography>
//
//                 {/* Coffee Type */}
//                 <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: '300', fontSize: '0.8rem' }}>
//                       {type=== 'bean'? 'دانه': 'پودر'} قهوه
//                 </Typography>
//             </CardContent>
//
//             <Link href={`/shop/${product?.id}`} className="flex mt-2 items-center justify-center font-bold inline-block text-[0.9rem] border-2 border-yellow-500 text-yellow-500 rounded-lg py-2 px-4 hover:bg-yellow-500 hover:text-white transition-colors">
//                 جزئیات محصول
//             </Link>
//         </Card>
//         </Tooltip>
//
//     );
// }

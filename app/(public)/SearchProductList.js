"use client";

import Link from "next/link";
import Image from "next/image";

const ProductList = ({ products }) => {
  return (
    <div className="relative bg-white dark:bg-zinc-700 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto scrollbar-custom mt-2">
      {" "}
      {/* Removed absolute positioning */}
      <div className="grid grid-cols-2 gap-2 p-2">
        {products.map((product) => (
          <Link
            href={`/shop/${product.id}`}
            key={product.id}
            className="flex items-center p-4 bg-zinc-200 dark:bg-black border-b border-gray-200 hover:bg-gray-100"
          >
            {/* تصویر محصول */}
            <Image
              src={product.images[0].image}
              alt={product.name}
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-md mr-3"
            />
            <h3 className="text-zinc-700 dark:text-white font-semibold text-lg">
              {product.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import ShopItem from "@/app/_components/ShopItem";

export default async function HomeProductList() {
  const limitedProducts = products?.slice(0, 6);

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
      <h>hi</h>
      {/* {limitedProducts.map((product) => (
                <div className="" key={product?.id}>
                    <ShopItem product={product} />
                </div>
            ))} */}
    </div>
  );
}

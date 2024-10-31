import ShopItem from "@/app/_components/ShopItem";
import { fetchProducts } from "@/services/product/fetchProducts";

export default async function HomeProductList() {
  const { results: products } = await fetchProducts();
  const limitedProducts = products?.slice(0, 6);

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

import apiUrl from "@/services/config";

export const fetchProducts = async () => {
  const res = await fetch(`${apiUrl}/api/product/products/`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "خطا در دریافت اطلاعات");
  }

  const data = await res.json();
  return data;
};

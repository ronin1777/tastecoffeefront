import apiUrl from "@/services/config";
import { apiBaseUrl } from "next-auth/client/_utils";

export async function fetchCartData(cartId, accessToken) {
  let apiUrl = `${apiBaseUrl}/api/orders/cart/`;
  let headers = {
    "Content-Type": "application/json",
    next: { revalidate: 10 },
  };

  if (accessToken) {
    // درخواست برای کاربر احراز هویت شده با استفاده از توکن
    headers["Authorization"] = `Bearer ${accessToken}`;
  } else if (cartId) {
    // اضافه کردن cartId به عنوان پارامتر query برای کاربر مهمان
    apiUrl += `?cart_id=${cartId}`;
  } else {
    return null; // اگر نه توکن و نه cartId وجود داشته باشد
  }

  try {
    const response = await fetch(apiUrl, { headers });
    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to fetch cart data:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return null;
  }
}

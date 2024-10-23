import apiUrl from "@/services/config";

export async function fetchCartData(cartId, accessToken) {
  let apiUrls = `${apiUrl}/api/orders/cart/`;
  let headers = {
    "Content-Type": "application/json",
    next: { revalidate: 10 },
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  } else if (cartId) {
    apiUrls += `?cart_id=${cartId}`;
  } else {
    return null;
  }

  try {
    const response = await fetch(apiUrls, { headers });
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

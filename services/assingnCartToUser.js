import cookie from "cookie";
import apiUrl from "@/services/config";

export const connectCart = async (accessToken) => {
  const cookies = cookie.parse(document.cookie);
  const cartUuid = cookies.cart_uuid;
  try {
    const response = await fetch(`${apiUrl}/api/orders/assign-cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ cart_uuid: cartUuid }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Cart connected successfully:", data);
      document.cookie = cookie.serialize("cart_uuid", "", {
        maxAge: -1,
        path: "/",
      });
      return data;
    } else {
      console.error(`failed to connect`);
      return null;
    }
  } catch (error) {
    console.error("Error connecting cart:", error);
    return null;
  }
};

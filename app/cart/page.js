"use client";

import apiUrl from "@/services/config";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/orders/cart/`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch cart");
        }

        const { cart, total_price } = await res.json();
        setCart(cart);
        setTotalPrice(total_price);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false); // اطمینان از اینکه بارگذاری در هر صورت متوقف می‌شود
      }
    };

    fetchCart();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // نمایش صفحه بارگذاری
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.product_id}>
                <img
                  src={item.image || "/path/to/default-image.jpg"}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <h2>Total Price: {totalPrice.toFixed(2)}</h2>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

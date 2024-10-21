export async function addToCart(productId, quantity) {
  try {
    const guestCartId = document.cookie
      .split('; ')
      .find((row) => row.startsWith('guest_cart_id='))
      ?.split('=')[1];
    console.log(`guestCartId: ${guestCartId}`)

    const response = await fetch(`http://127.0.0.1:8000/api/orders/add-to-cart/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id: productId, quantity, cart_id: guestCartId }),
      credentials: 'include', // این خط برای ارسال کوکی‌ها به سمت سرور لازم است
    });

    if (!response.ok) {
      throw new Error('خطا در اضافه کردن محصول به سبد خرید');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}


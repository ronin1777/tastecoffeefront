import apiUrl from "@/services/config";

export const updateCartQuantity = async (
  productId,
  cartId,
  newQuantity,
  accessToken
) => {
  try {
    // تعیین URL بر اساس وضعیت ورود کاربر
    const apiUrl = accessToken
      ? `${apiUrl}/api/orders/update-cart/${productId}/` // کاربر وارد شده
      : `${apiUrl}/api/orders/update-cart/${cartId}/${productId}/`; // کاربر مهمان

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }), // اضافه کردن توکن اگر کاربر وارد شده باشد
      },
      body: JSON.stringify({ quantity: newQuantity }),
    });

    if (!response.ok) {
      throw new Error("Failed to update quantity on server.");
    }

    const data = await response.json();
    return data; // برگرداندن داده‌های به‌روزرسانی شده
  } catch (error) {
    console.error("Error updating quantity:", error);
    throw error; // ارسال خطا به تابع فراخوانی
  }
};

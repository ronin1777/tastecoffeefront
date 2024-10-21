export const fetchProducts = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`http://127.0.0.1:8000/api/product/products/`, {
        method: 'GET',
        next: { revalidate: 10 },  // داده‌ها هر 60 ثانیه یکبار رفرش می‌شوند
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || 'خطا در دریافت اطلاعات');
    }

    const data = await res.json();
    return data;
};
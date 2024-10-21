'use client'

import { GoTrash } from "react-icons/go";
import { useRouter } from 'next/navigation';
export default function DeleteItemButton({ item, accessToken, cartId }) {
    const router = useRouter();
    const handleDelete = async () => {
        try {

            const url = accessToken
                ? `http://127.0.0.1:8000/api/orders/delete-cart/${item.product}/`  // برای کاربران وارد شده
                : `http://127.0.0.1:8000/api/orders/delete-cart/${cartId}/${item.product}/`;  // برای مهمانان

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // اگر accessToken وجود دارد، به هدرها اضافه کنید
                    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
                },
            });

            if (response.ok) {
                console.log('Item deleted successfully');
                router.refresh();  // به‌روزرسانی صفحه بعد از حذف
            } else {
                console.error('Failed to delete item from cart');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition-colors">
            <GoTrash />
        </button>
    );
}
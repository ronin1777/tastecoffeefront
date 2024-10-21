'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {updateCartQuantity} from "@/services/updateCartQuantity";


export default function QuantityUpdater({ item, cartId, accessToken }) {
    const [quantity, setQuantity] = useState(item?.quantity || 0);
    const router = useRouter();

    const handleIncrement = async () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        try {
            await updateCartQuantity(item?.product, cartId, newQuantity, accessToken); // به‌روزرسانی در سرور
            router.refresh();
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleDecrement = async () => {
        if (quantity > 1) { // جلوگیری از مقدار منفی
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            try {
                await updateCartQuantity(item?.product, cartId, newQuantity, accessToken); // به‌روزرسانی در سرور
                router.refresh();
            } catch (error) {
                console.error('Error updating quantity:', error);
            }
        }
    };

    return (
        <div className="mt-2">
            <div className="flex items-center border-2 border-orange-400 rounded-full px-2 w-max child:select-none">
                <span onClick={handleIncrement} className="text-2xl cursor-pointer px-0.5">+</span>
                <span className="mx-2 text-lg">{quantity}</span>
                <span onClick={handleDecrement} className="text-3xl cursor-pointer px-0.5">-</span>
            </div>
        </div>
    );
}
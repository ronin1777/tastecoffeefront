'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import {formatPrice} from "@/app/utils/utils";

export default function OrderForm({ accessToken }) {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: "onChange", // به‌روزرسانی حالت اعتبارسنجی به onChange
    });
    const [shippingMethods, setShippingMethods] = useState([]);
    const router = useRouter();


    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/orders/orders-create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const orderData = await response.json();
                console.log(`data: `, orderData);
                console.log(`id: ${orderData.id}`);
            router.push(`/order/${orderData.id}`);
            } else {
                const errorData = await response.json();
                alert(`خطا: ${errorData.detail || 'خطای نامشخص'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('خطا در ثبت سفارش.');
        }
    };

    useEffect(() => {
        const fetchShippingMethods = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/orders/shipping-methods/');
                const data = await response.json();
                setShippingMethods(data);
            } catch (error) {
                console.error('Error fetching shipping methods:', error);
            }
        };

        fetchShippingMethods();
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <label className="block text-zinc-800 dark:text-white text-sm font-semibold mb-2" htmlFor="address">
                    آدرس تحویل
                </label>
                <input
                    type="text"
                    id="address"
                    {...register("shipping_address", {
                        required: "لطفا آدرس تحویل را وارد کنید.",
                        pattern: {
                            value: /^[\u0600-\u06FF\s]{20,}$/,
                            message: "لطفا فقط حروف فارسی و حداقل ۲۰ کاراکتر وارد کنید."
                        }
                    })}
                    className="shadow-md appearance-none border dark:border-zinc-600 rounded-lg w-full py-3 px-4 text-zinc-800 dark:text-white bg-white dark:bg-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="آدرس خود را وارد کنید"
                />
                {errors.shipping_address && <span className="text-red-500">{errors.shipping_address.message}</span>}
            </div>
            <div className="mb-6">
                <label className="block text-zinc-800 dark:text-white text-sm font-semibold mb-2" htmlFor="postal_code">
                    کد پستی
                </label>
                <input
                    type="text"
                    id="postal_code"
                    {...register("postal_code", {
                        required: "لطفا کد پستی را وارد کنید.",
                        minLength: {
                            value: 10,
                            message: "کد پستی باید 10 رقم باشد."
                        },
                        maxLength: {
                            value: 10,
                            message: "کد پستی باید 10 رقم باشد."
                        },
                        pattern: {
                            value: /^[0-9۰-۹]+$/,
                            message: "لطفا فقط اعداد را وارد کنید."
                        }
                    })}
                    className="shadow-md appearance-none border dark:border-zinc-600 rounded-lg w-full py-3 px-4 text-zinc-800 dark:text-white bg-white dark:bg-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="کد پستی خود را وارد کنید"
                />
                {errors.postal_code && <span className="text-red-500">{errors.postal_code.message}</span>}
            </div>
            <div className="mb-6">
                <label className="block text-zinc-800 dark:text-white text-sm font-semibold mb-2" htmlFor="shipping_method">
                    روش ارسال
                </label>
                <select
                    id="shipping_method"
                    {...register("shipping_method", { required: "لطفا یک روش ارسال انتخاب کنید." })}
                    className="shadow-md appearance-none border dark:border-zinc-600 rounded-lg w-full py-3 px-4 text-zinc-800 dark:text-white bg-white dark:bg-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">انتخاب کنید</option>
                    {shippingMethods.map((method) => (
                        <option key={method.id} value={method.id}>
                            {method.name} - {formatPrice(method.price)}
                        </option>
                    ))}
                </select>
                {errors.shipping_method && <span className="text-red-500">{errors.shipping_method.message}</span>}
            </div>
            <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
                ثبت سفارش
            </button>
        </form>
    );
}

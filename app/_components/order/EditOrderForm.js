import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/app/utils/utils";
import apiUrl from "@/services/config";

export default function EditOrderForm({ initialData, onUpdate, accessToken }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  const [shippingMethods, setShippingMethods] = useState([]);

  useEffect(() => {
    const fetchShippingMethods = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/orders/shipping-methods/`);
        if (response.ok) {
          const data = await response.json();
          setShippingMethods(data);
        } else {
          console.error("خطا در دریافت روش‌های ارسال.");
        }
      } catch (error) {
        console.error("مشکل در درخواست به API:", error);
      }
    };

    fetchShippingMethods();
  }, []);

  const onSubmit = async (formData) => {
    const response = await fetch(
      `${apiUrl}/api/orders/orders-update/${formData.id}/`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      const updatedOrder = await response.json();
      onUpdate(updatedOrder); // به‌روزرسانی والد
    } else {
      alert("خطا در به‌روزرسانی سفارش.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-10">
      <div className="mb-6">
        <label
          className="block text-zinc-800 dark:text-white text-sm font-semibold mb-2"
          htmlFor="address"
        >
          آدرس تحویل
        </label>
        <input
          type="text"
          id="address"
          {...register("shipping_address", {
            required: "لطفا آدرس تحویل را وارد کنید.",
            pattern: {
              value: /^[\u0600-\u06FF\s]{20,}$/,
              message: "لطفا فقط حروف فارسی و حداقل ۲۰ کاراکتر وارد کنید.",
            },
          })}
          className="shadow-md appearance-none border dark:border-zinc-600 rounded-lg w-full py-3 px-4 text-zinc-800 dark:text-white bg-white dark:bg-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="آدرس خود را وارد کنید"
        />
        {errors.shipping_address && (
          <span className="text-red-500">
            {errors.shipping_address.message}
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-zinc-800 dark:text-white text-sm font-semibold mb-2"
          htmlFor="postal_code"
        >
          کد پستی
        </label>
        <input
          type="text"
          id="postal_code"
          {...register("postal_code", {
            required: "لطفا کد پستی را وارد کنید.",
            minLength: {
              value: 10,
              message: "کد پستی باید 10 رقم باشد.",
            },
            maxLength: {
              value: 10,
              message: "کد پستی باید 10 رقم باشد.",
            },
            pattern: {
              value: /^[0-9۰-۹]+$/,
              message: "لطفا فقط اعداد را وارد کنید.",
            },
          })}
          className="shadow-md appearance-none border dark:border-zinc-600 rounded-lg w-full py-3 px-4 text-zinc-800 dark:text-white bg-white dark:bg-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="کد پستی خود را وارد کنید"
        />
        {errors.postal_code && (
          <span className="text-red-500">{errors.postal_code.message}</span>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-zinc-800 dark:text-white text-sm font-semibold mb-2"
          htmlFor="shipping_method"
        >
          روش ارسال
        </label>
        <select
          id="shipping_method"
          {...register("shipping_method", {
            required: "لطفا یک روش ارسال انتخاب کنید.",
          })}
          className="shadow-md appearance-none border dark:border-zinc-600 rounded-lg w-full py-3 px-4 text-zinc-800 dark:text-white bg-white dark:bg-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">انتخاب کنید</option>
          {shippingMethods.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name} - {formatPrice(method.price)}
            </option>
          ))}
        </select>
        {errors.shipping_method && (
          <span className="text-red-500">{errors.shipping_method.message}</span>
        )}
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

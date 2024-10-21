import {cookies} from "next/headers";
import {fetchCartData} from "@/services/fetchCartData";
import {formatPrice} from "@/app/utils/utils";
import Image from "next/image";
import {FaShippingFast} from "react-icons/fa";

import {PiCoffeeBeanFill} from "react-icons/pi";
import OrderForm from "@/app/_components/order/OrderForm";

const orderPage = async () => {
  const cookieStore = cookies();
  const cartId = cookieStore.get('cart_uuid')?.value;
  const accessToken = cookieStore.get('access_token')?.value;

  const cartData = await fetchCartData(cartId, accessToken);

  const cartItems = cartData?.items || [];
  const totalPrice = cartData?.total_price_cart || 0;
  const totalPriceFormatted = formatPrice(totalPrice);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);




return (
  <div className="container mx-auto my-10 p-4">
    {/* Page Title */}
    <h1 className="text-3xl font-bold mb-8 text-center text-zinc-800 dark:text-white tracking-wide">
      بررسی و ثبت سفارش
    </h1>

    {/* Cart Products Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-zinc-700 text-zinc-700 dark:text-white uppercase text-sm leading-normal">
            <th className="py-4 px-6 text-left">نام محصول</th>
            <th className="py-4 px-6 text-center">تصویر</th>
            <th className="py-4 px-6 text-center">تعداد</th>
            <th className="py-4 px-6 text-center">قیمت واحد</th>
            <th className="py-4 px-6 text-center">قیمت کل</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-300"
            >
              <td className="py-4 px-6 text-left gap-2 text-zinc-800 dark:text-white flex items-center">
                <PiCoffeeBeanFill className="text-stone-800 dark:text-stone-500 mr-2" />
                {item?.product_name}
              </td>
              <td className="py-4 px-6 text-center">
                <Image src={item?.product_image} alt={item?.product_name} quality={100} width={400} height={400} className="w-16 h-16 object-cover rounded-md shadow-md" />
              </td>
              <td className="py-4 px-6 text-center text-zinc-800 dark:text-white">{item?.quantity}</td>
              <td className="py-4 px-6 text-center text-zinc-800 dark:text-white">
                {formatPrice(item?.total_price_items / item?.quantity)}
              </td>
              <td className="py-4 px-6 text-center text-zinc-800 dark:text-white">
                {formatPrice(item?.total_price_items)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Cost Summary */}
    <div className="flex justify-between items-center mt-8 p-6 bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-lg">
      <span className="font-semibold text-lg text-zinc-800 dark:text-white">جمع کل:</span>
      <span className="text-lg font-bold text-green-600 dark:text-green-400">{formatPrice(totalPrice)}</span>
    </div>

    {/* Order Form */}
    <div className="mt-10 bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-8">
      <h2 className="text-xl font-bold mb-6 text-zinc-800 dark:text-white flex items-center">
        <FaShippingFast className="text-blue-500 dark:text-blue-400 mr-2" />
        اطلاعات ارسال
      </h2>
      <OrderForm accessToken={accessToken}/>
    </div>
  </div>
);
};

export default orderPage;
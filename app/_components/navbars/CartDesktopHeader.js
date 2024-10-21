
import Image from "next/image";
import ItemCart from "@/app/_components/navbars/ItemListCart";
import {cookies} from 'next/headers'
import {formatPrice} from "@/app/utils/utils";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import {fetchCartData} from "@/services/fetchCartData";
import Link from "next/link";


export default async function CartDesktopHeader() {
    const cookieStore = cookies();
    const cartId = cookieStore.get('cart_uuid')?.value;
    const accessToken = cookieStore.get('access_token')?.value;



    const cartData = await fetchCartData(cartId, accessToken);

    const cartItems = cartData?.items || [];
    const totalPrice = cartData?.total_price_cart || 0;
    const totalPriceFormatted = formatPrice(totalPrice);
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);


    return (
        <div className="relative group">
            <div className="py-3 relative">
                <HiOutlineShoppingBag className="w-7 h-7" />
                <span className="flex justify-center items-center absolute top-5 right-1 w-5 h-5 text-sm rounded-full">
                    {totalQuantity}
                </span>
            </div>
            <div className="absolute left-0 p-5 top-full space-y-3 w-[350px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white text-base rounded-2xl border-t-[3px] border-orange-300 shadow-normal">
                {cartItems.length === 0 ? (
                    <div className="cart-container">
                        <div className="flex flex-col items-center justify-center gap-y-3">
                            <Image
                                src="/images/headerimage/emptycart.png"
                                width={100}
                                height={100}
                                alt="Cart Empty Image"
                                className="w-36 h-36"
                            />
                            <p className="text-red-600 dark:text-gray-200 font-bold dark:font-normal">
                                سبد خرید شما خالی است
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="cart-container">
                        {cartItems.map((item) => (
                            <ItemCart key={item.id} item={item} user={accessToken ? 'logged-in' : 'guest'} cartId={cartId} accessToken={accessToken}/>
                        ))}
                        <div className="flex justify-between items-center pt-3 border-t-[1px] border-t-white/30">
                            <div>
                                <p className="text-gray-600 dark:text-gray-300 text-[11px]">مبلغ قابل پرداخت</p>
                                <span className="font-bold text-md">{totalPriceFormatted}</span>
                            </div>
                            {accessToken ? (
                                <Link href="/order" className="bg-teal-600 hover:bg-teal-700 transition-colors text-white rounded-lg p-3">
                                    ثبت سفارش
                                </Link>
                            ) : (
                                <p className="text-red-600 font-bold">
                                    برای ثبت سفارش لطفا وارد شوید.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
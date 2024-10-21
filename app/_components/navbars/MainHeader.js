
import MobileHeader from "@/app/_components/navbars/MobileHeader";
import DesktopHeader from "@/app/_components/navbars/DesktopHeader";
import BottomNav from "@/app/_components/navbars/BottomNav";
import {cookies, headers} from "next/headers";
import {fetchUserDataWithToken, getAccessTokenAndRefreshToken} from "@/app/utils/getAccessTokenAndRefreshToken";
import {fetchCartData} from "@/services/fetchCartData";
import {formatPrice} from "@/app/utils/utils";

export default async function MainHeader(){
    const headerList = headers();
    const { accessToken, refreshToken } = getAccessTokenAndRefreshToken(headerList);
    const cookieStore = cookies();
    const cartId = cookieStore.get('cart_uuid')?.value;




    const cartData = await fetchCartData(cartId, accessToken);

    const cartItems = cartData?.items || [];
    const totalPrice = cartData?.total_price_cart || 0;
    const totalPriceFormatted = formatPrice(totalPrice);
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    if (!accessToken) {
    }
    let user = null;
    try {
        user = await fetchUserDataWithToken(accessToken, refreshToken);
    } catch (error) {
    }
    return <div>
        <DesktopHeader user={user}/>
        <MobileHeader user={user} cartItems={cartItems} totalPriceFormatted={totalPriceFormatted} totalQuantity={totalQuantity} accessToken={accessToken} cartId={cartId}/>
        <BottomNav user={user}/>
    </div>
}
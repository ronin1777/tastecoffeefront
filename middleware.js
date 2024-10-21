import { NextResponse } from 'next/server';
import { verifyToken } from "@/app/utils/utils";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

export async function middleware(request) {
    const response = NextResponse.next();
    const accessToken = request.cookies.get('access_token')?.value;
    const refreshToken = request.cookies.get('refresh_token')?.value;

    // بررسی اینکه آیا مسیر درخواست شده با /account یا /order شروع می‌شود و نیاز به احراز هویت دارد
    if (request.nextUrl.pathname.startsWith('/account') || request.nextUrl.pathname.startsWith('/order')) {
        if (accessToken) {
            const { valid, error } = await verifyToken(accessToken);

            if (!valid) {
                console.warn('Access token is invalid. Trying to refresh...');

                if (refreshToken) {
                    try {
                        const newToken = await refreshAccessToken(refreshToken);

                        if (newToken) {
                            response.cookies.set('access_token', newToken, { httpOnly: true, path: '/', maxAge: 60 * 60 });
                            return response;
                        }
                    } catch (err) {
                        console.error('Error refreshing access token:', err);
                    }
                }
            } else {
                return response; // اگر توکن معتبر است، اجازه دسترسی به مسیرهای محافظت شده را بده
            }
        }

        // اگر توکن معتبر نیست یا وجود ندارد، کاربر را به صفحه ورود هدایت کن
        console.warn('No valid access token or refresh token found. Redirecting to login.');
        return NextResponse.redirect(new URL('/', request.url));
    }

    // برای مسیرهایی که نیاز به احراز هویت ندارند، اجازه ادامه درخواست به صورت نرمال
    return response;
}

export const config = {
    matcher: ['/account/:path*', '/order/:path*', '/((?!_next/static|favicon.ico).*)'], // محافظت از تمام مسیرهای /account و /order
};

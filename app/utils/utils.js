
import {jwtDecode} from "jwt-decode";

export function formatPrice(price) {
    const priceInTomans = Math.floor(Number(price));
    return new Intl.NumberFormat('fa-IR').format(priceInTomans) + ' تومان';
}

export function formatWeight(weight) {
    if (weight === '1000g') {
        return 'یک کیلو';
    } else if (weight === '500g') {
        return 'نیم کیلو';
    } else {
        return `250گرم`;
    }
}

export default function formatCommentDate(dateString) {
    const commentDate = new Date(dateString);
    const now = new Date();


    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());


    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);


    const commentDay = new Date(commentDate.getFullYear(), commentDate.getMonth(), commentDate.getDate());


    if (commentDay.getTime() === today.getTime()) {
        return "امروز";
    }


    if (commentDay.getTime() === yesterday.getTime()) {
        return "دیروز";
    }


    const formattedDate = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Tehran'
    }).format(commentDate);

    return formattedDate;
}

export const verifyToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        const expirationBuffer = 60;

        if (decoded.exp - expirationBuffer < currentTime) {
            return { valid: false, error: 'Access token will expire soon' };
        }

        return { valid: true, decoded };
    } catch (error) {
        return { valid: false, error: 'Invalid access token' };
    }
};
        //  const expirationTimeInMillis = decoded.exp * 1000;
        //   const expirationDate = new Date(expirationTimeInMillis);
        // console.log('Token expiration date:', expirationDate.toLocaleString());


export function convertToJalali(dateString) {
    const date = new Date(dateString);

    // بررسی اینکه آیا تاریخ معتبر است
    if (isNaN(date.getTime())) {
        console.error('Invalid date format:', dateString);
        return 'Invalid date';
    }

    // استفاده از Intl.DateTimeFormat برای تبدیل تاریخ به شمسی
    const formattedDate = new Intl.DateTimeFormat('fa-IR', {
        calendar: 'persian',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(date);

    return formattedDate;
}

export function getStatusInPersian(status) {
    const statusTranslations = {
        pending: 'در انتظار',
        processing: 'در حال پردازش',
        shipped: 'پرداخت شده',
        delivered: 'تحویل داده شده',
        canceled: 'لغو شده',
    };

    return statusTranslations[status] || 'نامشخص';
}

export function getStatusPaymentInPersian(status) {
    const statusTranslations = {
        pending: 'در انتظار',
        processing: 'در حال پردازش',
        shipped: 'ارسال شده',
        delivered: 'تحویل داده شده',
        canceled: 'لغو شده',
    };

    return statusTranslations[status] || 'نامشخص';
}
export function convertCoffeeType(type){
    const types ={
        bean: 'دانه',
        ground: 'پودر'
    }
    return types[type]
}
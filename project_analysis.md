# تحلیل پروژه تیست کافی (TasteCoffee)

## نمای کلی پروژه

**تیست کافی** یک فروشگاه آنلاین قهوه تخصصی است که با استفاده از تکنولوژی‌های مدرن وب توسعه یافته است. این پروژه شامل فرانت‌اند Next.js و اتصال به بک‌اند Django می‌باشد.

## مشخصات فنی

### تکنولوژی‌های اصلی:
- **Framework**: Next.js 14.2.9 (React 18.3.1)
- **زبان**: JavaScript
- **CSS Framework**: Tailwind CSS
- **UI Components**: Material-UI (MUI)
- **State Management**: React Hook Form
- **Authentication**: NextAuth.js
- **Database**: Firebase
- **Deployment**: Liara Platform

### ویژگی‌های کلیدی:
- 🛒 سیستم سبد خرید کامل
- 🔐 احراز هویت با OTP
- 📱 طراحی ریسپانسیو
- 🌙 حالت تاریک/روشن
- 🔍 جستجوی محصولات
- 📦 مدیریت سفارشات
- 💳 سیستم پرداخت
- 📝 مدیریت پروفایل کاربری

## ساختار پروژه

### 1. دایرکتوری `app/` (Next.js App Router)
```
app/
├── (public)/          # صفحات عمومی
├── _components/       # کامپوننت‌های قابل استفاده مجدد
├── account/          # صفحات حساب کاربری
├── api/              # API Routes
├── cart/             # صفحه سبد خرید
├── fonts/            # فونت‌های محلی
├── payment/          # صفحات پرداخت
└── utils/            # ابزارهای کمکی
```

### 2. دایرکتوری `services/` (خدمات بک‌اند)
```
services/
├── cart.js           # مدیریت سبد خرید
├── product/          # خدمات محصولات
├── user/             # خدمات کاربری
└── config.js         # تنظیمات API
```

## کامپوننت‌های اصلی

### 1. صفحه اصلی (Homepage)
- **HomeBanner**: اسلایدر تصاویر اصلی
- **HomeProductS**: نمایش محصولات
- **CategoryBanner**: بنر دسته‌بندی‌ها
- **HomeAbout**: درباره فروشگاه
- **HomeCategoryP**: دسته‌بندی محصولات
- **HomePopularP**: محصولات محبوب
- **HomeBlog**: بخش وبلاگ

### 2. کامپوننت‌های محصول
- **ShopItem**: نمایش کارت محصول
- **ProductSwiper**: اسلایدر محصولات
- **ProductSpecifications**: مشخصات محصول

### 3. احراز هویت
- سیستم OTP برای ورود
- مدیریت توکن‌های دسترسی و refresh
- محافظت از مسیرهای خصوصی

## ویژگی‌های خاص

### 1. چندزبانه بودن
- پشتیبانی از زبان فارسی (RTL)
- فونت‌های فارسی: Vazir و Vazir Bold
- متادیتای فارسی برای SEO

### 2. تجربه کاربری
- انیمیشن‌ها با Framer Motion
- اسلایدرها با Swiper.js
- اسپینرهای بارگذاری
- نوتیفیکیشن‌ها با React Toastify

### 3. عملکرد
- بهینه‌سازی تصاویر Next.js
- کش کردن درخواست‌ها
- Lazy Loading
- Static Site Generation

## سیستم احراز هویت

### جریان کار:
1. کاربر شماره تلفن خود را وارد می‌کند
2. کد OTP ارسال می‌شود
3. پس از تایید، توکن‌های access و refresh دریافت می‌شود
4. Middleware محافظت از مسیرهای خصوصی را فراهم می‌کند

### مسیرهای محافظت شده:
- `/account/*` - صفحات حساب کاربری
- `/order/*` - صفحات سفارشات

## سیستم سبد خرید

### ویژگی‌ها:
- افزودن/حذف محصولات
- تغییر تعداد محصولات
- محاسبه قیمت کل
- ذخیره سبد خرید در سرور
- انتقال سبد خرید به کاربر پس از ورود

## تنظیمات Deployment

### Liara Platform:
```json
{
  "port": 3000
}
```

### Docker:
- Multi-stage build
- Node.js 20
- Production optimization

### Next.js Config:
- تنظیمات تصاویر برای دامنه‌های مختلف
- متغیرهای محیطی
- بهینه‌سازی برای production

## API Integration

### Base URL:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### Endpoints اصلی:
- `/api/product/products/` - دریافت محصولات
- `/api/user/send-otp/` - ارسال کد OTP
- `/api/user/verify-otp/` - تایید کد OTP
- `/api/orders/cart/` - مدیریت سبد خرید

## Dependencies اصلی

### UI & Styling:
- `@mui/material` - کامپوننت‌های Material-UI
- `tailwindcss` - CSS Framework
- `framer-motion` - انیمیشن‌ها
- `react-icons` - آیکون‌ها

### Functionality:
- `firebase` - پایگاه داده
- `next-auth` - احراز هویت
- `react-hook-form` - مدیریت فرم‌ها
- `js-cookie` - مدیریت کوکی‌ها
- `jwt-decode` - رمزگشایی JWT

### Development:
- `eslint` - کیفیت کد
- `postcss` - پردازش CSS
- `next-sitemap` - تولید sitemap

## نکات امنیتی

1. **Token Management**: استفاده از HTTP-only cookies
2. **CSRF Protection**: محافظت در برابر حملات CSRF
3. **Input Validation**: اعتبارسنجی ورودی‌ها
4. **Secure Headers**: تنظیم هدرهای امنیتی

## بهینه‌سازی‌ها

1. **Image Optimization**: استفاده از Next.js Image
2. **Code Splitting**: تقسیم کد به بخش‌های کوچک
3. **Caching**: کش کردن درخواست‌ها
4. **Bundle Size**: بهینه‌سازی اندازه bundle

## خلاصه

پروژه تیست کافی یک فروشگاه آنلاین مدرن و کامل است که با استفاده از بهترین practices توسعه یافته است. این پروژه شامل تمام ویژگی‌های لازم برای یک فروشگاه آنلاین موفق می‌باشد و با طراحی responsive و تجربه کاربری مناسب، قابلیت استفاده در انواع دستگاه‌ها را فراهم می‌کند.
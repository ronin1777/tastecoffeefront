// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "localhost",
//       "127.0.0.1",
//       "tastecoffee.liara.run",
//       "tastecoffee.darkube.app",
//       "storage.iran.liara.space",
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // یا 'https' بسته به تنظیمات سرور شما
        hostname: "localhost",
        port: "8000", // پورت سرور Django
        pathname: "**",
      },
      {
        protocol: "http", // یا 'https' بسته به تنظیمات سرور شما
        hostname: "127.0.0.1",
        port: "8000", // پورت سرور Django
        pathname: "**",
      },
      {
        protocol: "https", // یا 'http' بسته به اینکه Django بر روی SSL است یا نه
        hostname: "tastecoffee.liara.run", // دامنه Django خود را وارد کنید
        pathname: "**", // برای دسترسی به تمام مسیرها
      },
      {
        protocol: "https", // یا 'http' بسته به اینکه Django بر روی SSL است یا نه
        hostname: "storage.iran.liara.space", // دامنه Django خود را وارد کنید
        pathname: "**", // برای دسترسی به تمام مسیرها
      },
      {
        protocol: "https", // یا 'http' بسته به اینکه Django بر روی SSL است یا نه
        hostname: "tastecoffee.darkube.app", // دامنه Django خود را وارد کنید
        pathname: "**", // برای دسترسی به تمام مسیرها
      },
    ],
  },
};

export default nextConfig;

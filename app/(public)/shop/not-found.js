"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-black bg-gray-100 text-center p-4">
      <h1 className="text-9xl font-bold text-gray-400">۴۰۴</h1>
      <h2 className="text-3xl font-semibold text-gray-700">
        متاسفیم! صفحه یافت نشد
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        صفحه‌ای که به دنبال آن هستید، وجود ندارد.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition"
      >
        برو به صفحه اصلی
      </Link>
    </div>
  );
}

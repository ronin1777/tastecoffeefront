'use client';

import { useRouter } from 'next/navigation';

export default function Pagination({ next, previous }) {
  const router = useRouter();

  const handlePageChange = (url) => {
    const pageParam = new URL(url).searchParams.get('page');
    router.push(`/shop?page=${pageParam}`);
  };

  return (
    <div className="flex justify-between mt-4">
      {previous && (
        <button onClick={() => handlePageChange(previous)} className="bg-gray-300 py-2 px-4 rounded">
          صفحه قبلی
        </button>
      )}
      {next && (
        <button onClick={() => handlePageChange(next)} className="bg-gray-300 py-2 px-4 rounded">
          صفحه بعدی
        </button>
      )}
    </div>
  );
}

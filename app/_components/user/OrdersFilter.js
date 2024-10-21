"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineFilter } from 'react-icons/hi';

const OrderFilters = ({ searchParams }) => {
    const router = useRouter();

    const [status, setStatus] = useState(searchParams?.status || ''); // وضعیت پیش‌فرض از searchParams

    useEffect(() => {
        const newSearchParams = new URLSearchParams();
        if (status) {
            newSearchParams.set('status', status);
        }

        router.push(`?${newSearchParams.toString()}`, { scroll: false });
    }, [status]);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const resetFilters = () => {
        setStatus('');
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-zinc-700 dark:text-white flex items-center">
                <HiOutlineFilter className="mr-2 " /> فیلترها
            </h2>
            <div className="flex gap-12 mb-4">
                <button
                    onClick={() => handleStatusChange('pending')}
                    className={`py-2 px-4 rounded ${status === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition`}
                >
                    در انتظار
                </button>
                <button
                    onClick={() => handleStatusChange('shipped')}
                    className={`py-2 px-4 rounded ${status === 'shipped' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition`}
                >
                    پرداخت شده
                </button>
                <button
                    onClick={() => handleStatusChange('canceled')}
                    className={`py-2 px-4 rounded ${status === 'canceled' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition`}
                >
                    لغو شده
                </button>
            </div>
            <button
                type="button"
                onClick={resetFilters}
                className="mt-4 bg-orange-400 hover:bg-orange-600 text-white rounded p-2 transition-all"
            >
                ریست فیلترها
            </button>
        </div>
    );
};

export default OrderFilters;

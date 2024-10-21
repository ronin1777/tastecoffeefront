'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {HiOutlineFilter} from "react-icons/hi";

const ProductFilters = ({ searchParams }) => {
    const router = useRouter();

    const [filters, setFilters] = useState({
        coffee_type: searchParams?.coffee_type || '',
        weight: searchParams?.weight || '',
        min_price: searchParams?.min_price || '',
        max_price: searchParams?.max_price || '',
        name: searchParams?.name || '',
        available: searchParams?.available || ''
    });


    useEffect(() => {
        const newSearchParams = new URLSearchParams();


        for (const key in filters) {
            if (filters[key]) {
                newSearchParams.set(key, filters[key]);
            }
        }


        router.push(`/shop?${newSearchParams.toString()}`, { scroll: false });
    }, [filters]);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

        const resetFilters = () => {
        setFilters({
            coffee_type: '',
            weight: '',
            min_price: '',
            max_price: '',
            name: '',
            available: ''
        });
    };


return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <HiOutlineFilter className="mr-2" /> فیلترها
            </h2>
            <form className="grid grid-cols-1 gap-4">
                {/* فیلتر نوع قهوه */}
                <div className="flex flex-col">
                    <label htmlFor="coffee_type" className="font-semibold">نوع قهوه:</label>
                    <select
                        id="coffee_type"
                        name="coffee_type"
                        onChange={handleFilterChange}
                        value={filters.coffee_type}
                        className="border rounded p-2"
                    >
                        <option value="">همه</option>
                        <option value="bean">دانه قهوه</option>
                        <option value="ground">پودر قهوه</option>
                    </select>
                </div>

                {/* فیلتر وزن */}
                <div className="flex flex-col">
                    <label htmlFor="weight" className="font-semibold">وزن:</label>
                    <select
                        id="weight"
                        name="weight"
                        onChange={handleFilterChange}
                        value={filters.weight}
                        className="border rounded p-2"
                    >
                        <option value="">همه</option>
                        <option value="250g">۲۵۰ گرم</option>
                        <option value="500g">۵۰۰ گرم</option>
                        <option value="1000g">۱ کیلو گرم </option>
                    </select>
                </div>

                {/* فیلتر قیمت */}
                <div className="flex flex-col">
                    <label htmlFor="min_price" className="font-semibold">حداقل قیمت:</label>
                    <input
                        type="number"
                        id="min_price"
                        name="min_price"
                        onChange={handleFilterChange}
                        value={filters.min_price}
                        className="border rounded p-2"
                        placeholder="حداقل قیمت"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="max_price" className="font-semibold">حداکثر قیمت:</label>
                    <input
                        type="number"
                        id="max_price"
                        name="max_price"
                        onChange={handleFilterChange}
                        value={filters.max_price}
                        className="border rounded p-2"
                        placeholder="حداکثر قیمت"
                    />
                </div>

                {/* فیلتر نام */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-semibold">نام محصول:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleFilterChange}
                        value={filters.name}
                        className="border rounded p-2"
                        placeholder="نام محصول"
                    />
                </div>

                {/* فیلتر موجودی */}
                <div className="flex flex-col">
                    <label htmlFor="available" className="font-semibold">موجودی:</label>
                    <select
                        name="available"
                        onChange={handleFilterChange}
                        value={filters.available}
                        className="border rounded p-2"
                    >
                        <option value="false">همه محصولات</option>
                        <option value="true">فقط محصولات موجود</option>
                    </select>
                </div>
                {/* دکمه ریست */}
                <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-4 bg-orange-400 hover:bg-orange-600 text-white rounded p-2 transition-all"
                >
                    ریست فیلترها
                </button>
            </form>
        </div>
    );
};

export default ProductFilters;



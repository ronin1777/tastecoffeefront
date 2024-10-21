// components/SearchInput.js
'use client';

import { useEffect, useState } from 'react';

export default function SearchInput({ currentQuery, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(currentQuery);


  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };


  useEffect(() => {
    setSearchTerm(currentQuery);
  }, [currentQuery]);

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // به‌روزرسانی ورودی
        placeholder="جستجوی محصولات"
        className="border p-2"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
        جستجو
      </button>
    </form>
  );
}

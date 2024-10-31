"use client";

import apiUrl from "@/services/config";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductList from "./SearchProductList";
import Pagination from "@mui/material/Pagination"; // Import Pagination
import { PaginationItem } from "@mui/material";

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async (query, pageNumber = 1) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/product/products?name=${query}&page=${pageNumber}`
      );
      const data = await response.json();
      console.log("Data fetched:", data);
      setProducts(data.results);
      setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 items per page
      setPage(pageNumber);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      fetchProducts(value);
    } else {
      setProducts([]); // Clear results if input is empty
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    fetchProducts(searchTerm, value); // Fetch products for the selected page
  };

  return (
    <div className="relative my-7 text-zinc-700 dark:text-white w-full max-w-md mx-auto">
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
        <FaSearch className="text-gray-400 ml-3" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="جستجوی محصول..."
          className="w-full h-3 p-3 pl-10 border-none focus:outline-none"
        />
      </div>
      {products.length > 0 && (
        <>
          <ProductList products={products} />

          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            className="mt-4 z-50 flex justify-center" // Center the pagination
            renderItem={(item) => (
              <PaginationItem
                {...item}
                className={`mx-1 ${
                  item.selected
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`} // Selected and hover styles
              />
            )}
          />
        </>
      )}
    </div>
  );
};

export default SearchProducts;

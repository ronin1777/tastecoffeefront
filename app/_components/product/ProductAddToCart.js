'use client';

import { useState } from 'react';
import cookie from 'cookie';
import { useRouter } from 'next/navigation';

const AddToCart = ({ productId, available}) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter(); // Using useRouter to access the router object

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change)); // Ensure quantity does not go below 1
  };

  const handleAddToCart = async () => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage(''); // Reset the success message before adding the product

    // Get cart UUID from cookies
    const cookies = cookie.parse(document.cookie);
    const cartUuid = cookies.cart_uuid;
    const accessToken = cookies.access_token;

    try {
      const response = await fetch('http://127.0.0.1:8000/api/orders/add-to-cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify({
          product_id: productId,
          quantity,
          cart_uuid: cartUuid,
        }),
      });

      if (!response.ok) {
        throw new Error('خطایی در ارتباط با سرور وجود دارد.');
      }

      const data = await response.json();
      console.log(JSON.stringify(data, null, 2));

      // If a new cart was created, store its ID in the cookies
      if (!cartUuid && !accessToken) {
        document.cookie = `cart_uuid=${data.id}; path=/; max-age=${60 * 60 * 24 * 7}`; // Store cart ID for 7 days
      }

      // Set a success message
      setSuccessMessage('Product added to cart successfully!');
       location.reload()
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {available ? (      <div className="add-to-cart p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        {successMessage && ( // نمایش پیام موفقیت
          <div className="mb-4 p-2 bg-green-100 text-green-800 border border-green-400 rounded-md shadow-md">
            {successMessage}
          </div>
        )}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded"
            disabled={loading}
          >
            -
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded"
            disabled={loading}>
            +
          </button>
        </div>
        <button onClick={handleAddToCart} className={`bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}>
          {loading ? 'در حال اضافه کردن...' : 'افزودن به سبد خرید'}
        </button>
      </div>
): (<p className='add-to-cart text-red-400 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'>این محصول موجود نمیباشد</p>)}
    </div>
  );
};

export default AddToCart;
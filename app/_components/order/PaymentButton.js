'use client';

import { useState } from 'react';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

const PaymentButton = ({ orderId, disabled, accessToken}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handlePayment = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/payment/payment/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ order_id: orderId }),
            });

            const data = await response.json();
            const payment_url = data?.payment_url;

            if (response.ok) {
                router.push(payment_url);
            } else {
                throw new Error(data.error || 'خطا در درخواست پرداخت');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <button
                onClick={handlePayment}
                disabled={loading || disabled}
                className={`p-3 bg-blue-600 text-white rounded-md transition duration-200 hover:bg-blue-700 ${loading ? 'disabled:bg-gray-300' : ''}`}
            >
                {loading ? 'در حال پردازش...' : 'پرداخت'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default PaymentButton;

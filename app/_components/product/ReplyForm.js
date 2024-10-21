'use client'

import React, { useState } from 'react';

const ReplyCommentForm = ({ commentId, productId, accessToken, onClose }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://127.0.0.1:8000/api/comment/reply/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ content, reply: commentId }), // ارسال محتوای نظر و ID کامنت والد
        });

        if (response.ok) {
            // اگر موفق بود، فرم را ببندید و کاربر را به روز رسانی کنید
            onClose();
            // می‌توانید به روز رسانی در کامنت‌ها را هم در اینجا انجام دهید
        } else {
            // مدیریت خطا
            console.error('Failed to post reply');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <textarea
                className="w-full p-2 border rounded"
                placeholder="پاسخ شما..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit" className="mt-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                ارسال پاسخ
            </button>
            <button type="button" className="mt-2 ml-2 text-gray-600" onClick={onClose}>
                لغو
            </button>
        </form>
    );
};

export default ReplyCommentForm;

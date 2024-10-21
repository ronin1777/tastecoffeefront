"use client";

import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { fetchUserData } from "@/services/user/userProfile";
import formatCommentDate from "@/app/utils/utils";
import ReplyCommentForm from "@/app/_components/product/ReplyForm";
import { useInView } from "react-intersection-observer";
import AddCommentForm from "@/app/_components/product/AddCommentForm";
import apiUrl from "@/services/config";

export default function ProductComments({ productId }) {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [showReplyForm, setShowReplyForm] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // To track if there are more comments to load
  const accessToken = Cookies.get("access_token");

  const { ref, inView } = useInView(); // Intersection observer

  // Load user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchUserData(accessToken);
        setUser(userData);
      } catch (err) {
        console.error("Error fetching user data:", err.message);
      }
    };

    fetchUser();
  }, [accessToken]);

  // Load comments
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(
        `${apiUrl}/api/comment/${productId}/?page=${page}`
      );
      if (!res.ok) {
        console.error("Error fetching comments");
        return;
      }
      const pComments = await res.json();
      setComments((prevComments) => [...prevComments, ...pComments.results]);
      setHasMore(pComments.next !== null); // Check if there are more pages
    };

    fetchComments();
  }, [productId, page]);

  // Trigger fetching more comments when the observer is in view
  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);

  return (
    <div className="comments-section mt-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        نظرات
      </h2>
      {/* Show comment form */}
      {user ? (
        <AddCommentForm productId={productId} accessToken={accessToken} />
      ) : (
        <p className="mt-4 text-gray-600 flex items-center">
          برای ثبت نظر لطفاً وارد شوید.
        </p>
      )}
      {comments.length === 0 ? (
        <p>اولین نفری باشید که برای این محصول نظر میگذارد.</p>
      ) : (
        comments.map((comment, index) => (
          <div
            key={`${comment.id}-${index}`}
            className="comment-item border border-gray-300 p-4 rounded-lg shadow-lg bg-white dark:bg-zinc-800"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-sm">
                {formatCommentDate(comment.created_at)}
              </span>
              <span className="font-semibold text-lg text-orange-300 dark:text-orange-400">
                {comment.user}
              </span>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-3">
              {comment.content}
            </p>

            {/* Reply button */}
            <button
              className="mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => setShowReplyForm(comment.id)} // Show reply form
            >
              پاسخ
            </button>

            {/* Show reply form */}
            {showReplyForm === comment.id && (
              <ReplyCommentForm
                commentId={comment.id}
                productId={productId}
                accessToken={accessToken}
                onClose={() => setShowReplyForm(null)} // Close form
              />
            )}

            {/* Show replies */}
            {comment.replies.length > 0 && (
              <div className="replies-section mt-4 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                {comment.replies.map((reply, index) => (
                  <div
                    key={`${reply.id}-${index}`}
                    className="reply-item border border-gray-200 p-3 rounded-md mt-2 bg-gray-100 dark:bg-zinc-700 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-500 text-sm">
                        {formatCommentDate(reply.created_at)}
                      </span>
                      <span className="font-semibold text-sm text-orange-400">
                        {reply.user}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {reply.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
      {/* Sentinel for infinite scroll */}
      {hasMore && (
        <div ref={ref} className="loading-sentinel">
          Loading more comments...
        </div>
      )}
    </div>
  );
}

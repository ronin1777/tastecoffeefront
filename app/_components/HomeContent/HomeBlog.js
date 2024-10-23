"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import formatCommentDate from "@/app/utils/utils";
import apiUrl from "@/services/config";

export default function HomeBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AOS.init();

    // Fetch the latest blog posts
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/blog/blog/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          // Only take the three most recent blog posts
          setBlogs(data.results.slice(0, 3));
        } else {
          console.error("Error fetching blog data1:", error);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="overflow-hidden">
      <section
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-out-back"
        className="blogs mb-12 md:mb-28"
      >
        <div className="container">
          <div className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
            <div>
              <h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl">
                مطالب خواندنی
              </h2>
              <p className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5"></p>
            </div>
            <Link
              href="/blog"
              className="flex justify-center items-center md:gap-x-0.5 pr-3 pl-1 h-11 rounded-lg transition-colors text-orange-400 dark:text-orange-300 hover:dark:bg-orange-300/20 hover:bg-orange-300/35 text-sm xs:text-lg ipad:text-xl tracking-tightest"
            >
              مشاهده همه
              <svg
                className="w-4 h-4 xs:w-5 xs:h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="blogs-container grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl"
                >
                  <Link
                    href={`/blog/${blog.id}`}
                    className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10]"
                  >
                    {blog.images && blog.images.length > 0 ? (
                      <Image
                        src={blog.images[0].image}
                        width="270"
                        height="150"
                        alt={blog.title}
                        className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity"
                      />
                    ) : (
                      <div className="bg-gray-300 h-40 w-full rounded-lg"></div> // Placeholder if no image exists
                    )}
                  </Link>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
                    <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                      <Link
                        href={`/blog/${blog.id}`}
                        className="text-zinc-700 hover:dark:text-orange-300 dark:text-white hover:text-orange-400 transition-all"
                      >
                        {blog.title}
                      </Link>
                    </h4>
                    <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                      <p className="text-sm sm:text-xl">
                        {formatCommentDate(blog.created_at)}
                      </p>
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <p>هیچ پستی وجود ندارد.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

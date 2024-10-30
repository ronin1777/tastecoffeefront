import React from "react";
import formatCommentDate from "@/app/utils/utils";
import Image from "next/image";
import apiUrl from "@/services/config";

export async function generateMetadata({ params, searchParams }, parent) {
  const { id } = params;

  // دریافت اطلاعات پست بلاگ با استفاده از API
  const res = await fetch(`${apiUrl}/api/blog/blog/${id}/`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const blogPost = await res.json();

  // ترکیب تصاویر از والد با تصویر پست بلاگ
  const previousImages = (await parent).openGraph?.images || [];

  // استخراج محتوای اولین پاراگراف به عنوان توصیف
  const description =
    blogPost.paragraphs.length > 0
      ? blogPost.paragraphs[0].content
      : "محتوایی برای نمایش وجود ندارد.";

  return {
    title: blogPost.title,
    description: description,
    openGraph: {
      title: blogPost.title,
      description: description,
      images: [blogPost.images[0]?.image, ...previousImages],
    },
    metadataBase: new URL(`${apiUrl}`),
  };
}

const BlogPostDetail = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`${apiUrl}/api/blog/blog/${id}/`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const blogPost = await res.json();
  console.log(`blog image: ${blogPost.images[0].image}`);
  return (
    <div className="container my-40 mx-auto p-6">
      <h1 className="text-3xl font-bold text-zinc-700 dark:text-white text-center mb-4">
        {blogPost.title}
      </h1>
      <p className="text-gray-300 text-center mb-6">
        {formatCommentDate(blogPost.created_at)}
      </p>

      <div className="mb-6">
        {blogPost.images.length > 0 && (
          <Image
            src={blogPost.images[0].image} // دسترسی به مسیر تصویر
            width="200"
            height="200"
            alt={blogPost.title}
            quality={100}
            className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity"
          />
        )}
      </div>

      <div className="space-y-4">
        {/* استفاده از dangerouslySetInnerHTML برای نمایش محتوای HTML */}
        <div
          className="text-lg text-zinc-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{
            __html: blogPost.paragraphs.map((p) => p.content).join(""),
          }}
        />
      </div>
    </div>
  );
};

export default BlogPostDetail;

import Link from "next/link";
import Image from "next/image";
import formatCommentDate from "@/app/utils/utils";
import apiUrl from "@/services/config";

export const metadata = {
  title: {
    template: "%s | تیست کافی",
    default: "بلاگ",
  },
  description:
    "بلاگ تیست کافی، جایی برای کشف اطلاعات و اخبار مرتبط با قهوه و دنیای آن.",
  openGraph: {
    title: "بلاگ | تیست کافی",
    description:
      "آخرین مقالات و اخبار مربوط به قهوه را در بلاگ تیست کافی بخوانید.",
    images: ["/images/coffee/blog_cover.jpg"], // مسیر تصویر مخصوص صفحه بلاگ
  },
  // metadataBase: new URL(apiUrl || "http://localhost"),
};

export default async function BlogPage() {
  const res = await fetch(`${apiUrl}/api/blog/blog/`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(
      `Failed to fetch data: ${res.status} ${res.statusText} - ${errorDetails}`
    );
  }

  const data = await res.json();

  return (
    <>
      <section className="blog-header mt-16 md:mt-0 h-60 xs:h-80 md:h-screen bg-blog-header bg-no-repeat bg-cover bg-[right_top]">
        <div className="container flex items-center h-full"></div>
      </section>
      <section className="blog my-12 md:my-20">
        <div className="container">
          <h1 className="text-center text-3xl xs:text-4xl font-morabba-medium text-zinc-900 dark:text-white">
            مقاله ها
          </h1>
          <div className="w-full h-0.5 my-9 bg-gray-200 dark:bg-white/20 rounded-full"></div>
        </div>
        <section className="blogs mb-12 md:mb-28">
          <div className="container">
            <div className="blogs-container grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.results.length > 0 ? (
                data.results.map((blog) => (
                  <div
                    key={blog.id}
                    className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl"
                  >
                    <Link
                      href={`blog/${blog.id}`}
                      className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10]"
                    >
                      {blog.images && blog.images.length > 0 ? ( // بررسی وجود و طول تصاویر
                        <Image
                          src={blog.images[0].image} // دسترسی به مسیر تصویر
                          width="200"
                          height="200"
                          placeholder="blur"
                          blurDataURL="/images/coffee/1.webp"
                          alt={blog.title}
                          quality={100}
                          className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity"
                        />
                      ) : (
                        <div className="bg-gray-300 h-40 w-full rounded-lg"></div> // نمایش جایگزین در صورت عدم وجود تصویر
                      )}
                    </Link>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full">
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
                <p className="text-red-500">هیچ پستی وجود ندارد.</p>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

import apiUrl from "@/services/config";
import Image from "next/image";

export const metadata = {
  title: {
    template: "%s | تیست کافی",
    default: "تماس با ما",
  },
  description:
    "برای هرگونه سوال یا نیاز به پشتیبانی، از طریق فرم تماس با ما ارتباط برقرار کنید.",
  openGraph: {
    title: "تماس با ما | تیست کافی",
    description: "با ما تماس بگیرید تا به سوالات و نیازهای شما پاسخ دهیم.",
    images: ["/images/coffee/contact_us.jpg"], // مسیر تصویر مخصوص صفحه تماس با ما
  },
  // metadataBase: new URL(apiUrl || "http://localhost"),
};

export default function ContactPage() {
  return (
    <section className="contact-us">
      <div className="container flex flex-col items-center mt-28 md:mt-48 mb-20">
        <div className="space-y-10">
          <div>
            <Image
              loading="lazy"
              src="/images/contact_us.jpg"
              width={500}
              height={500}
              alt="Contact Us Image"
              className="mx-auto rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 child:rounded-xl child:break-words child:p-4 child:overflow-hidden text-center text-zinc-700 dark:text-white gap-4 md:grid-cols-3 md:gap-6">
            <div className="shadow-xl dark:shadow-lg dark:shadow-blue-600">
              <p className="font-bold">نشانی دفتر مرکزی:</p>
              <p>مشهد</p>
              <p>بلوار طرق</p>
            </div>
            <div className="shadow-xl dark:shadow-lg dark:shadow-blue-600">
              <p className="font-bold">شماره تماس:</p>
              <p>09152578945</p>
              <p>شماره واتس اپ:</p>
              <p>09152344566</p>
            </div>
            <div className="shadow-xl dark:shadow-lg dark:shadow-blue-600">
              <p className="font-bold">نشانی کارخانه:</p>
              <p>مشهد</p>
              <p>شهرک صنعتی طرق قزقوز اباد</p>
            </div>
          </div>

          <div>
            <h3 className="text-black dark:text-white text-center text-2xl xs:text-3xl font-dana-bold tracking-tighter">
              تماس با ما
            </h3>
            <p className="text-base xs:text-lg sm:text-xl mt-4 font-dana-medium text-zinc-500 dark:text-gray-400 text-center">
              برای مشکلات فنی یا همکاری یا ... میتوانید از طریق فرم زیر با ما در
              ارتباط باشید.
            </p>
          </div>
          <div>
            <form className="space-y-3">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-black dark:text-white text-sm xs:text-base"
                >
                  {" "}
                  نام{" "}
                </label>
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm xs:text-base border undefined"
                  name="fullName"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="user-tel"
                  className="text-black dark:text-white text-sm xs:text-base"
                >
                  {" "}
                  شماره تماس{" "}
                </label>
                <input
                  type="tel"
                  placeholder="091500000000"
                  id="user-tel"
                  className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm xs:text-base text-right border undefined"
                  name="telPhone"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="user-email"
                  className="text-black dark:text-white text-sm xs:text-base"
                >
                  {" "}
                  ایمیل{" "}
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  id="user-email"
                  className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm xs:text-base border undefined"
                  name="email"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="user-message"
                  className="text-black dark:text-white text-sm xs:text-base"
                >
                  {" "}
                  متن پیام{" "}
                </label>
                <textarea
                  rows="5"
                  placeholder="پیام خود را بنویسید..."
                  id="user-message"
                  className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm xs:text-base resize-none border undefined"
                  name="content"
                ></textarea>
              </div>
              <button className="bg-orange-400 w-full p-1.5 xs:p-2 text-white text-lg xs:text-xl text-center rounded-md hover:bg-green-500 transition-colors">
                ثبت
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

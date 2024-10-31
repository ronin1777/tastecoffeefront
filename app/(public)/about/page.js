import Image from "next/image";
import apiUrl from "@/services/config";
export const metadata = {
  title: {
    template: "%s | تیست کافی",
    default: "در باره ما",
  },
  description:
    "در تیست کافی، ما به ارائه بهترین قهوه‌ها و تجربه خرید آنلاین می‌پردازیم. با ما آشنا شوید.",
  openGraph: {
    title: "درباره ما | تیست کافی",
    description: "آشنایی با تیم و فلسفه ما در تیست کافی.",
    images: ["/images/coffee/about_us.jpg"],
    // TODO
  },
  metadataBase: new URL(apiUrl || "http://localhost"),
};
export default function AboutPage() {
  return (
    <section className="about-us mt-28 md:mt-44 mb-16 md:mb-28">
      <div className="container gap-6 flex flex-col-reverse md:flex-row items-center md:items-start">
        {/* Text Section */}
        <div className="bg-white md:w-1/2 text-zinc-700 dark:bg-zinc-700 dark:text-white rounded-lg p-6 max-w-2xl md:mr-8">
          <h1 className="text-4xl pb-1 border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300">
            درباره ما
          </h1>
          <div className="mt-5">
            <p className="leading-relaxed">
              ما در شرکت رستری قهوه خود متعهد به ارائه بهترین قهوه‌های دست‌چین و
              باکیفیت هستیم. با بیش از یک سال تجربه حرفه‌ای در رست قهوه، به
              دنبال کشف و ارائه طعم‌های بی‌نظیری هستیم که عاشقان قهوه به دنبال
              آن هستند. ما با انتخاب دانه‌های مرغوب از مزارع معتبر و رست دقیق،
              هر فنجان قهوه را به یک تجربه منحصر به فرد تبدیل می‌کنیم. هدف ما
              این است که با استفاده از روش‌های رست بهینه و مدرن، عطر و طعم واقعی
              دانه‌ها را حفظ کنیم و کیفیت بالایی را در هر مرحله از فرآیند به
              مشتریان ارائه دهیم. برای ما، قهوه فقط یک نوشیدنی نیست؛ بلکه یک هنر
              است که با عشق و دقت در هر فنجان به نمایش گذاشته می‌شود.
              <br />
            </p>
            <br />
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
            <br />
            <br />
            <br />
            <h3 className="text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300">
              راه‌های ارتباطی
            </h3>
            <ul className="mt-7 list-disc ms-5">
              <li>مشهد شهرک صنعتی طرق پلاک ۲۴ درب زد</li>
              <li>Info@tasetcoffee.com</li>
              <li>051-22345678</li>
              <li>091512345678</li>
              <li>Tatst Coffee</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src="/images/comp1.jpg"
            alt="Company Image"
            width="600"
            height="400"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

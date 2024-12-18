import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="relative bg-zinc-700 py-8 md:pb-11 md:pt-20">
//       <div className="cursor-pointer absolute hidden md:flex justify-center items-center top-0 right-0 left-0 mx-auto border-2 border-orange-300 rounded-full -translate-y-1/2 w-7 h-7 rotate-90"></div>
//       <div className="footer-content sm:w-[97%] lg:w-[95%] mx-auto text-gray-300 px-4 md:px-0">
//         <div className="flex justify-between flex-wrap">
//           <div className="flex flex-col gap-y-4">
//             <div className="flex items-center gap-x-5"></div>
//             <p className="xl:max-w-[550px] text-base md:text-lg/10">
//               ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
//               خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
//               فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
//               منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
//               اشتیاق می‌کوشیم.
//             </p>
//           </div>
//           <div className="mt-10">
//             <h4 className="block font-dana-bold text-xl text-white mb-5">
//               {" "}
//               دسترسی سریع{" "}
//             </h4>
//             <div className="grid grid-cols-2 gap-y-4 gap-x-5 sm:gap-x-27 text-sm sm:text-base child:transition-all child-hover:text-orange-300">
//               <Link
//                 href="/contact-us"
//                 className="flex items-center gap-x-2 group"
//               >
//                 <span className="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 transition-all"></span>
//                 ارتباط با ما
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="flex items-center gap-x-2 group"
//               >
//                 <span className="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 transition-all"></span>
//                 در باره ما
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="flex items-center gap-x-2 group"
//               >
//                 <span className="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 transition-all"></span>
//                 قوانین و مقررات
//               </Link>
//             </div>
//           </div>
//           <div className="mt-10">
//             <h4 className="block font-dana-bold text-xl text-white mb-6">
//               {" "}
//               در تماس باشیم
//             </h4>
//             <div>
//               <div className="text-base mb-6 md:mb-10">
//                 <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
//                   بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
//                 </span>
//                 <div className="flex flex-wrap gap-y-4 gap-x-5 font-dana-medium">
//                   <a
//                     href="mailto:info@Coffee.com"
//                     className="flex items-center gap-x-2 md:gap-x-3 text-orange-300"
//                   >
//                     info@Coffee.com
//                   </a>
//                   <div className="flex  items-center gap-x-2 md:gap-x-3">
//                     <a
//                       className="hover:text-orange-300"
//                       href="tel:0902-123-6628"
//                     >
//                       0902-123-6628
//                     </a>
//                     <a className="hover:text-orange-300" href="tel:021-6789012">
//                       021-6789012
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-x-1.5 md:gap-x-6 font-dana-bold">
//                 <a
//                   href="#"
//                   className="flex justify-center items-center flex-grow gap-x-2 h-12 text-xs xs:text-sm border border-orange-200 text-orange-200 rounded-xl"
//                 >
//                   golden_coffee@
//                 </a>
//                 <a
//                   href="#"
//                   className="flex justify-center items-center flex-grow gap-x-2 h-12 text-xs xs:text-sm text-zinc-700 bg-gradient-to-r from-orange-300 to-orange-200 rounded-xl"
//                 >
//                   golden_coffee@
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-between items-center gap-4 font-dana-medium text-xs/5 md:text-sm mt-10 md:mt-11 pt-10 md:pt-11 border-t border-t-white/10">
//           <div className="flex items-center gap-x-2.5">
//             <div className="flex justify-center items-center flex-center flex-shrink-0 w-[30px] h-[30px] border border-white/10 rounded-full ">
//               <div className="flex justify-center items-center flex-center w-5 h-5 border border-white/20 rounded-full">
//                 <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-t from-orange-300 to-orange-200"></div>
//               </div>
//             </div>
//             <p>
//               تمام حقوق این رابط کاربری متعلق به سبزلرن میباشد و دانشجوی این
//               دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
//             </p>
//           </div>
//           <span className="ltr-text mr-auto">
//             .Copyright © 2023 Golden Coffee. All rights reserved
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// components/Footer.js

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-300 to-slate-500 dark:from-gray-900 dark:to-gray-800 text-zinc-700 dark:text-white py-10 backdrop-blur-lg bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo Section */}
          <div className="footer-logo">
            <Link href="/" className="text-3xl font-bold">
              تیست کافی
            </Link>
            <p className="mt-2 text-gray-400">
              به ما اعتماد کنید و تجربه‌ای متفاوت داشته باشید.
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold mb-4">لینک‌های مفید</h4>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <Link href="/about" className=" hover:text-white">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white">
                  ارتباط با ما
                </Link>
              </li>
              <li>
                <Link href="/rules" className=" hover:text-white">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <h4 className="text-lg font-semibold mb-4">دنبال کنید</h4>
            <div className="flex gap-x-4 space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </Link>
              <Link
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-2xl hover:text-blue-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="footer-bottom text-center mt-10 border-t border-gray-700 pt-4">
          <div className="contact-info mb-2">
            <p>آدرس: خیابان نمونه، ساختمان 123</p>
            <p>تلفن: +98 21 1234 5678</p>
          </div>
          <p>
            &copy; {new Date().getFullYear()} YourBrand. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

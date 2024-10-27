"use client";
import {
  HiOutlineCake,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineShoppingCart,
  HiOutlineTicket,
} from "react-icons/hi";
import { motion } from "framer-motion"; // اضافه کردن framer-motion
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function UserStats({ user }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // حالت اولیه: پنهان و پایین صفحه
    visible: { opacity: 1, y: 0 }, // حالت نمایان: بالاتر و شفاف
  };

  const containerVariants = {
    hidden: { opacity: 0 }, // حالت اولیه برای کل صفحه
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخیر بین کارت‌ها برای ورود
      },
    },
  };

  const StatCard = ({ title, value, color, icon }) => (
    <motion.div
      className={`p-4 rounded-lg flex items-center justify-between transition-transform duration-300 ${color}`}
      variants={cardVariants} // استفاده از متغیرهای انیمیشن برای کارت‌ها
      whileHover={{ scale: 1.05 }} // انیمیشن هنگام هاور
    >
      <div className="flex gap-x-2 items-center">
        <span className="text-white mr-2">{icon}</span>
        <span className="text-white font-medium">{title}</span>
      </div>
      <span className="text-white text-lg">{value}</span>
    </motion.div>
  );

  const birthDateInPersian = user?.birth_date
    ? new DateObject({ date: new Date(user.birth_date) })
        .convert(persian, persian_fa)
        .format()
    : "-";

  return (
    <motion.div
      className="bg-gray-100 dark:bg-zinc-700 p-6 rounded-lg shadow-md mb-6"
      variants={containerVariants} // انیمیشن برای کل کامپوننت
      initial="hidden" // حالت اولیه: پنهان
      animate="visible" // شروع انیمیشن: نمایش کارت‌ها
    >
      <h3 className="text-lg font-semibold dark:text-white">آمار من</h3>
      <motion.div className="grid grid-cols-1 gap-4 mt-4">
        <StatCard
          title="سفارش‌های من"
          value="0"
          color="bg-sky-500"
          icon={<HiOutlineShoppingCart className="w-6 h-6 mr-2" />}
        />
        {/* <StatCard
                    title="مجموع تیکت‌ها"
                    value="0"
                    color="bg-emerald-500"
                    icon={<HiOutlineTicket className="w-6 h-6 mr-2" />}
                /> */}
        <StatCard
          title="تاریخ تولد"
          value={birthDateInPersian}
          color="bg-orange-500"
          icon={<HiOutlineCake className="w-6 h-6 mr-2" />}
        />
        <StatCard
          title="محل سکونت"
          value={user?.location || "-"}
          color="bg-blue-500"
          icon={<HiOutlineLocationMarker className="w-6 h-6 mr-2" />}
        />
        <StatCard
          title="کد پستی"
          value={user?.postal_code || "-"}
          color="bg-purple-500"
          icon={<HiOutlineMail className="w-6 h-6 mr-2" />}
        />
      </motion.div>
    </motion.div>
  );
}

import {useEffect, useState} from "react";
import Link from "next/link";
import {FaUser} from "react-icons/fa";
import LogoutLink from "@/app/_components/Modals/LogoutLink";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import LoginModal from "@/app/_components/Modals/LoginModal.";

export default function LoginButtom({user}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // حالت بارگذاری
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // بررسی کوکی‌ها برای تشخیص احراز هویت
    const cookies = document.cookie.split(';');
    const token = cookies.find(cookie => cookie.trim().startsWith('access_token='));

    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false); // وضعیت احراز هویت را false کنید
  };



  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  if (loading) {
    return null;
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="">
          <div className='relative group'>
              <span className="flex gap-x-2  group-hover:text-orange-300 text-zinc-700 dark:text-white  top-10 transition-colors mt-1.5 lg:truncate">
                <FaUser/>
                {user?.name?.split(' ')[0]}
              </span>
            <div className="absolute flex left-4 flex-col p-5 top-10 space-y-3 w-36 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white text-base rounded-2xl border-t-[3px] border-orange-300 shadow-normal child:transition-colors child-hover:text-white dark:child-hover:text-orange-300 tracking-normal">
              <Link href='/account/profile' className="flex items-center gap-x-2 hover:text-white  rounded hover:bg-orange-400 transition-colors text-base">
                <FaUser/>
                <span>پروفایل</span>
              </Link>
              <LogoutLink onLogout={handleLogout}/>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={handleOpenModal}
                className="">
          <div className='flex'>
            <HiArrowRightOnRectangle className="w-7 h-7" />
            <span className="">ورود | ثبت نام</span>
          </div>
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={handleOverlayClick}>
          <div className="bg-white flex gap-12 flex-col justify-start dark:bg-zinc-700 rounded-lg shadow-lg w-full h-[290px] sm:w-[550px] max-w-lg mx-auto my-auto relative top-1/2 transform -translate-y-1/2">
            <div className='modal-header bg-orange-300 text-zinc-700 dark:text-white dark:bg-blue-600 rounded-t-lg'>
              <div className=" p-5 flex justify-between items-center">
                <h2 className="text-lg ">ورود | ثبت نام</h2>
                <button onClick={handleCloseModal} className="hover:text-red-500 transition-colors">
                  بستن
                </button>
              </div>
            </div>
            <div className="">
              <LoginModal handleCloseModal={handleCloseModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
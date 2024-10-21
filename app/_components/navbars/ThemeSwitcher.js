"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi";
const ThemeSwitcher = ({x}) => {
  const [mount, setMount] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);
  console.log(currentTheme);
  return mount ? (
    <div>
      <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          type="button"
      >
        <div className='flex mt-2 items-center gap-x-2'>
        <HiOutlineSun className={`w-${x} h-${x} dark:hidden`}
        />
            <div className='md:hidden'>


        <span className='dark:hidden'>تم دارک</span>
                </div>
          </div>

        <div className='flex justify-between items-center gap-x-2'>
                  <HiOutlineMoon className={`w-${x} h-${x} hidden dark:block`}
        />
          <div className='md:hidden'>
        <span className='hidden dark:block '>تم روشن</span>
          </div>
        </div>


      </button>
    </div>
  ) : null;
};
export default ThemeSwitcher;

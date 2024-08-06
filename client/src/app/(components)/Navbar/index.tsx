"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarOpen } from "@/app/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* Left Side */}

      <div className="flex items-center justify-between gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100  "
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Type to search groups & products"
            className="pr-4 pl-10 py-2 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500 w-50 md:w-60"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-between gap-5">
        <div className="items-center hidden md:flex justify-center gap-5">
          <div>
            <button onClick={ toggleDarkMode}>
             {isDarkMode ? <Sun className="text-gray-500 cursor-pointer" size={24} /> : <Moon className="text-gray-500 cursor-pointer" size={24} /> }
            </button>
          </div>
          <div className="relative">
            <Bell className=" text-gray-500 cursor-pointer" size={24} />
            <span className="absolute -top-2 right-2 text-red-100 bg-red-500 items-center inline-center px-[0.4rem] py-1 text-xs font-semibold leading-none rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex gap-3 cursor-pointer items-center">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">Miracle</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="text-gray-500 cursor-pointer" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

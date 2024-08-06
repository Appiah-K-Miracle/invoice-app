"use client";

import React, { useEffect } from "react";
import NavBar from "./(components)/Navbar";
import SideBar from "./(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);

const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

// set dark and light mode 
useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }
})

  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-900 w-full min-h-screen`}>
      <SideBar />
      <main
        className={`flex flex-col w-full h-full py-7 px-0 bg-gray-50  ${isSidebarOpen ? "md:pl-24" : "md:pl-72"}`} >
        <NavBar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
export default DashboardWrapper;

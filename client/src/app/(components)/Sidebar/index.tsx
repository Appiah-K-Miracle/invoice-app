import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarOpen } from "@/app/state";
import { Archive, CircleDollarSign, LucideIcon, Menu, Settings, SlidersHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

interface SidebarProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}
const SidebarLinks = ({ href, icon: Icon, label, isCollapsed }: SidebarProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  return (
    <Link
      href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} hover:text-blue-500 hover:bg-gray-100 gap-3 transition-colors ${isActive ? "text-white bg-gray-100" : ""}`}>

      <Icon className="w-6 h-6 |text-gray-700" />
      <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
        {label}
        </span>

      </div>
       
      </Link>
  );
};

const SideBar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  const toggleSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarOpen ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white h-full transition-all duration-300 shadow-md z-50`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h1
          className={`text-2xl font-extrabold ${
            isSidebarOpen ? "hidden" : "block"
          }`}
        >
          AKM-INVENTORY
        </h1>

        <button
          className={`px-3 py-y bg-gray-100 rounded-full md:hidden hover:bg-blue-100 ${
            isSidebarOpen ? "px-5" : "px-8"
          }`}
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">
        <SidebarLinks
          href="/dashboard"
          icon={Menu}
          label="Dashboard"
          isCollapsed={isSidebarOpen}
        />
        <SidebarLinks
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarOpen}
        />
        <SidebarLinks
          href="/products"
          icon={Menu}
          label="Products"
          isCollapsed={isSidebarOpen}
        />
        <SidebarLinks
          href="/user"
          icon={Menu}
          label="User"
          isCollapsed={isSidebarOpen}
        />
        <SidebarLinks
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarOpen}
        />
        <SidebarLinks
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarOpen}
        />
      </div>

      {/* Footer */}
      <div className={`${isSidebarOpen ? "hidden" : "block"} mb-10`}>
        <p className="text-xs text-gray-500 text-center">&copy; 2024 AKM-INVENTORY</p>
        
      </div>
    </div>
  );
};

export default SideBar;

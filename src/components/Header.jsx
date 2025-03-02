import React from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-100 shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 md:hidden"
        >
          <Menu size={24} />
        </button>
        <span>
          <img src="../../vite.svg" alt="react" />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* User Profile Image */}
        <img
          className="w-10 h-10 p-1 shadow-lg cursor-pointer rounded-full border-1   border-green-500"
          src="../../vite.svg"
          alt="react"
        />
      </div>
    </header>
  );
};

export default Header;

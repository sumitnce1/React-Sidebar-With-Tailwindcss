import React from "react";
import {
  Home,
  Users,
  Settings,
  BarChart,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Users, label: "Users" },
    { icon: BarChart, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside
      className={`bg-blue-100 shadow-md h-[calc(100vh-64px)] fixed top-16 left-0 z-20 transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-0 md:w-16"}`}
    >
      <div
        className={`p-4 flex flex-col h-full ${
          isOpen ? "w-64" : "w-0 md:w-16 overflow-hidden"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="hidden md:block self-end p-1 me-[-35px] rounded-md bg-gray-500 text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 z-[9999] absolute top-0 right-5"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
        <nav className={`${isOpen ? "block" : "hidden md:block"} flex-1 mt-2`}>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
                >
                  <item.icon
                    size={20}
                    className={`flex-shrink-0 text-gray-500 group-hover:text-blue-500 ${
                      isOpen ? "mr-3" : "mx-auto md:mx-auto"
                    }`}
                  />
                  <span
                    className={`font-medium ${isOpen ? "block" : "hidden"}`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${isOpen ? "block" : "hidden md:block"} mt-auto`}>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
          >
            <LogOut
              size={20}
              className={`flex-shrink-0 text-gray-500 group-hover:text-red-500 ${
                isOpen ? "mr-3" : "mx-auto md:mx-auto"
              }`}
            />
            <span className={`font-medium ${isOpen ? "block" : "hidden"}`}>
              Logout
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
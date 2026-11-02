
import React from "react";
import {
  FaGraduationCap,
  FaThLarge,
  FaBookOpen,
  FaTasks,
  FaCalendarAlt,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: FaThLarge },
  { label: "My Courses", icon: FaBookOpen },
  { label: "Assignments", icon: FaTasks },
  { label: "Schedule", icon: FaCalendarAlt },
  { label: "My Progress", icon: FaChartLine },
  { label: "Settings", icon: FaCog },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="w-full md:w-64 shrink-0 bg-white border-r border-gray-200 p-5 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 text-indigo-600 text-2xl font-bold">
        <FaGraduationCap className="text-3xl" />
        <span>LearnHub</span>
      </div>

      {/* Menu Heading */}
      <p className="text-xs font-semibold tracking-widest text-gray-400 mt-10 mb-4">
        LEARNING MENU
      </p>

      {/* Navigation */}
      <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.label;

          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.label)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              <Icon className="text-lg" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Text */}
      <div className="hidden md:block mt-auto pt-10">
        <div className="bg-indigo-50 rounded-xl p-4">
          <FaGraduationCap className="text-2xl text-indigo-600 mb-2" />
          <p className="text-sm font-semibold text-gray-800">
            Keep Learning!
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Small steps lead to big achievements.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

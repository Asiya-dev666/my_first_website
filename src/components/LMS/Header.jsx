
import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-5 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p className="text-xs font-semibold tracking-widest text-indigo-500 mb-1">
          STUDENT PORTAL
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Learning Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
          <FaSearch className="text-gray-400" />

          <input
            type="search"
            placeholder="Search..."
            className="w-full sm:w-36 outline-none bg-transparent text-sm text-gray-700"
          />
        </div>

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-indigo-50"
        >
          <FaBell />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-indigo-500" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Student
            </p>
            <p className="text-xs text-gray-500">
              Learner Account
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from "react";

const StatCard = ({ icon: Icon, title, value, subtitle, color }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl ${color}`}
        >
          <Icon />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-1">
            {value}
          </h3>

          <p className="text-xs text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

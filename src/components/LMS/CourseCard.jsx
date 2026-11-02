
import React from "react";
import { FaPlay } from "react-icons/fa";

const CourseCard = ({ course, onContinue }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      {/* Course Cover */}
      <div
        className={`h-36 p-5 flex items-center justify-between ${course.color}`}
      >
        <span className="text-xs font-bold bg-white/80 text-gray-700 px-3 py-2 rounded-lg">
          {course.category}
        </span>

        <span className="text-4xl font-bold text-gray-700">
          {course.symbol}
        </span>
      </div>

      {/* Course Details */}
      <div className="p-5">
        <p className="text-xs text-indigo-500 font-medium">
          {course.instructor}
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-2 mb-5">
          {course.title}
        </h3>

        {/* Progress */}
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-500">Course Progress</span>

          <span className="font-semibold text-indigo-600">
            {course.progress}%
          </span>
        </div>

        <div
          className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"
          role="progressbar"
          aria-label={`${course.title} progress`}
          aria-valuenow={course.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${course.progress}%` }}
          />
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={() => onContinue(course)}
          className="w-full mt-5 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl py-3 text-sm font-semibold transition duration-200"
        >
          <FaPlay className="text-xs" />
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

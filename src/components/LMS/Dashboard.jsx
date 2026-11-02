
import React, { useState } from "react";
import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaTrophy,
  FaArrowLeft,
} from "react-icons/fa";

import StatCard from "./StatCard";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "React JS for Beginners",
    category: "WEB DEVELOPMENT",
    instructor: "By Sarah Ahmed",
    progress: 65,
    color: "bg-blue-100",
    symbol: "⚛️",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    category: "PROGRAMMING",
    instructor: "By Ali Khan",
    progress: 40,
    color: "bg-amber-100",
    symbol: "JS",
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    category: "DESIGN",
    instructor: "By Ayesha Malik",
    progress: 85,
    color: "bg-purple-100",
    symbol: "🎨",
  },
];

const Dashboard = ({ activePage }) => {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    {
      title: "Enrolled Courses",
      value: "06",
      subtitle: "Courses in your library",
      icon: FaBookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Completed",
      value: "02",
      subtitle: "Courses completed",
      icon: FaCheckCircle,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Learning Hours",
      value: "24",
      subtitle: "Hours spent learning",
      icon: FaClock,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Achievements",
      value: "08",
      subtitle: "Milestones reached",
      icon: FaTrophy,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const isCoursesPage = activePage === "My Courses";
  const isDashboard = activePage === "Dashboard";

  const pageTitle = isDashboard
    ? "Continue Learning"
    : activePage;

  return (
    <main className="p-5 md:p-8 bg-gray-50 min-h-screen">
      {/* Course Details View */}
      {selectedCourse ? (
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <button
            onClick={() => setSelectedCourse(null)}
            className="flex items-center gap-2 text-indigo-600 font-medium mb-6"
          >
            <FaArrowLeft />
            Back to Courses
          </button>

          <div
            className={`rounded-2xl p-8 ${selectedCourse.color}`}
          >
            <p className="text-sm font-semibold text-gray-600">
              {selectedCourse.category}
            </p>

            <h1 className="text-2xl md:text-3xl font-bold mt-3 text-gray-800">
              {selectedCourse.title}
            </h1>

            <p className="mt-3 text-gray-600">
              {selectedCourse.instructor}
            </p>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-3">
            Course Overview
          </h2>

          <p className="text-gray-600">
            Welcome to this course! Your current progress is{" "}
            {selectedCourse.progress}%.
          </p>

          <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-indigo-600"
              style={{ width: `${selectedCourse.progress}%` }}
            />
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Lesson content can be added here in the next step.
          </p>
        </section>
      ) : (
        <>
          {/* Welcome Banner */}
          {isDashboard && (
            <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 p-6 md:p-9 text-white flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-indigo-100">
                  YOUR LEARNING JOURNEY
                </p>

                <h1 className="text-2xl md:text-3xl font-bold mt-3">
                  Welcome back, Student!
                </h1>

                <p className="text-sm text-indigo-100 mt-3">
                  Keep learning and move closer to your goals.
                </p>
              </div>

              <div className="text-5xl md:text-7xl">🎓</div>
            </section>
          )}

          {/* Statistics */}
          {isDashboard && (
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-7">
              {stats.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  subtitle={stat.subtitle}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </section>
          )}

          {/* Courses */}
          {isDashboard || isCoursesPage ? (
            <section className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-bold tracking-widest text-indigo-500 mb-2">
                    YOUR CLASSROOM
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800">
                    {pageTitle}
                  </h2>
                </div>

                <span className="text-sm text-gray-500">
                  {filteredCourses.length} courses
                </span>
              </div>

              {/* Search */}
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses..."
                className="w-full sm:max-w-sm mb-6 px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-indigo-200"
              />

              {/* Course Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onContinue={setSelectedCourse}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">
                    No matching courses found.
                  </p>
                )}
              </div>
            </section>
          ) : (
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">
                {activePage}
              </h1>

              <p className="text-gray-500 mt-3">
                The {activePage.toLowerCase()} section is ready for
                its own content.
              </p>
            </section>
          )}

          {/* Upcoming Lesson */}
          {isDashboard && (
            <section className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest text-indigo-500">
                  UP NEXT
                </p>

                <h3 className="text-lg font-bold mt-2">
                  React Components & Props
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Your next learning session
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl px-5 py-3">
                <p className="text-sm font-semibold text-indigo-600">
                  Lesson 04
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  30 minutes
                </p>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default Dashboard;

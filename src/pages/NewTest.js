import React, { useState } from "react";

const NewTest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 flex-none ${
          isSidebarOpen ? "block" : "hidden"
        } sm:block`}
      >
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        {/* Sidebar menu */}
        <nav className="mt-6">
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center py-2 px-6 text-gray-400 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center py-2 px-6 text-gray-400 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <span>Reports</span>
              </a>
            </li>
            {/* Add more sidebar menu items */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <div className="py-4 px-6">
          {/* Responsive sidebar toggle button */}
          <button
            className="block sm:hidden text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <h2 className="text-2xl font-semibold mb-4">
            Welcome to the Dashboard
          </h2>
          {/* Dashboard content goes here */}
        </div>
      </div>
    </div>
  );
};

export default NewTest;

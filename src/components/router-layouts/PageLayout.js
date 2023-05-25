import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function PageLayout({ children }) {
  const loc = useLocation();
  const [location, setLocation] = useState(useLocation());
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentication.auth);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    if (auth.message !== "authenticated") navigate("/login");
  }, []);

  return (
    <div className="bg-gray-200">
      {/* Navbar */}
      <nav className="bg-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-white text-lg font-semibold">Dashboard</h1>
              </div>
              <div className="hidden md:block">
                {/* Navbar menu */}
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-white hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  {/* Add more navbar links */}
                </div>
              </div>
            </div>
            {/* Navbar toggle button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-slate-600 focus:outline-none"
              >
                {isNavbarOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Responsive navbar menu */}
        <div className={`md:hidden ${isNavbarOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-slate-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            {/* Add more responsive navbar links */}
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to the Dashboard
          </h2>
          {/* Dashboard content goes here */}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;

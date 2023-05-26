import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-semibold">
                Laboratory Name
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-secondary hover:text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/tests"
                  className="text-white hover:bg-secondary hover:text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tests
                </Link>
                <Link
                  to="/users/create"
                  className="text-white hover:bg-secondary hover:text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create User
                </Link>
                <Link
                  to="/logout"
                  className="text-white hover:bg-secondary hover:text-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </Link>
                {/* Add more navbar links */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary focus:outline-none"
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
          <Link
            to="/"
            className="text-white hover:bg-secondary hover:text-light block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/tests"
            className="text-white hover:bg-secondary hover:text-light block px-3 py-2 rounded-md text-base font-medium"
          >
            Tests
          </Link>
          <Link
            to="/users/create"
            className="text-white hover:bg-secondary hover:text-light block px-3 py-2 rounded-md text-base font-medium"
          >
            Create User
          </Link>
          <Link
            to="/logout"
            className="text-white hover:bg-secondary hover:text-light block px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </Link>
          {/* Add more responsive navbar links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

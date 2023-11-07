import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProtectedLink from "./ProtectedLink";
import { FaHome } from "react-icons/fa";
import { RootState } from "../store/store";
import Roles from "../constants/Roles";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const auth = useSelector((state: RootState) => state.authentication.auth);
  console.log("role:", auth?.userDetails?.role);
  const [userRole] = useState(auth?.userDetails?.role);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-semibold">
                {process.env.REACT_APP_LABORATORY_NAME}
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <ProtectedLink
                  userRole={userRole}
                  to="/"
                  text="Home"
                  allowed
                ></ProtectedLink>
                <ProtectedLink
                  userRole={userRole}
                  to="/tests"
                  text="Tests"
                  allowed
                ></ProtectedLink>

                {/* <ProtectedLink
                  roles={[Roles.SUPERUSER]}
                  userRole={userRole}
                  to="/users/create"
                  text="Create User"
                  allowed
                ></ProtectedLink> */}
                {/* <ProtectedLink
                  roles={[Roles.SUPERUSER]}
                  userRole={userRole}
                  to="/superuser"
                  text="Super"
                  allowed
                ></ProtectedLink> */}
                {/* <ProtectedLink
                  roles={[Roles.SUPERUSER]}
                  userRole={userRole}
                  to="/admin"
                  text="Admin"
                  allowed
                ></ProtectedLink> */}
                <ProtectedLink
                  roles={[Roles.SUPERUSER, Roles.ADMIN, Roles.ADMIN]}
                  userRole={userRole}
                  to="/activitylogs"
                  text="Activity Logs"
                  allowed
                ></ProtectedLink>
                <ProtectedLink
                  userRole={userRole}
                  to="/logout"
                  text="Logout"
                  allowed
                ></ProtectedLink>
                {/* <ProtectedLink
                  roles={[Roles.SUPERUSER, Roles.ADMIN]}
                  userRole={userRole}
                  to="/users"
                  text="Users"
                  displayIn={["/superuser"]}
                  allowed
                ></ProtectedLink> */}
                {/* Add more navbar links */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center">
            <ProtectedLink
              userRole={userRole}
              to="/"
              text="Home"
              allowed
              smallScreen
            >
              <FaHome className="text-lg" />
            </ProtectedLink>
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary focus:outline-none"
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
          <ProtectedLink
            userRole={userRole}
            to="/"
            text="Home"
            allowed
            smallScreen
          ></ProtectedLink>
          <ProtectedLink
            userRole={userRole}
            to="/tests"
            text="Tests"
            allowed
            smallScreen
          ></ProtectedLink>

          {/* <ProtectedLink
            roles={[Roles.SUPERUSER]}
            userRole={userRole}
            to="/users/create"
            text="Create User"
            allowed
            smallScreen
          ></ProtectedLink> */}
          {/* <ProtectedLink
            roles={[Roles.SUPERUSER]}
            userRole={userRole}
            to="/superuser"
            text="Super"
            allowed
            smallScreen
          ></ProtectedLink>
          <ProtectedLink
            roles={[Roles.SUPERUSER]}
            userRole={userRole}
            to="/admin"
            text="Admin"
            allowed
            smallScreen
          ></ProtectedLink> */}
          <ProtectedLink
            roles={[Roles.SUPERUSER, Roles.ADMIN, Roles.ADMIN]}
            userRole={userRole}
            to="/activitylogs"
            text="Activity Logs"
            allowed
          ></ProtectedLink>
          <ProtectedLink
            userRole={userRole}
            to="/logout"
            text="Logout"
            allowed
            smallScreen
          ></ProtectedLink>
          {/* <ProtectedLink
            roles={[Roles.SUPERUSER, Roles.ADMIN]}
            userRole={userRole}
            to="/users"
            text="Users"
            displayIn={["/superuser"]}
            allowed
          ></ProtectedLink> */}
          {/* Add more responsive navbar links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

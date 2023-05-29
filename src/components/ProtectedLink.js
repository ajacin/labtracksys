import React from "react";
import { Link, useLocation } from "react-router-dom";
import Roles from "../constants/Roles";

const ProtectedLink = ({
  children,
  userRole,
  roles = [Roles.USER, Roles.ADMIN, Roles.SUPERUSER],
  to = "/",
  text = "",
  smallScreen = true,
  allowed = true,
}) => {
  const location = useLocation();

  const resolveClass = () => {
    let classNames = "";
    if (smallScreen) {
      if (to === location.pathname)
        classNames =
          " border border-primary text-light block px-3 py-2 rounded-md text-base font-medium";
      else
        classNames =
          "text-white hover:bg-primary hover:text-light block px-3 py-2 rounded-md text-base font-medium";
    } else if (to === location.pathname) {
      classNames =
        "bg-primary text-light px-3 py-2 rounded-md text-sm font-medium";
    } else
      classNames =
        "text-white hover:bg-primary hover:text-light px-3 py-2 rounded-md text-sm font-medium ";

    return classNames;
  };
  return (
    <>
      {roles?.includes(userRole) && (
        <Link to={to} className={resolveClass()}>
          {text}
        </Link>
      )}
    </>
  );
};

export default ProtectedLink;

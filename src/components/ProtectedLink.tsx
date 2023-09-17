import React from "react";
import { Link, useLocation } from "react-router-dom";
import Roles from "../constants/Roles";

interface ProtectedLinkProps {
  children?: React.ReactNode;
  userRole: string;
  roles?: string[];
  to?: string;
  text?: string;
  smallScreen?: boolean;
  allowed?: boolean;
  displayIn?: string[];
}

const ProtectedLink: React.FC<ProtectedLinkProps> = ({
  children,
  userRole,
  roles = [Roles.USER, Roles.ADMIN, Roles.SUPERUSER],
  to = "/",
  text = "",
  smallScreen = false,
  allowed = true,
  displayIn = [],
}) => {
  const location = useLocation();

  const resolveClass = () => {
    let classNames = "";
    if (smallScreen) {
      if (to === location.pathname)
        classNames =
          "border-b border-primary text-light block px-3 py-2 text-base font-medium ";
      else
        classNames =
          "text-white hover:bg-primary hover:text-dark block px-3 py-2 rounded-md text-base font-medium ";
    } else if (to === location.pathname) {
      classNames =
        "border-b border-primary text-light hover:bg-primary hover:text-dark  px-3 py-2 text-sm font-medium ";
    } else
      classNames =
        "text-white hover:bg-primary hover:text-dark px-3 py-2 rounded-md text-sm font-medium ";

    return classNames;
  };

  return (
    <>
      {(!displayIn.length ||
        (displayIn.length > 0 && displayIn.includes(location.pathname))) &&
        roles?.includes(userRole) && (
          <Link to={to} className={resolveClass()}>
            {children ? children : text}
          </Link>
        )}
    </>
  );
};

export default ProtectedLink;

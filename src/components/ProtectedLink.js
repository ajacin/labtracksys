import React from "react";
import { Link } from "react-router-dom";

const ProtectedLink = ({
  children,
  userRole,
  roles,
  to = "/",
  text = "",
  allowed = true,
}) => {
  return (
    <>
      {roles.includes(userRole) && (
        <Link
          to={to}
          className="text-white hover:bg-primary hover:text-light px-3 py-2 rounded-md text-sm font-medium"
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default ProtectedLink;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.authentication.auth);
  return auth.message === "authenticated" ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoutes;

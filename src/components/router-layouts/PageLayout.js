import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function PageLayout({ children }) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentication.auth);

  useEffect(() => {
    if (auth.message !== "authenticated") navigate("/login");
  }, [auth.message, navigate]);

  return (
    <div className=" h-screen overflow-scroll">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main Content */}
      {children}
    </div>
  );
}

export default PageLayout;

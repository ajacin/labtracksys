import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

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
      <Navbar></Navbar>
      {/* Main Content */}
      {children}
    </div>
  );
}

export default PageLayout;

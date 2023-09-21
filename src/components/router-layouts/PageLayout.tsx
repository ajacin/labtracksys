import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { RootState } from "../../store/store";

interface PageLayoutProps {
  children: React.ReactElement;
}

function PageLayout({ children }: PageLayoutProps) {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.authentication.auth);

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

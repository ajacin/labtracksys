import React from "react";
import { Link } from "react-router-dom";

interface PanelButtonProps {
  children: React.ReactNode;
  to?: string;
  text?: string;
}

const PanelButton = ({
  children,
  to = "/",
  text = "Click",
}: PanelButtonProps) => {
  return (
    <div className=" rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
        <Link to={to} className="flex items-center justify-center">
          {children}
          <span className="ml-2">{text}</span>
        </Link>
      </span>
    </div>
  );
};

export default PanelButton;

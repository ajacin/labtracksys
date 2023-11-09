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
    <div className="bg-tertiary border hover:font-bold hover:underline hover:underline-offset-1  border-white  h-10 p-1 flex items-center justify-center gap-2 cursor-pointer">
      {children}
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default PanelButton;

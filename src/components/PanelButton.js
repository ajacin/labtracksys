import React from "react";
import { Link } from "react-router-dom";

const PanelButton = ({ children, to = "/", text = "Click" }) => {
  return (
    <div class="bg-white border hover:bg-light border-dark rounded-xl shadow-dark shadow-md h-12 p-1 flex items-center justify-center gap-2 cursor-pointer">
      {children}
      <Link to={to} className="font-bold">
        {text}
      </Link>
    </div>
  );
};

export default PanelButton;

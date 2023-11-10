import React from "react";
import { FaSpinner, FaSync } from "react-icons/fa";

const Loading = ({ type = "spinner", size = 30 }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {" "}
      {/* Add 'h-screen' to ensure vertical centering */}
      <div className="text-tertiary">
        {type === "spinner" ? (
          <FaSpinner className="animate-spin" size={size} />
        ) : (
          <FaSync className="animate-bounce" size={size} />
        )}
      </div>
    </div>
  );
};

export default Loading;

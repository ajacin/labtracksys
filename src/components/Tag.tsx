import React from "react";

type TagProps = {
  color: string; // Accept color name from Tailwind CSS config
  text: string;
};

const Tag: React.FC<TagProps> = ({ color, text }) => {
  const getColorClasses = (color: string): string => {
    // Assuming color names are valid Tailwind CSS color classes
    return `bg-${color} text-${color}`;
  };

  return (
    <span
      className={`inline-flex items-center px-1 py-1 text-xs text-white ${getColorClasses(
        color
      )}`}
    >
      {text}
    </span>
  );
};

export default Tag;

import React from "react";

const Button = ({ variant, type, text, onButtonClick }) => {
  let classes =
    variant === "primary"
      ? "bg-primary hover:bg-secondary text-dark hover:text-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      : "bg-dark hover:bg-secondary text-light hover:text-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  return (
    <button
      className={classes}
      type={type ? type : "button"}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;

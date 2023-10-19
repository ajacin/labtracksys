import React from "react";

type ButtonProps = {
  variant?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  onButtonClick?: () => void;
};

const Button = ({ variant, type, text, onButtonClick }: ButtonProps) => {
  let classes =
    variant === "primary"
      ? "bg-primary hover:bg-secondary text-dark hover:text-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2"
      : "bg-dark hover:bg-secondary text-light hover:text-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2";
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

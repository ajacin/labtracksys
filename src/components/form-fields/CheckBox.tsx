import React from "react";

type CheckBoxProps = {
  checked: boolean;
  onChange: (isChecked: boolean) => void; // Define onChange prop
};
const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };
  return (
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-gray-600"
      checked={checked}
      onChange={handleOnChange}
    ></input>
  );
};

export default CheckBox;

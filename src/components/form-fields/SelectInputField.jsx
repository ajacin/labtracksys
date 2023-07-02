import React from "react";
import Select from "react-select";
const options = [
  { value: "6477c4bd20aad115f7c6f443", label: "RBC 1" },
  { value: "6477c4bd20aad115f7c6f443", label: "RBC 2" },
  { value: "6477c4bd20aad115f7c6f443", label: "RBC 3" },
];

const SelectInputField = ({ value, label = "Select" }) => {
  return (
    <div className="w-full bg-light border border-gray">
      <div className="flex justify-between items-center px-3">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="name"
        >
          {label}
        </label>
        <span className="text-error">Delete</span>
      </div>
      <Select
        id="selectbox"
        className="border rounded"
        options={options}
        value={value}
      />
    </div>
  );
};

export default SelectInputField;

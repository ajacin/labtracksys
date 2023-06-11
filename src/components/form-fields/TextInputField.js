import React from "react";

const TextInputField = ({
  label = "Field",
  id = "field",
  value = null,
  required = false,
  onFieldChange,
  type = "text",
}) => {
  if (type === "number")
    return (
      <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="name"
        >
          {label}
        </label>
        <input
          type="number"
          step="0.01"
          id={id ? id : label}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          value={value}
          onChange={(e) => onFieldChange(e.target.value)}
          required={required}
        />
      </div>
    );
  else
    return (
      <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="name"
        >
          {label}
        </label>
        <input
          type="text"
          id={id ? id : label}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          value={value}
          onChange={(e) => onFieldChange(e.target.value)}
          required={required}
        />
      </div>
    );
};

export default TextInputField;

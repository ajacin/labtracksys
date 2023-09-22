import React, { ChangeEvent } from "react";

type TextInputFieldProps = {
  id?: string;
  label: string;
  value: string;
  required?: boolean;
  onFieldChange: (value: string) => void;
  type?: string;
};

const TextInputField: React.FC<TextInputFieldProps> = ({
  label = "Field",
  id = "field",
  value = "",
  required = false,
  onFieldChange,
  type = "text",
}: TextInputFieldProps) => {
  if (type === "number")
    return (
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          {label}
        </label>
        <input
          type="number"
          step="0.01"
          id={id ? id : label}
          className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          value={value}
          onChange={(e) => onFieldChange(e.target.value)}
          required={required}
        />
      </div>
    );
  else
    return (
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          {label}
        </label>
        <input
          type="text"
          id={id ? id : label}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onFieldChange(e.target.value)
          }
          required={required}
        />
      </div>
    );
};

export default TextInputField;

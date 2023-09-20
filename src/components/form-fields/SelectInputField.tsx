import React, { useState } from "react";
import Select from "react-select";
const options: Option[] = [
  { value: "6477c4bd20aad115f7c6f443", label: "RBC 1" },
  { value: "6477c4bd20aad115f7c6f443", label: "RBC 2" },
  { value: "6477c4bd20aad115f7c6f443", label: "RBC 3" },
];

interface SelectInputFieldProps {
  value: string;
  label?: string;
}

interface Option {
  value: string;
  label: string;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  value,
  label = "Select",
}) => {
  const [selectedOption, setSelectedOption] = useState(
    options.filter((each) => each.value === value)[0]
  );
  return (
    <div className="w-full bg-light border border-gray">
      <div className="flex justify-between items-center px-3">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          {label}
        </label>
        <span className="text-error">Delete</span>
      </div>
      <Select
        id="selectbox"
        className="border rounded"
        options={options}
        value={selectedOption}
      />
    </div>
  );
};

export default SelectInputField;

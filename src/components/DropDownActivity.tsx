import React, { useEffect, useState } from "react";
import useFetchData from "src/hooks/generic/useFetch";

interface DropdownProps {
  label: string;
  id: string;
  selectedValue: string;
  onValueChange: (value: string, activityName: string) => void;
  endpoint: string;
}

type OptionType = {
  key: string;
  value: string;
};

type ActivitiesData = {
  data: {
    id: string;
    activityName: string;
  }[];
} | null;

const DropdownActivity: React.FC<DropdownProps> = ({
  label,
  id,
  selectedValue,
  onValueChange,
  endpoint,
}: DropdownProps) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const { data, loading, error } = useFetchData<ActivitiesData>(endpoint);

  useEffect(() => {
    if (!loading && !error && data && data.data) {
      const response = data.data.map((each) => ({
        key: each.id,
        value: each.activityName,
      }));
      setOptions(response);
    }
  }, [data, loading, error]);

  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (option) => option.key === e.target.value
    );

    if (selectedOption) {
      onValueChange(selectedOption.key, selectedOption.value);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <label
        htmlFor={id}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        value={selectedValue}
        onChange={handleValueChange}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option: OptionType) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownActivity;

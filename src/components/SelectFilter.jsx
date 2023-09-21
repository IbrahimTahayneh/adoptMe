import { useState } from "react";
import Select from "react-tailwindcss-select";
const SelectFilter = ({ options, title, multiSelect, updateFilter }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (value) => {
    setSelectedOptions(value);
    updateFilter(value);
  };
  return (
    <div>
      <label>{title}</label>
      <Select
        value={selectedOptions}
        options={options}
        isMultiple={multiSelect ? true : false}
        placeholder={multiSelect ? "Pick one or more" : "Pick one"}
        onChange={handleChange}
      />
    </div>
  );
};
export default SelectFilter;

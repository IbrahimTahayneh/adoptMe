import { useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState({});

  const updateFilter = (type, data) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [type]: data,
    }));
  };

  return { filter, updateFilter };
};

export default useFilter;

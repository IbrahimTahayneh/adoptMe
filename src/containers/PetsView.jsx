import { useState } from "react";
import { Control, SelectFilter, Filter } from "../components";
import { CrosshairsGps } from "../assets/images";
import "./style.css";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry" },
];

const PetView = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setShowSort(false);
  };

  const toggleSort = () => {
    setShowSort(!showSort);
    setShowFilter(false);
  };
  const handleFilterUpdate = () => {
    setSelectedOptions(selectedOptions);
  };
  return (
    <div className="header">
      <div className="control-left">
        <div className="distance">
          <span
            aria-hidden="true"
            className="distance"
            onClick={() => {
              console.log("test");
            }}
          >
            <CrosshairsGps className="material-design-icon" />
          </span>
          <Filter />
        </div>
      </div>
      <Control
        showFilter={showFilter}
        showSort={showSort}
        toggleFilter={toggleFilter}
        toggleSort={toggleSort}
      />
      <SelectFilter
        title={"hello"}
        options={options}
        multiSelect={true}
        updateFilter={handleFilterUpdate}
      />
    </div>
  );
};

export default PetView;

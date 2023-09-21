import { useState, useEffect } from "react";

const sortingRecentData = [
  { name: "Recent", value: "recent" },
  { name: "Popular", value: "popular" },
];

const sortingDistanceData = [{ name: "Distance", value: "distance" }];

function SortButton({ location, sort, onSubmitSort }) {
  const [selected, setSelected] = useState(() => {
    if (location) {
      return sort || sortingRecentData[0].value;
    } else {
      return !sort || !sort.includes("distance")
        ? sortingRecentData[0].value
        : sort;
    }
  });

  const sortingData = location
    ? [...sortingRecentData, ...sortingDistanceData]
    : sortingRecentData;

  useEffect(() => {
    setSelected((prevSelected) => {
      if (location) {
        return sort || prevSelected;
      } else {
        return !prevSelected.includes("distance")
          ? prevSelected
          : sortingRecentData[0].value;
      }
    });
  }, [location, sort]);

  const submitSort = (sort) => {
    if (selected === sort) return;
    setSelected(sort);
    onSubmitSort(sort, location);
  };

  return (
    <div className="button-group">
      {sortingData.map((data, i) => (
        <button
          key={i}
          onClick={() => submitSort(data.value)}
          className={selected === data.value ? "selected" : ""}
        >
          {data.name}
        </button>
      ))}
    </div>
  );
}
export default SortButton;

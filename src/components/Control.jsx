import classNames from "classnames";
import "./style.css";

const Control = ({ showFilter, showSort, toggleFilter, toggleSort }) => {
  const filterClass = classNames({ show: showFilter });
  const sortClass = classNames({ show: showSort });

  return (
    <div className="control">
      <span onClick={toggleFilter} className={filterClass} aria-hidden="true">
        {showFilter ? "Hide" : "Show"} Filter
      </span>

      <span onClick={toggleSort} className={sortClass} aria-hidden="true">
        {showSort ? "Hide" : "Show"} Sorting
      </span>
    </div>
  );
};

export default Control;

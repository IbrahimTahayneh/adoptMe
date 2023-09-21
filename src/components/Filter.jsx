import SelectFilter from "./SelectFilter";
import useAnimalBreeds from "../query/useAnimalBreeds";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry" },
];

const Filter = (updateFilter) => {
  const data = useAnimalBreeds("Dog");
  console.log(data, "data");
  return (
    <div className="filte">
      <div className="filte-option">
        <div>
          <div>
            <label htmlFor="name" className="typo__label">
              Name
            </label>
            <div>
              <input
                type="text"
                className="text"
                id="name"
                onChange={(e) => updateFilter("name", e.target.value)}
              />
            </div>
            <div>
              <SelectFilter
                options={options}
                title="Type of pet"
                updateFilter={updateFilter}
                keyName="type"
                multiSelect={false}
              />
            </div>
            {/* {makeValidOptions.map((options, i) => (
              <div key={i}>
                <SelectFilter
                  options={makeValidOptions(options)}
                  title={i}
                  updateFilter={updateFilter}
                  keyName={i}
                  multiSelect={true}
                />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;

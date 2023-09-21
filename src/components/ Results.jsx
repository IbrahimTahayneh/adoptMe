import Pet from "./Pet";

const Results = ({ pets }) => {
  console.log('pets data', pets)
  return (
    <div className="search">
      {!pets?.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.age}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              images={pet.photos}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;

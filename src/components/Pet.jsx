import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  console.log("images", images);
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images && images.length) {
    hero = images[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img data-testid="thumbnail" src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

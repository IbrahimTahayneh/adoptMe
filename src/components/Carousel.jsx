import { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img
        src={images[active]}
        alt="animal"
        data-testid="hero"
        className="max-w-5/12 max-h-96"
      />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={(e) => setActive(+e.target.dataset.index)}
            onKeyDown={(event, index) => {
              if (event.key === "Enter") {
                setActive(index);
              }
            }}
            data-testid={`thumbnail-${index}`}
            data-index={index}
            tabIndex="0"
            // eslint-disable-next-line
            role={"button"}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

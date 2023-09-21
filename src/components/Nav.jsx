import { Link } from "react-router-dom";

import { images } from "../assets";
import "./style.css";
const Nav = () => {
  return (
    <div className="nav">
      <div>
        <Link to={"/"} className="logo">
          <div>
            <img alt="adopt" src={images.AdoptIcon} />
            Adopt a Pet
          </div>
        </Link>
        <div>
          <Link to={"/pets"}> View all pets </Link>
          <Link to="https://www.petfinder.com/pet-adoption/" target="_blank">
            About Pet Adoption
          </Link>
          <Link to="https://github.com/scc416/adopt-a-pet" target="_blank">
            GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// import { useSelector, useDispatch } from "react-redux";

// import { all } from "../store/ searchParamsSlice";
// import { useFetchSearch } from "../query";
// import { useBreedList } from "../hooks";

// import { Results } from "../components";

// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// const Home = () => {
//   const dispatch = useDispatch();

//   const adoptedPet = useSelector((state) => state.adoptedPet.value);
//   const searchParams = useSelector((state) => state.searchParams.value);

//   const { data } = useFetchSearch(searchParams, {
//     onSuccess: () => {},
//     onError: () => {
//       console.log("Error");
//     },
//   });
//   console.log("data", data);
//   const [breeds] = useBreedList();

//   return (
//     <div className="search-params">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const formData = new FormData(e.target);
//           const obj = {
//             animal: formData.get("animal") ?? "",
//             breed: formData.get("breed") ?? "",
//             location: formData.get("location") ?? "",
//           };
//           dispatch(all(obj));
//         }}
//       >
//         {adoptedPet ? (
//           <div className="pet image-container">
//             <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
//           </div>
//         ) : null}
//         <label htmlFor="location">
//           Location
//           <input
//             className="search-input"
//             type="text"
//             id="location"
//             placeholder="Location"
//             name="location"
//           />
//         </label>

//         <label htmlFor="animal">
//           Animal
//           <select className="search-input" id="animal" name="animal">
//             <option />
//             {ANIMALS.map((animal) => (
//               <option key={animal}>{animal}</option>
//             ))}
//           </select>
//         </label>

//         <label htmlFor="breed">
//           Breed
//           <select
//             className="search-input grayed-out-disabled"
//             disabled={!breeds?.length}
//             id="breed"
//             name="breed"
//           >
//             <option />
//             {breeds.map((breed) => (
//               <option key={breed} value={breed}>
//                 {breed}
//               </option>
//             ))}
//           </select>
//         </label>

//         <button>Submit</button>
//       </form>
//       <Results pets={data} />
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import { SearchIcon } from "../assets/images";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        Find
        <span> the perfect pet </span>
        <div></div>
      </div>
      <div>that fits you</div>
      <Link to="/pets">
        <div>
          <span>
            <SearchIcon className="w-6 h-6" />
            Start Looking
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Home;

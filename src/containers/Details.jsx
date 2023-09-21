import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adopt } from "../store/adoptedPetSlice";
import { usePetDetails } from "../query";
import { Modal, Carousel } from "../components";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, data } = usePetDetails(id);
  const pet = data?.pets[0];

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <Carousel images={pet?.images} />
      <div>
        <h1>{pet?.name}</h1>
        <h2>{`${pet?.animal} — ${pet?.breed} — ${pet?.city}, ${pet?.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet?.name}</button>
        <p>{pet?.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet?.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pet));
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Details;

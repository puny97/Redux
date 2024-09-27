import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, showPopUp, setShowPopUp }) => {
  const allUsers = useSelector((state) => state.app.users);
  const [user] = allUsers.filter((user) => user.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          onClick={() => setShowPopUp(false)}
          className="innerElement"
          id="button"
        >
          Close
        </button>
        <h2 className="innerElement">{user.name}</h2>
        <h3 className="innerElement">{user.email}</h3>
        <h4 className="innerElement">{user.age}</h4>
        <p className="innerElement">{user.gender}</p>
      </div>
    </div>
  );
};

export default CustomModal;

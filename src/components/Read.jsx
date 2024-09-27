import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readUser, deleteUser } from "../features/userDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import "./CustomModal.css";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading) return <h2>Loading</h2>;
  return (
    <div>
      {showPopUp && (
        <CustomModal
          id={id}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      )}
      <div className="w-50 mx-auto">
        <h2 className="w-50 mx-auto">All Data</h2>
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={(e) => {
            setRadioData("");
          }}
        />
        <label className="form-check-label mx-2">All</label>
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          checked={radioData === "Male"}
          onChange={(e) => {
            setRadioData(e.target.value);
          }}
        />
        <label className="form-check-label mx-2">Male</label>
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          checked={radioData === "Female"}
          onChange={(e) => {
            setRadioData(e.target.value);
          }}
        />
        <label className="form-check-label mx-2">Female</label>
        {users &&
          users
            .filter((user) => {
              if (searchData.length === 0) {
                return user;
              } else {
                return user.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((user) => {
              if (radioData === "Male") {
                return user.gender === radioData;
              } else if (radioData === "Female") {
                return user.gender === radioData;
              } else {
                return user;
              }
            })
            .map((user) => {
              return (
                <div key={user.id} className="card w-50 mx-auto my-5">
                  <div className="card-body mx-auto">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {user.email}
                    </h6>
                    <p className="card-text">{user.gender}</p>
                    <button
                      id="button"
                      className="card-link"
                      onClick={() => {
                        setId(user.id);
                        setShowPopUp(true);
                      }}
                    >
                      View
                    </button>
                    <Link
                      to={`/edit/${user.id}`}
                      className="card-link"
                      id="button"
                      style={{ textDecoration: "none" }}
                    >
                      Edit
                    </Link>
                    <button
                      id="button"
                      onClick={() => dispatch(deleteUser(user.id))}
                      className="card-link"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Read;

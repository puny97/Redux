import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const allUsers = useSelector((state) => state.app.users);
  const [updatedUser, setUpdatedUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const singleUser = allUsers.filter((user) => user.id === id);
    setUpdatedUser(singleUser[0]);
  }, []);

  const getUpdatedData = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedUser));
    console.log(updatedUser);
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 mx-auto d-flex">Edit The Form</h2>
      <form className="w-50 mx-auto mt-5" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updatedUser && updatedUser.name}
            onChange={getUpdatedData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updatedUser && updatedUser.email}
            onChange={getUpdatedData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updatedUser && updatedUser.age}
            onChange={getUpdatedData}
          />
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={updatedUser && updatedUser.gender === "Male"}
            onChange={getUpdatedData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={updatedUser && updatedUser.gender === "Female"}
            onChange={getUpdatedData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;

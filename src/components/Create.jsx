import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getUsersData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    console.log(users);
    formRef.current.reset();
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 mx-auto d-flex">Fill The Form</h2>
      <form ref={formRef} className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUsersData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUsersData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getUsersData}
          />
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onChange={getUsersData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            onChange={getUsersData}
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

export default Create;

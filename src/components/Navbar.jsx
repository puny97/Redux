import React, { useState } from "React";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const users = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUser(searchData));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h4 className="navbar-brand">RTK</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link">
                All Posts ({users.length})
              </Link>
            </li>
          </ul>
          <form className="d-flex w-50" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search user by Name"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

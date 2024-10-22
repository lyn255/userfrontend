import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/register", user);
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Register</button>
            <Link className="btn btn-outline-danger mx-2" to="/login">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

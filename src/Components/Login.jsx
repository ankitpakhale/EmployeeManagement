import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Login</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/login" className="h5 text-white">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="card ms-auto me-auto col-4">
            <h1 className="text-white bg-primary text-center">Login</h1>
            <form className="p-2">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Employee Email"
                />
              </div>
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Enter Your Password"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

import React from "react";
import { Link } from "react-router-dom";
import TeamMemberBox from "../Container/TeamMemberBox";
const Team = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                Team Members
              </h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/team" className="h5 text-white">
                Team Members
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card ms-auto me-auto col-10">
        <h1 className="text-white bg-primary text-center">Add Employee</h1>
        <form className="p-2">
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Fist Name"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Contect Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Contect Number"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  placeholder="Address"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Technology
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Technology</option>
                  <option value="Android">Android</option>
                  <option value="React JS">React JS</option>
                  <option value="PHP">PHP</option>
                  <option value="Python">Python</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Position
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Position</option>
                  <option value="Hr.">Hr.</option>
                  <option value="Sr.">Sr.</option>
                  <option value="Jr.">Jr.</option>
                  <option value="Trainee.">Trainee.</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Joining Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="nameFormControlInput1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Bank Account Number"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  PF Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="PF Number"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  CIF Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="CIF Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Salary
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Salary"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="nameFormControlInput1"
                />
              </div>
            </div>
            <div className="col-4"></div>
          </div>

          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>
      </div>

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Team Members
            </h5>
            <h1 className="mb-0">
              Professional Stuffs Ready to Help Your Business
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <TeamMemberBox
                img={require("../Assets/img/team-1.jpg")}
                name={"ABC"}
                designation={"IT Engineer"}
              />
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <TeamMemberBox
                img={require("../Assets/img/team-2.jpg")}
                name={"PQR"}
                designation={"IT Engineer"}
              />
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <TeamMemberBox
                img={require("../Assets/img/team-3.jpg")}
                name={"XYZ"}
                designation={"IT Engineer"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;

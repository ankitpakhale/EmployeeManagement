import React from "react";
import { Link } from "react-router-dom";
import TaskBox from "../Container/TaskBox";

const Task = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Task</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/task" className="h5 text-white">
                Task
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="card ms-auto me-auto col-4">
            <h1 className="text-white bg-primary text-center">Add Task</h1>
            <form className="p-2">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Task Name"
                />
              </div>
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
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="nameFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Task Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Task Description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <TaskBox
          title={"Demo"}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis illum esse veniam provident error magnam iste cum quos omnis repellat eius accusantium distinctio numquam consequuntur! Cumque excepturi ipsam temporibus."
          }
        />
      </div>
    </>
  );
};
export default Task;

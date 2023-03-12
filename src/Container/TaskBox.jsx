import React from "react";
import TaskModel from "../Layouts/TaskModel";

const TaskBox = ({ title, description }) => {
  return (
    <>
      <div className="card ms-auto me-auto col-8 p-3">
        <div className="row">
          <div className="col-3">
            <h2 className="text-primary">Task Name</h2>
            {title}
          </div>
          <div className="col-8">
            <h2 className="text-primary">Description</h2>
            {description}
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#myModalView"
            >
              View
            </button>
            <br />
            <br />
          </div>
          <TaskModel />
        </div>
      </div>
    </>
  );
};

export default TaskBox;

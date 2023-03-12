import React from "react";

const TeamMemberBox = ({ img, name, designation }) => {
  return (
    <>
      <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={img} alt="" />
          <div className="team-social">
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
              <i className="fab fa-twitter fw-normal"></i>
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
              <i className="fab fa-facebook-f fw-normal"></i>
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
              <i className="fab fa-instagram fw-normal"></i>
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href="">
              <i className="fab fa-linkedin-in fw-normal"></i>
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <h4 className="text-primary">{name}</h4>
          <p className="text-uppercase m-0">{designation}</p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberBox;

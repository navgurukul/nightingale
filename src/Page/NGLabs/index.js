import React from "react";
import Vector from "./assets/Vector";
import "./style.css";
import "../../Global.css"
import svgbackground from "./assets/bg.svg";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import Timeline from "./assets/Timeline.png";

function NgLabs() {
  return (
    <div className="ng-labs d-flex flex-column justify-content-center">
      <div className="main mt-7 mb-2">
        <div className="container ">
          <div className="row">
            <div className="col-md d-flex flex-column justify-content-center fs-1.2 align-items-center align-items-md-start">
              <h2 className="mb-3 fs-2.25 section-head ">
                Nurturing High-Impact Projects in the Non-Profit Space
              </h2>
              <p className="f-Nuni">
                We aim to work on various experiments and scale the ones that
                become successful. NavGurukul labs will seed open source
                projects that we believe can directly or indirectly contribute
                to the improvement of education system in India
              </p>
              <button className="btn f-Nuni fw-semiBold btn-primary text-white ng-labs-btn">
                Seek Incubation Support
              </button>
            </div>
            <div className="col-md col-sm-12 col-img">
              <div className="right position-relative">
                <img src={svgbackground} alt="" />
                <Vector />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-0 fs-2.5 section-head">Current Projects</h2>
        <hr className="heading-hr" />
        <div className="container w-70 my-5 mb-2">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center my-3">
              <div className="card p-4 d-flex flex-column justify-content-center align-items-center text-center mb-1 rounded border-white">
                <img src={icon1} alt="" />
                <h2 className="fs-1.7 mt-2 fw-bold">Meraki</h2>
                <p className="fs-1.2 f-Nuni fw-400">Some outrageous impact of the project</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center my-3">
              <div className="card p-4 d-flex flex-column justify-content-center align-items-center text-center mb-1 rounded border-white">
                <img src={icon2} alt="" />
                <h2 className="fs-1.7 mt-2 fw-bold">Conscious Ad Network</h2>
                <p className="fs-1.2 f-Nuni fw-400">Some outrageous impact of the project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline my-4 d-flex flex-column justify-content-center align-items-center mb-1">
        <h2 className="section-head">Project Timeline (Next 12 months)</h2>
        <hr className="heading-hr" />
        <div className="container w-75 my-5 mb-2 d-flex flex-column justify-content-center align-items-center">
          <img src={Timeline} alt="" className="mb-5" />
        </div>
      </div>
      <div className="idea d-flex flex-column justify-content-center align-items-center mb-4">
        <h2 className="mb-4 section-head">Have an Idea in Works?</h2>

        <button className="btn btn-primary f-Nuni fw-semiBold text-white ng-labs-btn">
          Seek Incubation Support
        </button>
      </div>
    </div>
  );
}

export default NgLabs;

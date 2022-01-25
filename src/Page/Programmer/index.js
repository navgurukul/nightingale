import React, { useState } from "react";
import "./style.css";
import "../../Global.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import video from "./assets/video.mp4";

function Programmer() {
  const [state, setState] = useState("");
  return (
    <div className="programmers d-flex flex-column justify-content-center">
      <div className="header w-100 ">
        <div
          className="alert alert-danger d-flex justify-content-between py-3 align-items-center"
          role="alert"
        >
          <h2 className="fs-1.5 section-head text-black fw-bold mb-0">
            Programmer’ Gurukul
          </h2>
          <span className="desktop d-block f-Nuni  fs-1.2 text-primary fw-bold">
            Change Gurukul
          </span>
        </div>
      </div>
      <div className="hero-P container my-2 my-sm-5">
        <div className="row d-flex justify-content-between flex-md-column-reverse flex-lg-row flex-md-row">
          <div className="col left-P d-flex flex-column align-items-start">
            <h2 className="section-head">
              Navgurukul One-Year Software Engineering Course
            </h2>
            <div className="input d-flex flex-column justify-content-center align-items-start text-left p-1 w-90">
              {/* <label
              className="text-muted my-1 fs-sm-1.2 fs-1.1"
              htmlFor="number"
            >
              Phone Number
            </label> */}
              {/* <input
              className="border-0 w-100 p-2 fs-1.1 text-black mb-2"
              type="text"
              placeholder=""
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            /> */}
              <p className="f-Nuni my-2">
                Study in an immersive environment at one of our campuses in
                Pune, Bengaluru or Dharamshala (for boys) with peer learning and
                mentors helping you at each turn.
              </p>
              <p className="f-Nuni my-2">
                To be a part of the Gurukul, all it takes is some determination
                and potential.
              </p>
              <button
                className="btn btn-primary text-white w-100 my-1 fs-sm-1.2 fs-1.1 ng-labs-btn"
                onClick={() => {
                  setState("");
                }}
              >
                Take Test
              </button>
              {/* <div className="text fs-sm-1.2 fs-1.1 my-1">
              Had a test already?{" "}
              <span className="text-primary">Check status here</span>
            </div> */}
            </div>
          </div>
          <div className="programmers-main-video col d-flex justify-content-center">
            <video
              src={video}
              width="500px"
              height="300px"
              className="programmers-main-video"
              controls
            ></video>
          </div>
        </div>
      </div>
      {/* <div className="benefits d-flex flex-column justify-content-center align-items-center my-2 my-sm-5 ">
      <h2 className="fw-semiBold section-head">Course Benefits</h2>
      <hr className="heading-hr" />
      <div className="container w-80 mt-4">
        <div className="row d-flex flex-md-row flex-column justify-content-center align-items-center ">
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center text-center my-4">
            <div className="card border-0 d-flex justify-content-center align-items-center p-3">
              <img src={icon1} alt="" className="pt-2" />
              <p className="mt-2">
                Some outrageous benefit that breaks the fabric of tech
                industry
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center text-center my-4">
            <div className="card border-0 d-flex justify-content-center align-items-center p-3">
              <img src={icon2} alt="" className="pt-2" />
              <p className="mt-2">
                Some outrageous benefit that breaks the fabric of tech
                industry
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center text-center my-4">
            <div className="card border-0 d-flex justify-content-center align-items-center p-3">
              <img src={icon2} alt="" className="pt-2" />
              <p className="mt-2">
                Some outrageous benefit that breaks the fabric of tech
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="test-p my-2 mb-sm-5 d-flex flex-column align-items-center">
        <h2 className="fw-semiBold section-head">
          Conduct a Test in Your Locality
        </h2>
        <hr className="heading-hr" />
        <div className="container w-100 my-4 d-flex align-items-center justify-content-center">
          <div className="row d-flex flex-md-row flex-column justify-content-center w-100">
            <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
              <div className="card p-3 d-flex flex-column mh-10 bg-bg-card-1 justify-content-top align-items-center text-left text-sm-center w-100 rounded border-0 ">
                <h2 className="fw-bold my-1 section-head text-center">
                  Online Tests
                </h2>
                <p className="my-1 section-para">
                  Anyone with a smartphone or access to Laptop/Computer can give
                  the test online by registering their phone number
                </p>
              </div>
            </div>
            {/* <div className="col-2"></div> */}
            <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
              <div className="card p-3 d-flex flex-column mh-10 justify-content-top bg-bg-card-2 align-items-center text-left text-sm-center w-100 rounded border-0 second-card">
                <h2 className="fw-bold my-1 section-head text-center">
                  Offline Tests
                </h2>
                <p className="my-1 section-para">
                  If you are proctoring the exam, we will send you the test
                  papers. Upon completion, you can simply send the photos of the
                  answer and student information sheet to us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="students my-2 my-sm-5 d-flex flex-column align-items-center">
        <h2 className="fw-semiBold">Hear From Our Students</h2>
        <hr className="heading-hr mb-3" />
        <div className="container w-100 mt-3  d-flex justify-content-center">
          <div className="row d-flex flex-md-row flex-column justify-content-center w-100 student-video-parent">
            <div className="col-12 col-md-4 my-3 d-flex justify-content-center ">
              <video src={video} width="330px" controls></video>
            </div>
            <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
              <video src={video} width="330px" controls></video>
            </div>
            <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
              <video src={video} width="330px" controls></video>
            </div>
          </div>
        </div>
      </div>
      <div className="next-step my-2 my-sm-5 d-flex flex-column align-items-center">
        <h2 className="fw-semiBold mb-3 section-head">
          Ready for the Next Step?
        </h2>
        {/* <hr className="heading-hr mb-3 mt-3" /> */}
        <div className="input d-flex flex-column justify-content-center align-items-center mt-3 text-left w-100  ">
          {/* <label className="text-muted my-1 fs-1.1" htmlFor="number">
          Phone Number
        </label>
        <input
          className="border-0 w-100 p-2 fs-1.1 text-black mb-2"
          type="text"
          placeholder=""
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        /> */}
          <button
            className="btn btn-primary f-Nuni fw-semiBold text-white w-100 my-1 fs-1.1 ng-labs-btn"
            onClick={() => {
              setState("");
            }}
          >
            Take Test
          </button>
          {/* <div className="text fs-1.1 my-1">
          Had a test already?{" "}
          <span className="text-primary">Check status here</span>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Programmer;

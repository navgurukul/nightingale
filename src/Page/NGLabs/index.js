import axios from "axios";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Vector from "./assets/Vector";
import "./style.css";
import "../../Global.css";
import svgbackground from "./assets/bg.svg";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import Timeline from "./assets/Timeline.png";

function NgLabs() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/projects.json`,
    }).then((res) => {
      setProjects(res.data);
    });
  }, []);
  const [projects, setProjects] = useState([]);
  return (
    <div className="ng-labs d-flex flex-column justify-content-center">
      <div className="main mt-7 mb-2">
        <div className="container px-0 px-md-3">
          <div className="row">
            <div className="col-md d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h3 className="mb-3">
                Nurturing High-Impact Projects in the Non-Profit Space
              </h3>
              <p className="mb-3">
                We aim to work on various experiments and scale the ones that
                become successful. NavGurukul labs will seed open source
                projects that we believe can directly or indirectly contribute
                to the improvement of education system in India
              </p>
              <button className="btn btn-primary text-white regular-btn">
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
        <h3 className="mb-3">Active Projects</h3>
        <hr className="heading-hr mb-3" />
        <div className="container px-0 mt-3 w-100">
          <div className="row">
            {Object.keys(projects).length ? (
              Object.keys(projects).map((item) => {
                if (projects[item].Status === "Active") {
                  // console.log(projects[item]);
                  return (
                    <div className="col-md-3 px-0 d-flex justify-content-center">
                      <div
                        className="card w-100"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(projects[item]["Deployed URL"]);
                        }}
                      >
                        <div className="image-container">
                          <img src={projects[item].Thumbnail} />
                        </div>
                        <hr className="card_partion_line" />
                        <div className="p-3">
                          <p className="fw-bold mb-2">
                            {projects[item].Workstream}
                          </p>
                          <p className="description mb-2">
                            {projects[item]["Value prop"]}
                          </p>
                          {/* <span className="status">Active</span> */}
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>
          {/* <div className="text-start text-md-center">
            <p>
              Check out our full list of
              <a
                className="text-primary fw-bold"
                href="https://www.notion.so/navgurukul/Projects-85a6f1c9d26643be9d4054ec49704c28"
              >
                {" "}
                active, ongoing and planned projects
              </a>
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="timeline my-4 d-flex flex-column justify-content-center align-items-center mb-1">
        <h3 className="">Project Timeline (Next 12 months)</h3>
        <hr className="heading-hr" />
        <div className="container w-75 my-5 mb-2 d-flex flex-column justify-content-center align-items-center">
          <img src={Timeline} alt="" className="mb-5" />
        </div>
      </div> */}
      <div className="container idea d-flex flex-column justify-content-center align-items-center px-0 px-md-3">
        <h3 className="mb-4">Have an Idea in Works?</h3>

        <button className="btn btn-primary text-white regular-btn">
          Seek Incubation Support
        </button>
      </div>
    </div>
  );
}

export default NgLabs;

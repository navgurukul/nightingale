import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function JobCourse() {
  return (
    <main className="job-course-page">
      <h2 className="job-course-title section-head fs-3">
        Gauranteed Job Courses
      </h2>
      <div className="job-course-content w-100 d-flex justify-content-center">
        <p className="w-40 section-para">
          Fully-funded one-year software engineering program to youth from
          low-income families.
        </p>
      </div>
      <p className="job-course-subtitle">Choose Your Gurukul</p>
      <div className="container ">
        <div className="row">
          <div className="col my-3 col-md-6">
            <Link to="/programmer ">
              <div className="card programmer-img-card">
                <div class="card-body p-0 pt-3">
                  <img
                    src={require("./assets/programmers.png").default}
                    className="job-course-img"
                  />
                  <p className="mt-3 mb-3 px-2 fs-1.1 section-para">
                    Programmers’ Gurukul
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col my-3 col-md-6">
            <Link to="/designer">
              <div className="card design-img-card">
                <div class="card-body p-0 pt-3">
                  <img
                    src={require("./assets/designers.png").default}
                    className="job-course-img"
                  />
                  <p className="mt-3 px-2 mb-3 fs-1.1 section-para">
                    Designers’ Gurukul
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="coming-soon section-para">
        <p>Coming soon: Justice Gurukul</p>
      </div>
    </main>
  );
}

export default JobCourse;

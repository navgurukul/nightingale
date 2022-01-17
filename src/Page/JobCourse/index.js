import React from "react";
import "./styles.css";

function JobCourse() {
  return (
    <main className="job-course-page">
      <h2 className="job-course-title">Gauranteed Job Courses</h2>
      <div className="job-course-content w-100 d-flex justify-content-center">
        <p className="w-40">
          Fully-funded one-year software engineering program to youth from
          low-income families.
        </p>
      </div>
      <p className="job-course-subtitle">Choose Your Gurukul</p>
      <div className="container ">
        <div className="row">
          <div className="col my-3 col-md-6">
            <div className="card programmer-img-card">
              <div class="card-body p-0 pt-3">
                <img
                  src={require("./assets/programmers.png").default}
                  className="job-course-img"
                />
                <p className="mt-3 mb-3 fs-1.1">Programmers’ Gurukul</p>
              </div>
            </div>
          </div>
          <div className="col my-3 col-md-6">
            <div className="card design-img-card">
              <div class="card-body p-0 pt-3">
                <img
                  src={require("./assets/designers.png").default}
                  className="job-course-img"
                />
                <p className="mt-3 mb-3 fs-1.1" >Designers’ Gurukul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coming-soon">
        <p>Coming soon: Justice Gurukul</p>
      </div>
    </main>
  );
}

export default JobCourse;

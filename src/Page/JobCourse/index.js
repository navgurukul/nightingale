import React from "react";
import "./styles.css";

function JobCourse() {
  return (
    <main className="job-course-page">
      <h2 className="job-course-title">Gauranteed Job Courses</h2>
      <div className="job-course-content">
        <p>
          Fully-funded one-year software engineering program to youth from
          low-income families.
        </p>
      </div>
      <p className="job-course-subtitle">Who would you like to become?</p>
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <div className="card programmer-img-card">
              <div class="card-body">
                <img
                  src={require("./assets/programmers.png").default}
                  className="job-course-img"
                />
                <p>Programmers’ Gurukul</p>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="card design-img-card">
              <div class="card-body">
                <img
                  src={require("./assets/designers.png").default}
                  className="job-course-img"
                />
                <p>Designers’ Gurukul</p>
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

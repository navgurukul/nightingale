import React from "react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";

function NgHiring() {
  return (
    <main className="ng-hiring-page">
      <div className="page-content">
        <section className="hiring-page-section mb-5">
          <h2 className="section-head mt-5">Hire from Us</h2>
          <hr className="heading-hr" />
          <div className="mt-5">
            <img src={backgroundImg} className="backgroundImg" />
          </div>
          <div className="mt-4 mb-2 d-flex w-100 justify-content-center hiring-page-content">
            <p className="section-para w-50">
              Our Software Engineering and Graphic Design graduates are skilled
              to be productive from Day 1. Take a look at these{" "}
              <b className="fw-bold"> diamond in the roughs</b> who are polished
              gems now.
            </p>
          </div>
          <button
            type="button"
            class="btn mb-4 f-Nuni fw-semiBold py-2 ng-labs-btn"
          >
            Download Placement Brief
          </button>
          <div className="hiring-page-content">
            <p className="section-para mb-5">
              Contact us directly at{" "}
              <a href="#" className="link">
                tnp@navgurukul.org
              </a>{" "}
              for hiring or freelancing projects.
            </p>
          </div>
        </section>
        {/* <section className="hiring-page-section my-5">
          <h2 className="hiring-section-title section-head mt-3">
            Meet Our Recent Graduates
          </h2>
          <hr className="heading-hr" />
        </section> */}
      </div>
    </main>
  );
}

export default NgHiring;

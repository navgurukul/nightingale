import React from "react";
import "./styles.css";

function NgHiring() {
  return (
    <main className="ng-hiring-page">
      <div className="page-content">
        <section className="hiring-page-section">
          <h2 className="hiring-section-title">Hire from Us</h2>
          <div className="title-underliner"></div>
          <div>
            <img
              src={require("./assets/Ellipse_1.png").default}
              className="Ellipse_1"
            />
            <img
              src={require("./assets/Ellipse_2.png").default}
              className="Ellipse_2"
            />
            <img
              src={require("./assets/Ellipse_3.png").default}
              className="Ellipse_3"
            />
            <img src={require("./assets/bg.png").default} className="bg-img" />
          </div>
          <div className="hiring-page-content">
            <p>
              We are a collective of full timers and volunteers that form the
              backbone aiming to bring affordable education to underprivileged
              girl students across India.
            </p>
          </div>
          <button type="button" class="hiring-page-button">
            Download Placement Brief
          </button>
          <div className="hiring-page-content">
            <p>
              Contact us directly at{" "}
              <a href="#" className="link">
                tnp@navgurukul.org
              </a>{" "}
              for hiring or freelancing projects.
            </p>
          </div>
        </section>
        <section className="hiring-page-section">
          <h2 className="hiring-section-title">Meet Our Recent Graduates</h2>
          <div className="title-underliner"></div>
        </section>
      </div>
    </main>
  );
}

export default NgHiring;

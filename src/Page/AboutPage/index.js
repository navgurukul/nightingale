import React from "react";
import "./styles.css";

function AboutPage() {
  return (
    <main className="about-page">
      <div className="page-content">
        <section className="page-section">
          <h2 className="section-title">Our Story</h2>
          <div className="underliner"></div>
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
          <div className="about-page-content">
            <p>
              Started in 2016, Navgurukul runs one-year residential course for
              students from underserved and diverse communities. Students after
              pursuing our course are awarded Certificate in Software
              Programming.
            </p>
            <p>
              In last five years, more than 160 students from marginalised areas
              have got jobs as Software Programs and have donated back more than
              28 Lacs in donation. We have diversified to add School of Design
              We have also started initiatives to conduct experiments for
              popular products in a non-profit space.
            </p>
          </div>
        </section>
        <section className="page-section">
          <h2 className="section-title">Vision</h2>
          <div className="underliner"></div>
          <div className="about-content">
            <p>
              We envision a world where everyone has access to an affordable
              world class education that enables them to live up to their
              highest potential
            </p>
          </div>
        </section>
        <section className="page-section">
          <h2 className="section-title">Our Values</h2>
          <div className="underliner"></div>
          <div className="about-content">
            <p>
              In order to follow through on our commitments, achieve our
              mission, and realise our vision, we’ve created a set of values
              made easy to remember through our acronym VELOCITY.
            </p>
            <p>
              Let’s break it down: V - Velocity, E - Entrepreneurial Mindset, L
              - Love for customers, O - Out of the box thinking, C -
              Collaboration, I - Impact, T - Trust, Y - You.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;

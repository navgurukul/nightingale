import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkedIn from "../Components/LinkedIn";
import "./styles.css";

function TeamPage() {
  const [team, setTeam] = useState({});
  const [selectedTeam, setSelectedTeam] = useState("Core Team");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://navgurukul.github.io/tarabai-shinde/data/ng_team.json")
      .then((res) => {
        console.log("Fetched team data:", res.data);
        setTeam(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  const filterTeam = (team) => {
    return Object.keys(team)
      .filter(
        (item) =>
          team[item].Association !== "Volunteer" &&
          team[item].Team === selectedTeam
      )
      .map((key) => team[key]);
  };

  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section d-flex flex-column justify-content-center align-items-center">
          <h5 className="section-head mb-2">Our team</h5>
          <div className="title-line"></div>
          <div className="team-page-content mt-3">
            <p className="section-para ptag">
              We are a collective of full-timers and volunteers who form the
              backbone of a movement aiming to bring affordable education to
              underprivileged girl students across India. Our workforce
              composition is consciously diverse and inclusive, with 65% of our
              team members being NavGurukul Alumni, over 67% of team members
              being women, and those who identify in the gender spectrum as
              non-binary.
            </p>
          </div>
          <div className="container mt-3 w-lg-20 w-100">
            <div className="row justify-content-center">
              <div className="col-lg-3 mb-3 mb-lg-0" >
                <button
                  type="button"
                  className="btn regular-btn w-100"
                  style={{
                    maxWidth: "211px",
                    minWidth: "150px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://recruiterflow.com/navgurukul/jobs",
                      "_blank"
                    );
                  }}
                >
                  Careers at Navgurukul
                </button>
              </div>
              <div className="col-lg-3 mt-3 mt-lg-0">
                <button
                  type="button"
                  className="btn section-para dashed-btn w-100"
                  style={{
                    maxWidth: "211px",
                    minWidth: "150px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScHvysncnhJkSMtpdpGl_uPhJWlE81hp6l5m2mvuE1hoxX-dQ/viewform",
                      "_blank"
                    );
                  }}
                >
                  Volunteer with us
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section w-100 mt-4 d-flex flex-column justify-center align-items-center">
          <div className="container px-0 team-info-cards-container mt-4">
            <div className="row contaner-wrapper-team">
              <div>
                <div className="tabs mb-4 text-left">
                  <h5 className="team-heading">Team</h5>
                  <ul className="nav nav-tabs flex-column">
                    {[
                      "Core Team",
                      "Ghar",
                      "Residential Programme",
                      "People and Culture",
                      "Placements",
                      "Operations",
                      "Academics",
                      "Admissions",
                      "LXD & ETC",
                    ].map((teamName) => (
                      <li
                        key={teamName}
                        className={`nav-item team-list-item ${selectedTeam === teamName ? "active" : ""
                          }`}
                        onClick={() => setSelectedTeam(teamName)}
                      >
                        <span className="nav-link text-left mt-2">{teamName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="container-fluid w-100 mt-4">
                <h5 className="team-heading mb-2" style={{ position: "relative", bottom: "30px" }}>{selectedTeam}</h5>
                <div className="row g-5">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    filterTeam(team).map((member, index) =>
                      <div key={index} className="col-lg-4 col-md-6">
                        <div className="team-info-card ">
                          <div className="d-flex justify-content-center">
                            {member.Photo && (
                              <img
                                className="team-info-card-img"
                                src={member.Photo}
                                alt={member.Name}
                              />
                            )}
                          </div>
                          <p className="team-info-card-title body" style={{ color: member.Name ? "inherit" : "grey" }}>
                            {member.Name || "Awaiting Member's Name"}
                          </p>
                          <p className="team-info-card-designation " style={{ color: member.Designation ? "inherit" : "grey" }}>
                            {member.Designation || "Awaiting description from team member"}
                          </p>
                          {member.Linkedin && (
                            <a
                              href={member.Linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedIn />
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default TeamPage;



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
          team[item].Team === selectedTeam &&
          team[item].Photo 
      )
      .map((key) => team[key]);
  };

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section d-flex flex-column justify-content-center align-items-center">
          <h5 className="section-head mb-2">Our team</h5>
          <div className="title-line"></div>
          <div className="team-page-content mt-4">
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
          <div className="row justify-content-center gx-0 gx-lg-3 mt-4">
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 button-container">
              <button
                type="button"
                className="btn regular-btn w-100"
                onClick={() => openLinkInNewTab("https://recruiterflow.com/navgurukul/jobs")}
              >
                Careers at Navgurukul
              </button>
            </div>
            <div className="col-12 col-lg-auto mt-3 mt-lg-0 button-container">
              <button
                type="button"
                className="btn section-para dashed-btn w-100"
                onClick={() => openLinkInNewTab("https://recruiterflow.com/navgurukul/jobs/112")}
              >
                Volunteer with us
              </button>
            </div>
          </div>
        </section>
        <section className="team-section w-100 mt-4 d-flex flex-column justify-center align-items-center">
          <div className="container px-0 team-info-cards-container mt-4">
            <div className="row contaner-wrapper-team">
              <div>
                <div className="tabs mb-4 text-left">
                  <h5 className="team-heading">Team</h5>
                  <ul className="nav nav-tabs  flex-column">
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
                        className={`nav-item team-list-item ${selectedTeam === teamName ? "active" : ""}`}
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
                        <div className="team-info-card">
                          <div className="d-flex justify-content-center">
                            <img
                              className="team-info-card-img"
                              src={member.Photo}
                              alt={member.Name}
                            />
                          </div>
                          <p className="team-info-card-title body">
                            {member.Name}
                          </p>
                          <p className="team-info-card-designation">
                            {member.Designation}
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



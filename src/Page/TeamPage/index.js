
import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Tippy from "@tippyjs/react";
import LinkedIn from "../Components/LinkedIn";
import Twitter from "../Components/Twitter";

function shuffleObject(obj) {
  let newObj = {};
  var keys = Object.keys(obj);
  keys.sort(() => Math.random() - 0.5);
  keys.forEach((k) => {
    newObj[k] = obj[k];
  });
  return newObj;
}

function Popup(props) {
  return (
    <div className="description-popup">
      <div className="d-flex align-items-center">
        <p className="fw-bold mt-3 mr-3">{props.Name}</p>
        {props.twitter ? (
          <a href={props.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        ) : null}
      </div>
      <p
        className="mt-0"
        style={
          props.Content === "Awaiting content from team member"
            ? { color: "grey" }
            : {}
        }
      >
        {props.Content}
      </p>
    </div>
  );
}

function TeamPage() {
  const [team, setTeam] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("Core Team");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://navgurukul.github.io/tarabai-shinde/data/ng_team.json`)
      .then((res) => {
        setTeam(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, [selectedTeam]);

  console.log(loading);
  const filterTeam = (team) => {
    return Object.keys(team).filter((item) => {
      console.log(selectedTeam, "team");
      return (
        team[item].Association !== "Volunteer" &&
        team[item].Team === selectedTeam
      );
    });
  };

  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section d-flex flex-column justify-content-center align-items-center">
          <h3 className="section-head mb-2">Our team</h3>
          <div className="title-line"></div>

          <div className="team-page-content">
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
          <div className="container">
            <div className="row">
              <div className="col-md team-button-container d-flex justify-content-center align-items-center col-sm-12">
                <button
                  type="button"
                  className="btn regular-btn"
                  style={{ height: "48px", width: "211px" }}
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
                <button
                  type="button"
                  className="btn section-para btn-primary mx-3 my-2 dashed-btn"
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
                        className={`nav-item team-list-item ${
                          selectedTeam === teamName ? "active" : ""
                        }`}
                        onClick={() => {
                          console.log(`Clicked on ${teamName}`);
                          setSelectedTeam(teamName);
                        }}
                      >
                        <span className="nav-link text-left">{teamName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="team-container-list">
                <h5 className="team-heading">{selectedTeam}</h5>
                <div className="row team-container mt-4">
                  {loading ? (
                    <p>Loading...</p>
                  ) : Object.keys(shuffleObject(team)).length ? (
                    filterTeam(team).map((item, index) => {
                      if (
                        team[item].Photo &&
                        team[item].Name &&
                        team[item].Content &&
                        team[item].Designation &&
                        team[item].Association !== "Not Active" &&
                        team[item].Association !== "null"
                      ) {
                        return (
                          <Tippy
                            key={index}
                            animation="fade"
                            interactive={true}
                            duration={[500, 0]}
                            placement={
                              window.screen.availWidth < 650 ? "bottom" : "right"
                            }
                            content={
                              <Popup
                                Name={
                                  team[item].Name || "Awaiting Member's Name"
                                }
                                Content={
                                  team[item].Content ||
                                  "Awaiting content from team member"
                                }
                                linkedin={team[item].Linkedin}
                                twitter={team[item].Twitter}
                              />
                            }
                          >
                            <div className="Card-content flex flex-column col-12 col-md-4 mb-4">
                              <div className="card card-details">
                                <img
                                  className="card-img-top team-info-card-img img-card-hover"
                                  src={team[item].Photo}
                                  alt={team[item].Name.substring(
                                    0,
                                    team[item].Name.indexOf(" ")
                                  )}
                                />
                                <p
                                  style={team[item].Name ? {} : { color: "grey" }}
                                  className="team-info-card-title"
                                >
                                  {team[item].Name
                                    ? team[item].Name
                                    : "Awaiting Member's Name"}
                                </p>
                                <p
                                  style={
                                    team[item].Designation ? {} : { color: "grey" }
                                  }
                                  className="section-para"
                                >
                                  {team[item].Designation ||
                                    "Awaiting description from team member"}
                                </p>
                                {team[item].Linkedin && (
                                  <a
                                    href={team[item].Linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <LinkedIn />
                                  </a>
                                )}
                              </div>
                            </div>
                          </Tippy>
                        );
                      } else {
                        return null;
                      }
                    })
                  ) : (
                    <p>No team members found.</p>
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


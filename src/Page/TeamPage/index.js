

import React, { useState, useEffect } from "react";
import axios from "axios";
// import LinkedIn from "../Components/LinkedIn";
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
        console.log("object team data", Object.values(res.data)[0]);

        setTeam(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });

  }, []);


  const filterTeam = (team) => {
    console.log("Filtering team with team data:", team);
    if (!team || Object.keys(team).length === 0) {
      console.warn("Team data is empty or not an object");

      return [];
    }

    const filtered = Object.keys(team)
      .filter(
        (key) =>
          team[key].Association !== "Volunteer" &&
          team[key].Team === selectedTeam
      )
      .map((key) => team[key]);

    console.log("Filtered team members:", filtered);
    return filtered;
  };

  const filteredMembers = filterTeam(team);

  return (
    <main className="team-page">
      <div className="team-content">
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
                    filteredMembers.length === 0 ? (
                      <p>No team members found for {selectedTeam}.</p>
                    ) : (
                      filteredMembers.map((member, index) => {
                        const memberName = member['name'] || member['Abhinav Prakash Rai'] || "Awaiting Member's Name";
                        const memberDesignation = member['Teaching Fellow'] || "Awaiting description from team member";
                        const memberPhoto = member[''] || member['Photo'];
                        // const memberLinkedIn = member[''] || member['LinkedIn']; // Adjust as necessary

                        return (
                          <div key={index} className="col-lg-4 col-md-6">
                            <div className="team-info-card">

                              <div className="d-flex justify-content-center">
                                {memberPhoto ? (
                                  <img
                                    className="team-info-card-img"
                                    src={memberPhoto}
                                    alt={memberName}
                                  />
                                ) : (
                                  <p className="team-info-card-title body" style={{ color: memberName ? "inherit" : "grey" }}>
                                    {/* {memberName || "Awaiting Member's Name"} */}
                                  </p>
                                )}
                              </div>
                              <p className="team-info-card-title body">{memberName}</p>
                              <p className="team-info-card-designation">{memberDesignation}</p>
                            </div>
                          </div>
                        );
                      })
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








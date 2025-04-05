import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function TeamPage() {
  const [team, setTeam] = useState({});
  const [selectedTeam, setSelectedTeam] = useState("Core Team");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://navgurukul.github.io/tarabai-shinde/data/ng_team.json")
      .then((res) => {
        setTeam(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  const filterTeam = (teamData) => {
    if (!teamData) return [];

    return Object.values(teamData).filter((member) => {
      const hasEssentialData =
        member.Name?.trim() &&
        member["Teaching Fellow"]?.trim() &&
        member[""]?.trim(); // Image field

      const isInSelectedTeam =
        member.Team === selectedTeam && member.Association !== "Volunteer";

      return hasEssentialData && isInSelectedTeam;
    });
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
                      "Culture"
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
                <h5 className="team-heading mb-2" style={{ position: "relative", bottom: "30px" }}>
                  {selectedTeam}
                </h5>

                <div className="row g-5">
                  {loading ? (
                    <p>Loading...</p>
                  ) : filteredMembers.length === 0 ? (
                    <p>No team members found for {selectedTeam}.</p>
                  ) : (
                    filteredMembers.map((member, index) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <div className="team-info-card">
                          <div className="d-flex justify-content-center">
                            <img
                              className="team-info-card-img"
                              src={member[""]}
                              alt={member.Name}
                            />
                          </div>
                          <p className="team-info-card-title body">{member.Name}</p>
                          <p className="team-info-card-designation">{member["Teaching Fellow"]}</p>
                        </div>
                      </div>
                    ))
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

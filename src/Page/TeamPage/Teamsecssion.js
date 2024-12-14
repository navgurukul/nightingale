
import React, { useState, useEffect } from "react";
import LinkedIn from "../Components/LinkedIn";

const Teamsecssion = () => {
    const [selectedTeam, setSelectedTeam] = useState("Core Team");
    const [loading, setLoading] = useState(true);


    return (
        <>
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
        </>
    )
}

export default Teamsecssion;
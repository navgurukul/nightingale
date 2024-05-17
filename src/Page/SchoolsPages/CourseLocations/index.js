import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import { useHistory } from "react-router-dom";

function CoursesLocation({ courses }) {
    
    const [data, setData] = useState(null);
    const history = useHistory();
    useEffect(() => {
        axios.get("https://navgurukul.github.io/tarabai-shinde/data/campuses.json")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching campus data:", error);
            });
    }, []);

    if (data === null) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }
    const programmingCampuses = Object.values(data).filter(campus => campus["Courses offered"] && campus["Courses offered"].includes(courses));
    return (
        <div className="partners-data w-100 mb-0 md-5 d-flex align-items-center flex-column" style={{ marginTop: "80px" }}>
            <h3 className="mb-3 section-head">Programme Locations</h3>
            {programmingCampuses.length === 1 ? (
                <div className="single-partner w-75 d-flex flex-column align-items-center">
                    <div className="col-sm-12 col-lg-7 col-md-12 align-items-center" style={{ marginBottom: "14px", marginRight: "10px" }}>
                        <div className="p-3">
                            <div className="campus-title-design">
                                <h5 className="card-title campus-fontfamily" style={{ fontSize: "24px" }}>
                                    {programmingCampuses[0].Name}
                                </h5>
                                {programmingCampuses[0].Name === "Jashpur Campus " && (
                                    <span className="chip-status mb-2">Newly Opened</span>
                                )}
                            </div>
                            <span className="">
                                <span className="fw-bold">Address: </span>{programmingCampuses[0].Address}
                            </span>
                            <div className="mt-3">
                                <span className="li-points">
                                    <span className="fw-bold">Email: </span>{programmingCampuses[0].Contact}
                                </span>
                            </div>
                            <div className="mt-3">
                                <img
                                    src={require("../assets/instagram.png").default}
                                    alt=""
                                    className="instagram"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="all-partners w-75 d-flex flex-column">
                    <div className="all-partners-row d-flex justify-content-around w-100 my-1">
                        <div className="container-fluid overflow-hidden">
                            <div className="row">
                                {programmingCampuses.map((campus) => (
                                    <div className="col-sm-12 col-lg-6 col-md-12 align-items-center" style={{ marginBottom: "14px" }}>
                                        <div className="p-3">
                                            <div className="campus-title-design">
                                                <h5 className="card-title campus-fontfamily" style={{ fontSize: "24px" }}>{campus.Name}</h5>
                                                {campus.Name === "Jashpur Campus " && (
                                                    <span className="chip-status mb-2">Newly Opened</span>
                                                )}
                                            </div>
                                            <span className="">
                                                <span className="fw-bold">Address: </span>{campus.Address}
                                            </span>
                                            <div className="mt-3">
                                                <span className="li-points">
                                                    <span className="fw-bold">Email: </span>{campus.Contact}
                                                </span>
                                            </div>
                                            <div className="mt-3">
                                                <img
                                                    src={require("../assets/instagram.png").default}
                                                    alt=""
                                                    className="instagram"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default CoursesLocation;


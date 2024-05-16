import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import { useHistory } from "react-router-dom";
function CoursesLocation() {
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
    const programmingCampuses = Object.values(data).filter(campus => campus["Courses offered"] && campus["Courses offered"].includes("School of Finance"));
    return (
        <div className="container course-location-page">
            <div className="row">
                {programmingCampuses.map((campus) => (
                    <div className="col-sm-12 col-md-12 col-lg-9" style={{margin: "auto" }}>
                        <div className="campus-title-design ">
                            <h5 className="card-title cmapus-fontfamily" style={{ fontSize: "24px" }}>{campus.Name}</h5>
                            {campus.Name === "Jashpur Campus " &&
                                <span className="chip-status mb-2">
                                    Newly Opened</span>
                            }
                        </div>
                        <span className="">
                            <span className="fw-bold ">Address : </span>{" "}
                            {campus.Address}
                        </span>
                        <div className="mt-3">

                            <span className="li-points">
                                <span className="fw-bold ">Email : </span>{" "}
                                {campus.Contact}
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
                ))}

            </div>
        </div>
    );
}
export default CoursesLocation;



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
                    <div className="col-sm-12 col-md-12 col-lg-8 container-card" key={campus.Name}>
                        <h5 className="program-location-title">Programme Locations</h5>
                        <div className="campus-card">
                            <div className="card-body">
                                <div className="campus-title-design">
                                    <h5 className="campus-title">{campus.Name}</h5>
                                </div>
                                <p className="cmapus-address"><span className="subtitle-information"> Address : </span>{campus.Address}</p>
                                <p className="cmapus-address"><span className="subtitle-information"> Email : </span>{campus.Contact}</p>
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
    );
}
export default CoursesLocation;

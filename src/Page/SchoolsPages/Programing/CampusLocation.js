import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";

function OurCampusLocation() {
    const [data, setData] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios({
            url: "https://navgurukul.github.io/tarabai-shinde/data/campuses.json",
        })
            .then((res) => {
                setData(
                    Object.keys(res.data).reduce((prev, next) => {
                        return { ...prev, [res.data[next].Name]: res.data[next] };
                    }, {})
                );
            });
    }, []);
    if (data === null) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <div className="partners-data w-100 mb-0  md-5 d-flex align-items-center flex-column">
                <h3 className="mb-3 section-head">Programme Locations</h3>
                <div className="all-partners w-75 d-flex flex-column">
                    <div className="all-partners-row d-flex justify-content-around w-100 my-1">
                        <div class="container-fluid overflow-hidden">
                            <div class="row">
                                {Object.keys(data).map((campusName) => {
                                    const campus = data[campusName];
                                    if (campus.Name && campus.Address) {
                                        return (

                                            <div class="col-sm-12 col-lg-6 col-md-12" style={{ marginBottom: "14px"}}>
                                                <div class="p-3">
                                                    <div >
                                                        <div className="campus-title-design ">
                                                            <h5 className="card-title cmapus-fontfamily" style={{fontSize:"20px"}}>{campus.Name}</h5>
                                                            {campus.Name === "Jashpur Campus " &&
                                                                <span className="chip-status mb-2">
                                                                    Newly Opened</span>
                                                            }
                                                        </div>
                                                        <span className="li-points">
                                                            <span className="fw-bold ">Address : </span>{" "}
                                                            {campus.Address}
                                                        </span>
                                                        <div className="mt-3"></div>
                                                        <span className="li-points">
                                                            <span className="fw-bold ">Email : </span>{" "}
                                                            {campus.Contact}
                                                        </span>
                                                    </div>

                                                    <div className="mt-3"></div>
                                                    <img
                                                        src={require("../assets/instagram.png").default}
                                                        alt=""
                                                        style={{ width: "32px" }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OurCampusLocation;





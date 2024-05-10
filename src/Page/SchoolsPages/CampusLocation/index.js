import "./style.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function AdmissionProcess() {
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
            <div className="container">
                <h5 className="text-center section-heading-one">Programme Locations</h5>
                <div className="row mx-md-n5 my-4">
                    {Object.keys(data).map((campusName) => {
                        const campus = data[campusName];
                        if (campus.Name && campus.Address) {
                            return (
                                <div key={campusName} className="col-md-6 px-md-2 mb-2">
                                    <div
                                        className="campus-card bg-white py-3 px-2 position-relative"
                                    >
                                        <div className="campus-title-design">
                                            <h6 className="card-title cmapus-fontfamily">{campus.Name}</h6>
                                          
                                        </div>
                                        <span><span className="fw-bold card-content-address">Address: </span>{campus.Address}</span>
                                        <span className="card-content-email"><span className="fw-bold">Address: </span>{campus.Contact}</span><br></br>
                                        <img src={require("../assets/instagram.png").default}
                                            className="instagram-icon"
                                        ></img>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </>
    )
}
export default AdmissionProcess;
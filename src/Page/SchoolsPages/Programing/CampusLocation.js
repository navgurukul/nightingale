import React, { useState, useEffect } from "react";
import axios from "axios";
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
        <div className="container campus-location-container">
            <h5 className="text-center mian-heading">Programme Locations</h5>
            <div className="row">
                {Object.keys(data).map((campusName, index) => {
                    const campus = data[campusName];
                    if (campus.Name && campus.Address) {
                        return (
                            <div key={campusName} className="col-lg-6 mb-4">
                                <div className="container-box">
                                    <div>
                                        <h5 className="ProgramTitle">{campus.Name}</h5>
                                        <p className="programContent"><span className="ProgramAddressTitle">Address:</span>{campus.Address}</p>
                                        <p className="programContent"> <span className="ProgramAddressTitle">Email :</span>{campus.Contact}</p>
                                        <img
                                            src={require("../assets/instagram.png").default}
                                            alt=""
                                            className="instagram-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>

    );
}

export default OurCampusLocation;


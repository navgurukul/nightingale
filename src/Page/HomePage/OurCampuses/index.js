import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";

function OurCampuses() {
    const [data, setData] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios({
            url: "https://navgurukul.github.io/tarabai-shinde/data/campuses.json",
        })
        .then((res) => {
            console.log("Fetched data:", res.data);
            setData(
                Object.keys(res.data).reduce((prev, next) => {
                    console.log("Processing campus:", res.data[next].Name, "Image URL:", res.data[next].Img);
                    return { ...prev, [res.data[next].Name]: res.data[next] };
                }, {})
            );
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
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
            <div className="container campus-main-page">
                <h3 className="text-center media-font">Our Campuses</h3>
                <div className="row g-0" style={{ marginTop: "40px" }}>
                    {Object.keys(data).map((campusName) => {
                        const campus = data[campusName];
                        const displayName = campusName.split(" ")[0];

                        if (campus.Name && campus.Img) {
                            console.log(`Rendering ${displayName} with image ${campus.Img}`);
                            
                            return (
                                <div 
                                    className="col-sm-3 mb-3 mb-sm-0" 
                                    style={{ marginTop: "32px" }} 
                                    key={campusName} 
                                    onClick={() => { history.push(`/campus/${displayName}`) }}
                                >
                                    <div className="campus-title-design contant-box">
                                        <img 
                                            className="campus-img mr-4" 
                                            src={campus.Img} 
                                            alt={`${displayName} image`} 
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Available'; }} // Fallback image URL
                                        />
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <span className="mb-5 text-center font body1">
                                                {displayName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            console.error(`Missing data for ${displayName}:`, campus);
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default OurCampuses;

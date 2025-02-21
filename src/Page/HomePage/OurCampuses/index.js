import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";

function OurCampuses() {
    const [data, setData] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get("https://navgurukul.github.io/tarabai-shinde/data/campuses.json")
            .then((res) => {
                setData(
                    Object.keys(res.data).reduce((prev, next) => {
                        const campusName = res.data[next].Name;
                        return campusName && !campusName.toLowerCase().includes("bangalore")  // Exclude Bangalore
                            ? { ...prev, [campusName]: res.data[next] }
                            : prev;
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

    const handleCampusClick = (campusName) => {
        history.push(`/campus/${campusName}`);
    };

    return (
        <div className="container campus-main-page">
            <h3 className="text-center media-font">Our Campuses</h3>
            <div className="row g-0 mt-4">
                {Object.keys(data).map((campusName) => {
                    // Skip Bangalore (case-insensitive check)
                    if (campusName.toLowerCase().includes("bangalore")) {
                        return null;
                    }

                    const campus = data[campusName];
                    const displayName = campusName.split(" ")[0];

                    if (campus.Name && campus.Img) {
                        const imageUrl = campus.Img.startsWith('http') ? campus.Img : `/images/${campus.Img}`;
                        return (
                            <div 
                                className="col-sm-3 mb-4 mt-4 mb-sm-0" 
                                key={campusName} 
                                role="button" 
                                tabIndex="0"
                                onClick={() => handleCampusClick(displayName)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleCampusClick(displayName);
                                    }
                                }}
                            >
                                <div className="campus-title-design contant-box">
                                    <img 
                                        className="campus-img mr-4" 
                                        src={imageUrl} 
                                        alt={`${displayName} image`} 
                                        onError={(e) => { 
                                            e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Available'; 
                                        }}
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
                        console.warn(`Skipping ${campusName} due to incomplete data.`);
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default OurCampuses;
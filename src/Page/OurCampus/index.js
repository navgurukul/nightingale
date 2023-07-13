
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function OurCampus() {
  const [data, setData] = useState(null);

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

  console.log(data);

  if (data === null) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="campuses d-flex flex-column justify-content-center w-100">
      <div className="campuses-data w-100 mb-0 md-5 d-flex align-items-center flex-column">
        <h3 className="mb-3 section-head">Our Campus</h3>

        <div className="all-campuses w-75 d-flex flex-wrap justify-content-center ">
        {Object.keys(data).map((campusName) => {
          const campus = data[campusName];
          if (campus.Name && campus.Address) {
            return (
              <div className="card mb-3 " key={campusName}>
                <h5 className="card-title">{campus.Name}</h5>
                
                <span>{campus.Address}</span>
              </div>
            );
          }
          return null;
        })}
        </div>
      </div>
    </div>
  );
}

export default OurCampus;

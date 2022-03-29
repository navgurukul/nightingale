import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import campusImg1 from "./assets/campus_1.png";
import campusImg2 from "./assets/campus_2.png";
import avatar from "./assets/bg.png";
import Campus_data from "./data";

function CampusPages() {
  const [campus, setCampus] = useState("Pune Campus");
  const [data, setData] = useState(Campus_data[campus]);
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/campuses.json`,
    }).then((res) => {
      setData(
        Object.keys(res.data).reduce((prev, next) => {
          return { ...prev, [res.data[next].Name]: res.data[next] };
        }, {})
      );
    });
  }, [campus]);
  return (
    <div className="campus-page d-flex flex-column justify-content-center">
      <div className="campus-description mb-3 d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-3">Our Campuses</h3>
        <hr className="heading-hr mt-0" />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="d-flex col-12 col-md-6 justify-content-around mb-3 pb-0 pb-md-3">
            <span
              className="campus-btn"
              name="campuses"
              value="Pune"
              onClick={(e) => {
                setCampus("Pune Campus");
              }}
              style={
                campus === "Pune Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Pune
            </span>
            <span
              className="campus-btn"
              name="campuses"
              value="Bengaluru"
              onClick={(e) => {
                setCampus("Bangalore Campus");
              }}
              style={
                campus === "Bangalore Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Bengaluru
            </span>
            <span
              className="campus-btn"
              name="campuses"
              value="Sarjapur"
              onClick={(e) => {
                setCampus("Sarjapur Campus");
              }}
              style={
                campus === "Sarjapur Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Sarjapur
            </span>
            <span
              className="campus-btn"
              name="campuses"
              value="Dharamshala"
              onClick={(e) => {
                setCampus("Tripura Campus");
              }}
              style={
                campus === "Tripura Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Dharamshala
            </span>
          </div>
        </div>

        {data && data[campus] && (
          <div className="container d-flex-column d-md-flex">
            <div className="col-12 col-md-5 d-flex flex-column">
              <h4 className="mb-3 campus-name">{data[campus].Name}</h4>
              <div className="mb-3 campus-manager">
                <span className="fw-bold">Campus Manager : </span>
                <img src={avatar} className="mx-2" />
                {data[campus]["Campus Manager"]}
              </div>
              <div className="mb-3 campus-address">
                <span className="fw-bold">Address : </span>
                {data[campus].Address}
              </div>
              <div className="mb-3 campus-capacity">
                <span className="fw-bold">Student Capacity : </span>
                {data[campus]["Student Capacity"]}
              </div>
              <div className="mb-3 campus-faculty">
                <span className="fw-bold">Faculty : </span>
                {data[campus]["Team Members"]}
              </div>
              <div className="mb-3 campus-contact">
                <span className="fw-bold">Contact : </span>
                {data[campus].Contact}
              </div>
            </div>
            <div className="col-12 col-md-7">
              <iframe
                src={data[campus].Map}
                // width="640"
                // height="360"
                style={{ border: 0, borderRadius: "8px" }}
                // allowfullscreen="true"
                className="campus_map"
                loading="none"
              />
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <hr className="campus-dividerLine" />
      </div>
      <div className="campus-gallary mt-3 pb-3 mb-5">
        <div className="container">
          <div className="row pb-3">
            <div className="col-12 py-3 py-md-0 col-md-6">
              <img className="campus_shortImg" src={campusImg1} />
            </div>
            <div className="col-12 py-3 py-md-0 col-md-6">
              <img className="campus_shortImg" src={campusImg1} />
            </div>
          </div>
          <div className="row py-0 py-md-3">
            <div className="col-12">
              <img className="campus_longImg" src={campusImg2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusPages;

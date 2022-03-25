import React, { useState, useEffect } from "react";
import "./style.css";
import campusImg1 from "./assets/campus_1.png";
import campusImg2 from "./assets/campus_2.png";
import avatar from "./assets/bg.png";
import Campus_data from "./data";

function CampusPages() {
  const [campus, setCampus] = useState("Pune");
  const [data, setData] = useState(Campus_data[campus]);
  useEffect(() => {
    setData(Campus_data[campus]);
  }, [campus]);
  return (
    <div className="campus-page d-flex flex-column justify-content-center">
      <div className="campus-description mb-3 d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-3">Our Campuses</h3>
        <hr className="heading-hr mt-0" />

        <div className="campuses d-flex col-12 col-md-6 justify-content-around mb-3 pb-0 pb-md-3">
          <div className="campus-btn mr-2">
            <label className="d-flex align-items-center">
              <input
                className="mr-1 mr-md-2"
                name="campuses"
                type="radio"
                value="Pune"
                onClick={(e) => {
                  setCampus(e.target.value);
                  // setCampus("Pune");
                }}
                checked={campus === "Pune"}
              />
              Pune
            </label>
          </div>
          <div className="campus-btn mr-2">
            <label className="d-flex align-items-center">
              <input
                className="mr-1 mr-md-2"
                name="campuses"
                type="radio"
                value="Bengaluru"
                onClick={(e) => {
                  setCampus(e.target.value);
                  // setCampus("Bengaluru");
                }}
                checked={campus === "Bengaluru"}
              />
              Bengaluru
            </label>
          </div>
          <div className="campus-btn mr-2">
            <label className="d-flex align-items-center">
              <input
                className="mr-1 mr-md-2"
                name="campuses"
                type="radio"
                value="Sarjapur"
                onClick={(e) => {
                  setCampus(e.target.value);
                  // setCampus("Sarjapur");
                }}
                checked={campus === "Sarjapur"}
              />
              Sarjapur
            </label>
          </div>
          <div className="campus-btn mr-2">
            <label className="d-flex align-items-center">
              <input
                className="mr-1 mr-md-2"
                name="campuses"
                type="radio"
                value="Dharamshala"
                onClick={(e) => {
                  setCampus(e.target.value);
                  // setCampus("Dharamshala");
                }}
                checked={campus === "Dharamshala"}
              />
              Dharamshala
            </label>
          </div>
        </div>
        <div className="container d-flex-column d-md-flex">
          <div className="col-12 col-md-5 d-flex flex-column">
            <h4 className="mb-3 campus-name">{data.name}</h4>
            <div className="mb-3 campus-manager">
              <img src={avatar} className="mr-3" />
              {data.manager}
            </div>
            <div className="mb-3 campus-address">
              <span className="fw-bold">Address : </span>
              {data.address}
            </div>
            <div className="mb-3 campus-capacity">
              <span className="fw-bold">Student Capacity : </span>
              {data.capacity}
            </div>
            <div className="mb-3 campus-faculty">
              <span className="fw-bold">Faculty : </span>
              {data.faculty}
            </div>
            <div className="mb-3 campus-contact">
              <span className="fw-bold">Contact : </span>
              {data.contact}
            </div>
          </div>
          <div className="col-12 col-md-7">
            <iframe
              src={data.location}
              // width="640"
              // height="360"
              style={{ border: 0, borderRadius: "8px" }}
              // allowfullscreen="true"
              className="campus_map"
              loading="none"
            />
          </div>
        </div>
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

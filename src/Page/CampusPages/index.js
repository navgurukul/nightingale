import React, { useState } from "react";
import "./style.css";

function CampusPages() {
  const [campus, setCampus] = useState("Pune");
  return (
    <div className="campus d-flex flex-column justify-content-center">
      <div className="campus-description d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-3">Our Campuses</h3>
        <hr className="heading-hr mt-0" />

        <div className="campuses d-flex col-md-6 justify-content-around">
          <div>
            <input
              className="mr-1"
              type="radio"
              value="Pune"
              onClick={(e) => {
                console.log(e.target.value);
              }}
            />
            <label>Pune</label>
          </div>
          <div>
            <input
              className="mr-1"
              type="radio"
              value="Bengaluru"
              onClick={(e) => {
                console.log(e.target.value);
              }}
            />
            <label>Bengaluru</label>
          </div>
          <div>
            <input
              className="mr-1"
              type="radio"
              value="Sarjapur"
              onClick={(e) => {
                console.log(e.target.value);
              }}
            />
            <label>Sarjapur</label>
          </div>
          <div>
            <input
              className="mr-1"
              type="radio"
              value="Dharamshala"
              onClick={(e) => {
                console.log(e.target.value);
              }}
            />
            <label>Dharamshala</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusPages;

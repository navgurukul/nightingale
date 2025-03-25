import React from "react";
import { data } from "./data";
import "./style.css";

function AlumniStories() {
  return (
    <div className="container mb-4">
      <div className="row g-0">
        {data.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4  ">
            <div className="video-container p-4">
              <iframe
                src={item.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={item.name}
              ></iframe>
            </div>
            <p className="body1  text-left" style={{ marginLeft: "50px" }}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlumniStories;

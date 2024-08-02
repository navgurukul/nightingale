import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import card1img from "../assets/card1.png"
import card2img from "../assets/card2.png"
import card3img from "../assets/card3.png"

    

function Slider() {
//   const [mediaData, setMediaData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

 const mediaData = [
    {
      Logo: card1img,
      Name: "NavGurukul Student",
      Content: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      Logo: card2img,
      Name: "NavGurukul Student",
      Content: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      Logo: card3img,
      Name: "HR & recruiters",
      Content: "Small excerpt/ Feedback",
    },
  ];


  return (
    <>
      <div className="container-fluid" style={{ padding: "40px", background: "#F7F7F7" }}>
        <h3 className="text-center media-font ">
          Testimonials
        </h3>
        <div className="slider partner-slider container mar-3">
          <>
            <div className="row">
        {mediaData.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <img src={item.Logo} className="card-img-top" alt={item.Name} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.Name}</h5>
                <p className="card-text">{item.Content}</p>
              </div>
           
          </div>
        ))}
            
            </div>
          
          </>
        </div>
      </div>
    </>
  );
}
export default Slider;

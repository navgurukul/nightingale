import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function SupporterSlider() {
  const [supports, setSupports] = useState([]);

  useEffect(() => {
    axios({
      url: `https://navgurukul.github.io/tarabai-shinde/data/supporters.json`,
    }).then((res) => {
      setSupports(res.data);
    });
  }, []);

  if (!Object.keys(supports).length) return null;

  return (
    <div className="logo-strip-container">
      <div className="logo-strip">
        {/* Double the logos for seamless looping */}
        {[...Object.keys(supports), ...Object.keys(supports)].map((item, index) => (
          <a
            key={`${item}-${index}`}
            href={supports[item].Website}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-item"
          >
            <img
              className="logo-img"
              src={supports[item].Logo}
              alt={supports[item]["Supporter Name"].substring(
                0,
                supports[item]["Supporter Name"].indexOf(" ")
              )}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SupporterSlider;
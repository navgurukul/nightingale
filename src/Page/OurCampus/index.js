import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import "../../Global.css";
import { useHistory } from "react-router-dom";

function OurCampus() {
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
    <div className="partners d-flex flex-column justify-content-center w-100 mt-5 mb-6">
      <div className="partners-data w-100 mb-0 md-5 d-flex align-items-center flex-column">
        <h3 className="mb-4 section-head">Our Campuses</h3>
        <div className="all-partners w-75 d-flex flex-column ">
          <div className="all-partners-row d-flex justify-content-around w-100 my-3">
            {Object.keys(data).map((campusName) => {
              const campus = data[campusName];
              if (campus.Name && campus.Address) {
                return (

                  <div
                    className="card campus-card mb-5 md-5 bg-white py-3 px-4 position-relative"
                    key={campusName}
                    // onClick={history.push(``)}
                    onClick={() => { history.push(`/campus/${campus.Name.split(" ")[0]}`) }}
                  >
                    <div >
                      <div className="campus-title-design ">
                        <h5 className="card-title cmapus-fontfamily">{campus.Name}</h5>


                        {campus.Name === "Jashpur Campus" &&
                          <span className="chip-status mb-2">
                            Newly Opened</span>
                        }
                      </div>
                      <span className="cmapus-fontfamily">{campus.Address}</span>
                    </div>
                    <div className="mt-3"></div>
                    <div className="campus-design">
                      {campus["Courses offered"] && campus["Courses offered"].split("|")
                        .map((item) => (<span className="scl-chip mb-2">{item}</span>))}
                    </div>

                  </div>
                );
              }

            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCampus;









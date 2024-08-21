import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import user from "../assets/user-icon.png";

function shuffleObject(obj) {
  let newObj = {};
  const keys = Object.keys(obj);
  keys.sort(() => Math.random() - 0.5);
  keys.forEach((k) => {
    newObj[k] = obj[k];
  });
  return newObj;
}

function OurAlumni() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/alumni.json`,
    }).then((res) => {
      setTeam(res.data);
    });
  }, []);

  return (
    <main className="ng-hiring-page">
      <div className="page-content">
        <section className="hiring-page-section mb-4 d-flex flex-column meetclass">
          
          <h3 className="hiring-section-title mb-5">
            Meet Our Alumni
          </h3>


          <div className="container hiring-page-card-container px-0 d-flex mt-3">
            {Object.keys(shuffleObject(team)).length ? (
              Object.keys(shuffleObject(team)).map((item) => {
                if (
                  team[item].Photo &&
                  team[item].Name &&
                  team[item].Content &&
                  team[item].Designation
                ) {
                  return (
                      <div key={item} className="flex flex-column col-6 col-md-3">
                        <div>
                          <img
                            className="team-info-card-img img-card-hover"
                            src={team[item].Photo || user}
                            alt={team[item].Name.substring(
                              0,
                              team[item].Name.indexOf(" ")
                            )}
                          />
                          <p
                            style={team[item].Name ? {} : { color: "grey" }}
                            className="team-info-card-title"
                          >
                            {team[item].Name ||
                              "Awaiting Member's Name"}
                          </p>
                          <p
                            style={
                              team[item].Designation ? {} : { color: "grey" }
                            }
                            className="section-para"
                          >
                            {team[item].Designation ||
                              "Awaiting description from team member"}
                          </p>
                        </div>
                      </div>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OurAlumni;

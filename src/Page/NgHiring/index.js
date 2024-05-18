import React, { useState, useEffect } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";
import user from "./assets/user-icon.png";
import LinkedIn from "../Components/LinkedIn";
import Twitter from "../Components/Twitter";
import pdf from "./assets/placement.pdf";

function shuffleObject(obj) {
  let newObj = {};
  var keys = Object.keys(obj);
  keys.sort(function (a, b) {
    return Math.random() - 0.5;
  });
  keys.forEach(function (k) {
    newObj[k] = obj[k];
  });
  return newObj;
}

function Popup(props) {
  return (
    <div className="description-popup">
      <div className="d-flex align-items-center">
        <p className="fw-bold mt-3 mr-3">{props.Name}</p>
        {props.linkedin ? (
          <a href={props.linkedin} target="_blank" className="mr-3">
            <LinkedIn />
          </a>
        ) : (
          <></>
        )}
        {props.twitter ? (
          <a href={props.twitter} target="_blank">
            <Twitter />
          </a>
        ) : (
          <></>
        )}
      </div>
      <p
        className="mt-0"
        style={
          props.Content === "Awaiting content from team member"
            ? { color: "grey" }
            : {}
        }
      >
        {props.Content}
      </p>
    </div>
  );
}

function NgHiring() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/alumni.json`,
    }).then((res) => {
      setTeam(res.data);
    });
  }, []);
  const [team, setTeam] = useState([]);
  return (
    <main >
      <section className="container align-items-center d-flex flex-column  justify-content-center w-100">
        <h3 className="section-head mt-3 mt-md-5 mb-3">Hire from Us</h3>
        <div className=" hiring-page-content col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
          <p className="section-para w-100" >
            Through harnessing the power of education, We bridge the learning 
            gap of students from marginalized communities to emerge as skilled,
            resilient, and job-ready professionals, proficient in the latest technologies
            and soft skills. By partnering with us, your organization can enrich its 
            workforce diversity and drive meaningful social impact, effortlessly meeting
            your Diversity, Equity, and Inclusion (DEI) goals.
          </p>
        </div>
        <div className=" hiring-page-content col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
          <p className="section-para w-100" >
            By hiring from us, You are achieving : 
            <ul className="ml-4">
              <li>
                Handpicked Tech Talent: Pre-screened candidates to save your time.
              </li>
              <li>
                Zero Hiring Fees: Fully funded by our generous donors.
              </li>
              <li>
                High Retention candidates: Quality talent within budget</li>
              <li>
                Diverse Talent Pool: Our students are from different regions 
                of India. Ready to enhance your workforce diversity and business capabilities.
              </li>
              <li>
                Job-Ready Talent: Our students undergo rigorous training in both 
                technical and soft skills, preparing them for the complexities of modern
                work environments.
              </li>
              <li>
                Positive Social Impact: Fulfill your corporate social responsibility goals by hiring candidates who are part of a movement to bridge the education and employment gap in India.
              </li>
            </ul>
          </p>
          

        </div>
         <a
            href="https://drive.google.com/file/d/1sem3BGOxBscPY2KMOcc_KAZ1ZJSJ-IeE/view?usp=sharing"
            download="Placement Brief - Navgurukul"
            target="_blank"
          >
            <button
              type="button"
              class="btn mb-4 f-Nuni fw-bold py-2 regular-btn align-self-center"
              style={{width : "360px"}}
            >
              Download Placement Brief
            </button>
          </a>
          <div className="hiring-page-content d-flex justify-content-center align-items-center col-md-5">
            <p className="section-para text-center">
              Contact us directly at{" "}
              <a href="mailto:tnp@navgurukul.org" className="link">
                tnp@navgurukul.org
              </a>{" "}
              for hiring or freelancing projects.
            </p>
          </div>
         
        </section>    
    
        <section className="ng-hiring-page hiring-page-section mb-4 d-flex flex-column mt-5">
          <h3 className="hiring-section-title section-head  mb-3">
            Meet Our Alumni
          </h3>
          <div className="container hiring-page-card-container px-0 d-flex mt-3">
            {Object.keys(shuffleObject(team)).length ? (
              Object.keys(shuffleObject(team)).map((item) => {
                {if (
                  team[item].Photo &&
                  team[item].Name &&
                  team[item].Content.length &&
                  team[item].Content &&
                  team[item].Designation
                )
                  return (
                    <Tippy
                      animation="fade"
                      interactive="true"
                      duration={[500, 0]}
                      placement={
                        window.screen.availWidth < 650 ? "bottom " : "right"
                      }
                      content={
                        <Popup
                          Name={team[item].Name || "Awaiting Member's Name"}
                          Content={
                            (team[item].Content.length && team[item].Content) ||
                            " Awaiting content from team member "
                          }
                          linkedin={team[item].LinkedIn}
                          twitter={team[item].Twitter}
                        />
                      }
                    >
                      <div className="Card-content flex flex-column col-6 col-md-3">
                        <div className="card card-details">
                          <img
                            className="card-img-top team-info-card-img img-card-hover"
                            src={team[item].Photo ? team[item].Photo : user}
                            alt={team[item].Name.substring(
                              0,
                              team[item].Name.indexOf(" ")
                            )}
                          />
                          <p
                            style={team[item].Name ? {} : { color: "grey" }}
                            className="team-info-card-title"
                          >
                            {team[item].Name
                              ? team[item].Name
                              : "Awaiting Member's Name"}
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
                    </Tippy>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>
        </section>
      {/* </div> */}
    </main>
  );
}

export default NgHiring;

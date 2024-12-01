import React from "react";
import "./sosc.css";
import Programmefor from "./Programfor";
import Courseduration from './Coursduration'
import Jobopportunities from "./Jobopportunities"
import Programmelocation from './Programmelocation'
import Residential from './Residential'
import BackgroundImg from "../BgroundImg";
import { BgroundImg, LongTermVision } from "../SchoolOfSecondchances/data";
import reshot from "./assets/reshot.png"
import chef from "./assets/reshotchef.png"
import convertasionimg from "./assets/reshotconvertasion.png"
import reshotfemale from "./assets/reshotfemale.png"
import businesswoman from "./assets/reshotbusiness-woman.png"
import email from "./assets/Vector.png"
import phone from "./assets/phone.png"

const information = "In our Super-Chef course, our aim is to provide skills on “learning how to learn”, with focus on topics like:";
const topicsList = [
    {
        img: reshot,
        text: "Intermediary Nutrition knowledge",
    },
    {
        img: chef,
        text: "Multi-cuisine, allergy-friendly cooking",
    },
    {
        img: convertasionimg,
        text: "Spoken English communication",
    },
    {
        img: reshotfemale,
        text: "Digital literacy including the ability to use various AI systems",
    },
    {
        img: businesswoman,
        text: "Overall personality grooming",
    },
];

function SchoolOfSecondchances() {
    return (
        <>
            <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
            <Programmefor />
            <section className="container align-items-center d-flex flex-column justify-content-center w-100">
                <div className="col-12 col-md-8 p-0">
                    <h5 className="section-head mb-4 body1 w-100  mb-lg-4 mt-lg-1">
                        What Will You Learn
                    </h5>

                    <p className="section-para body1 w-100">{information}</p>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5 mt-4">
                        {topicsList.map((topic, index) => (
                            <div className="col-lg-6 col-md-4 col-sm-12 d-flex align-items-start" key={index}>
                                <img
                                    src={topic.img}
                                    alt={topic.text}
                                    className="icon-img custom-spacing"
                                />
                                <p className="section-para body1 w-100">{topic.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            <Courseduration />
            <Jobopportunities />
            <Programmelocation />
            <Residential />
            <section className="container align-items-center d-flex flex-column justify-content-center w-100 mb-5">
                <h3 className="section-head mt-3 mt-md-4 mb-4">What is Our Long Term Vision?</h3>
                <div className="col-12 col-md-8 px-3">
                    <ul className="vision-list body1 w-100 textcolur ">
                        {LongTermVision.map((item, index) => (
                            <li key={index}>{item.point}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="container-fluid curiousuppor">
                <div className="row">
                    <div className="col-12 col-lg-8 mb-4" style={{ margin: "auto", color: "#EB5F42" }}>
                        <h5 className="section-head body1 w-100 mt-4 mt-md-4 mt-lg-2 mb-4 mb-md-4 mb-lg-2">
                            Curious, Want Support Or Have Questions/Suggestions?
                        </h5>

                        <div className="row container-area">
                            <div
                                className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center justify-content-center text-center px-0"
                                style={{ gap: "8px" }}
                            >
                                <img
                                    src={email}
                                    alt="Email"
                                    className="email-icon"
                                    style={{ width: "20px" }}
                                />
                                <a
                                    href="mailto:sosc@navgurukul.org"
                                    className="text-dark"
                                    style={{
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    sosc@navgurukul.org
                                </a>
                            </div>

                            <div
                                className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center justify-content-center text-center"
                                style={{ gap: "8px", }}
                            >
                                <img
                                    src={phone}
                                    alt="Email"
                                    className="email-icon"
                                    style={{ width: "20px" }}
                                />
                                <a
                                    href="mailto:sosc@navgurukul.org"
                                    className="text-dark"
                                    style={{
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    +91 9878657667
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SchoolOfSecondchances;

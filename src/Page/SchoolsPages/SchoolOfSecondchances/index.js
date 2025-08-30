import React from "react";
import "./sosc.css";
import Programmefor from "./Programfor";
import Courseduration from './Coursduration'
import Jobopportunities from "./Jobopportunities"
import Programmelocation from './Programmelocation'
import Residential from './Residential'
import Corious from "./Curious";
import BackgroundImg from "../BgroundImg";
import { BgroundImg, LongTermVision } from "../SchoolOfSecondchances/data";
import reshot from "./assets/reshot.png"
import chef from "./assets/reshotchef.png"
import convertasionimg from "./assets/reshotconvertasion.png"
import reshotfemale from "./assets/reshotfemale.png"
import businesswoman from "./assets/reshotbusiness-woman.png"

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
            <div className="container courseDetail">
                <h3 className="text-center mb-4 headingcolore">
                    What You  <span className="BackColor">Will Learn</span>
                </h3>
                <div className="row">
                    <div className="col">
                        <div className=" col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                            <p className="body1 w-100">{information}</p>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5 mt-4">
                                {topicsList.map((topic, index) => (
                                    <div className="col-lg-6 col-md-4 col-sm-12 d-flex align-items-start">
                                        <img
                                            src={topic.img}
                                            alt={topic.text}
                                            className="icon-img custom-spacing"
                                        />
                                        <p className="body1 w-100 px-2">{topic.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Courseduration />
            <Jobopportunities />
            <Programmelocation />
            <Residential />
            <div className="container programDetails">
                <h3 className="text-center mb-4 headingcolore ">What is Our <span className="BackColor"> Long Term Vision?</span></h3>
                <div className="row custom-row">
                    <div className="col">
                        <div className=" col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                            <ul className="vision-list body1 w-100 textcolur ">
                                {LongTermVision.map((item, index) => (
                                    <li key={index}>{item.point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Corious />
        </>
    );
}
export default SchoolOfSecondchances;

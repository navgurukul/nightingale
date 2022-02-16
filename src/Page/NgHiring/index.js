import React, { useState } from "react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";

import abhishek from "./assets/abhishek.jpg";
import komal from "./assets/komal.jpeg";
import nilu from "./assets/nilu.jpeg";
import nitesh from "./assets/nitesh.jpg";
import shehnaz from "./assets/shehnaz.jpeg";

const alumniArray = [
  {
    name: "ABHISHEK GUPTA",
    url: abhishek,
    designation: "CEO & Co-founder",
    description:
      "IITD ‘13 CS Graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others. Was working with Education Department, Delhi Government before NavGurukul.",
  },
  {
    name: "NILAM KUMARI",
    url: nilu,
    designation: "Technical Associate, Bangalore",
    description:
      "Nilam belongs to Kishangan, Bihar. She has done her graduation. Her father a small farmer. She wants to explore tech and non teach.Currently she is working as an team member with Navgurukul and she wants to work with girls.",
  },
  {
    name: "KOMAL BHATT",
    url: komal,
    designation: "Tech and Academics Associate",
    description:
      "A NavGurukul alumna, she learned about herself more as a council member & through volunteering opportunities. She leads the curriculum development.",
  },
  {
    name: "NITESH SHARMA",
    url: nitesh,
    designation: "Admissions Team",
    description:
      "A NavGurukul alumnus, Nitesh completed BCA from Sant Singaji Institute Of Science & Management. Interested in social welfare and solving problems through facilitation and ground-work.",
  },
  {
    name: "SHAHNAAZ NAAZMEEN",
    url: shehnaz,
    designation: "Tech Facility Incharge",
    description:
      "Shahnaaz hails from Gulberga, Karnataka. She joined NavGurukul a year back where she found her dream to work with Youth in Technology domain. While pursuing her course, she supported various students to prepare for their Aspirational jobs. Currently, she leads the tech curriculum development in NavGurukul and manages the Pune campus.",
  },
  {
    name: "ABHISHEK GUPTA",
    url: abhishek,
    designation: "CEO & Co-founder",
    description:
      "IITD ‘13 CS Graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others. Was working with Education Department, Delhi Government before NavGurukul.",
  },
  {
    name: "NILAM KUMARI",
    url: nilu,
    designation: "Technical Associate, Bangalore",
    description:
      "Nilam belongs to Kishangan, Bihar. She has done her graduation. Her father a small farmer. She wants to explore tech and non teach.Currently she is working as an team member with Navgurukul and she wants to work with girls.",
  },
  {
    name: "KOMAL BHATT",
    url: komal,
    designation: "Tech and Academics Associate",
    description:
      "A NavGurukul alumna, she learned about herself more as a council member & through volunteering opportunities. She leads the curriculum development.",
  },
  {
    name: "NITESH SHARMA",
    url: nitesh,
    designation: "Admissions Team",
    description:
      "A NavGurukul alumnus, Nitesh completed BCA from Sant Singaji Institute Of Science & Management. Interested in social welfare and solving problems through facilitation and ground-work.",
  },
  {
    name: "SHAHNAAZ NAAZMEEN",
    url: shehnaz,
    designation: "Tech Facility Incharge",
    description:
      "Shahnaaz hails from Gulberga, Karnataka. She joined NavGurukul a year back where she found her dream to work with Youth in Technology domain. While pursuing her course, she supported various students to prepare for their Aspirational jobs. Currently, she leads the tech curriculum development in NavGurukul and manages the Pune campus.",
  },
];
export { alumniArray };

function NgHiring() {
  const [alumni, setAlumni] = useState(alumniArray);
  console.log(alumni);
  return (
    <main className="ng-hiring-page">
      <div className="page-content">
        <section className="container hiring-page-section d-flex flex-column w-100 mb-6">
          <h3 className="section-head mt-3 mt-md-5 mb-3">Hire from Us</h3>
          <hr className="heading-hr align-self-center mb-3" />
          <div className="mt-3">
            <img src={backgroundImg} className="backgroundImg" />
          </div>
          <div className="mt-4 mb-2 d-flex w-100 justify-content-center hiring-page-content">
            <p className="section-para w-70">
              Our Software Engineering and Graphic Design graduates are skilled
              to be productive from Day 1. Take a look at these{" "}
              <b className="fw-bold"> diamond in the roughs</b> who are polished
              gems now.
            </p>
          </div>
          <button
            type="button"
            class="btn mb-4 f-Nuni fw-bold py-2 regular-btn align-self-center"
          >
            Download Placement Brief
          </button>
          <div className="hiring-page-content d-flex justify-content-center ">
            <p className="section-para">
              Contact us directly at{" "}
              <a href="mailto:tnp@navgurukul.org" className="link">
                tnp@navgurukul.org
              </a>{" "}
              for hiring or freelancing projects.
            </p>
          </div>
        </section>
        <section className="hiring-page-section mb-5 d-flex flex-column">
          <h3 className="hiring-section-title section-head mt-3 mb-3">
            Meet Our Recent Graduates
          </h3>
          <hr className="heading-hr align-self-center mb-3" />
          <div className="container hiring-page-card-container px-0 d-flex">
            {alumni.map((item, index) => {
              return (
                <>
                  <div className="card">
                    <div className="">
                      <img
                        // className="card-img-top card-img"
                        className="card-img-top mb-3 hring-card-img"
                        src={item.url}
                        alt="Card image cap"
                      />
                      <div className="fw-bold mb-1">{item.name}</div>
                      <div className="section-para">{item.designation}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default NgHiring;

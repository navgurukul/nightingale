import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  createRef,
} from "react";
import "./styles.css";
import abhishek from "./assets/abhishek.jpg";
import komal from "./assets/komal.jpeg";
import nilu from "./assets/nilu.jpeg";
import nitesh from "./assets/nitesh.jpg";
import shehnaz from "./assets/shehnaz.jpeg";

const teamMembers = [
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

const volunteers = [
  {
    name: "Poonam Singh Bagh",
    url: shehnaz,
    designation: "CEO, Navgurukul & Meraki",
    description:
      "A... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Saquib Nasim",
    url: shehnaz,
    designation: "CEO, Navgurukul & Meraki",
    description:
      "B... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Komal Ahire",
    url: shehnaz,
    designation: "CEO, Navgurukul & Meraki",
    description:
      "C... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Anand Patel",
    url: shehnaz,
    designation: "CEO, Navgurukul & Meraki",
    description:
      "D... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
];

export { teamMembers, volunteers };

function TeamPage() {
  console.log("run");
  const [members, setMembers] = useState({
    teamMembers: true,
    volunteers: false,
  });
  const toIterate = members.teamMembers ? teamMembers : volunteers;

  const elements = useRef([]);
  elements.current = [...Array(toIterate.length)].map((el, i) => {
    return createRef();
  });

  const desktopcards = useRef([]);
  desktopcards.current = [...Array(toIterate.length)].map((el, i) => {
    return createRef();
  });
  useEffect(() => {
    elements.current.map((e) => {
      cardAlignment(e.current);
    });
    desktopcards.current.map((e) => {
      cardAlignment(e.current);
    });
    console.log(desktopcards);
    return () => {};
  });

  function cardAlignment(ele) {
    let width = window.innerWidth;
    console.log(width);
    const currentPosition = ele.getBoundingClientRect();
    console.log(currentPosition.x);
    const partition = currentPosition.x > width / 2 ? "right" : "left";
    ele.classList.add(partition);
  }

  // useEffect(() => {
  //   return () => {};
  // }, [teamMembers, volunteers]);

  // function shuffleArray(array) {
  //   let currentIndex = array.length,
  //     randomIndex;
  //   while (currentIndex != 0) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  // const memoizedCallback = useMemo(() => {
  //   shuffleArray(teamMembers);
  //   shuffleArray(volunteers);
  // }, [teamMembers, volunteers]);

  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section d-flex flex-column justify-content-center align-items-center">
          <h2 className="section-head">Our Team</h2>
          <hr className="mt-2 heading-hr" />
          <div className="team-page-content w-50">
            <p className="section-para">
              We are a collective of full timers and volunteers that form the
              backbone aiming to bring affordable education to underprivileged
              girl students across India.
            </p>
          </div>
          <div className="container ">
            <div className="row">
              <div class="col-md team-button-container d-flex justify-content-center align-items-center col-sm-12">
                <button
                  type="button"
                  class="btn section-para ng-labs-btn my-2 mx-3 career-button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://navgurukul.zohorecruit.in/jobs/Careers",
                      "_blank"
                    );
                  }}
                >
                  Careers at Navgurukul
                </button>
                <button
                  type="button"
                  class="btn section-para btn-primary mx-3 my-2 volunteer-button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScHvysncnhJkSMtpdpGl_uPhJWlE81hp6l5m2mvuE1hoxX-dQ/viewform",
                      "_blank"
                    );
                  }}
                >
                  Volunteer with us
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section w-100 mt-4 d-flex flex-column justify center align-items-center">
          {/* <h2 className="section-head">Core Members</h2>
          <hr className="mt-2" /> */}
          <div className="all-members-btns d-flex justify-content-center align-items-center w-100">
            <span
              onClick={() => {
                setMembers({ volunteers: false, teamMembers: true });
              }}
              className={
                members.teamMembers
                  ? "section-head core-team-members members-selector"
                  : "section-para core-team-members members-selector"
              }
              style={
                members.teamMembers
                  ? {
                      borderBottom: "3px solid #f05f40",
                      fontWeight: "bold",
                    }
                  : {}
              }
            >
              Core Team
            </span>
            <span
              onClick={() => {
                setMembers({ teamMembers: false, volunteers: true });
              }}
              className={
                members.volunteers
                  ? "section-head core-team-members members-selector"
                  : "section-para core-team-members members-selector"
              }
              style={
                members.volunteers
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Our Supporters
            </span>
          </div>
          {/* <div className="core-team">
            <button
              className="Meraki-section-title"
              onClick={() => {
                setMembers(teamMembers);
              }}
            >
              Core Team
            </button>
            <div className="core-team-underliner"></div>
          </div>
          <div className="our-suppoters">
            <button
              className="Meraki-section-title"
              onClick={() => {
                setMembers(volunteers);
              }}
            >
              Our Supporters
            </button>
            <hr class="hr-line" />
          </div> */}
          {/* <img
            src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
            class="float-left rounded-circle"
          /> */}
          {/* <div className="team-info-cards-container">
            {console.log("members", members)}
            {members.map((item) => {
              return (
                <>
                  <div class="card-details">
                    <img
                      src={require("./assets/teamMember.png")}
                      className="team-info-card-img"
                      //   className="bio-social-media-image"
                    />
                    <div className="team-info-card-title">{item.name}</div>
                    <div className="team-info-card-designation">
                      {item.designation}
                    </div>
                    <div className="hide">{item.description}</div>
                  </div>
                </>
              );
            })}
          </div> */}
          <div className="container px-0 team-info-cards-container">
            {/* <div className="row">
              <div class="col-md-3 col-sm-12">
                <img
                  src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                  class="team-img"
                />
                <img
                  src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                  class="team-img"
                />
                <img
                  src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                  class="team-img"
                />
                <img
                  src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                  class="team-img"
                />
                <img
                  src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                  class="team-img"
                />
              </div>
            </div> */}
            {toIterate.map((item, index) => {
              return (
                <>
                  <div className="Card-content flex flex-column">
                    <div
                      class="card card-details"
                      // style={{ width: "18rem" }}
                    >
                      <div className="team-card-info">
                        <img
                          // className="card-img-top card-img"
                          className="card-img-top team-info-card-img img-card-hover"
                          src={item.url}
                          alt="Card image cap"
                        />
                        <div className="team-info-card-title">{item.name}</div>
                        <div className="section-para">{item.designation}</div>
                      </div>
                      <p
                        class="card-text hide"
                        ref={desktopcards.current[index]}
                      >
                        <div className="team-info-card-title section-head">
                          {item.name}
                        </div>
                        <div className="section-para">{item.description}</div>
                      </p>
                    </div>
                    <div
                      className="description-dropdown d-flex flex-column justify-content-start align-items-start"
                      ref={elements.current[index]}
                    >
                      <div className="description-dropdown-name fw-bold">
                        {item.name}
                      </div>
                      <div className="description-dropdown-description">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  {/* <div class="card-details">
                    <img
                      src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                      // src={require("./assets/teamMember.png")}
                      className="team-info-card-img"
                      //   className="bio-social-media-image"
                    />
                    <div className="team-info-card-title">{item.name}</div>
                    <div className="team-info-card-designation">
                      {item.designation}
                    </div>
                    <div className="hide">
                      <div className="team-info-card-title">{item.name}</div>
                      <div>{item.description}</div>
                    </div>
                  </div> */}
                </>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default TeamPage;

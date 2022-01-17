import React, { useState } from "react";
import "./styles.css";

const teamMembers = [
  {
    name: "Poonam Singh Bagh",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "A A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Saquib Nasim",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "B A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Komal Ahire",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "C A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Anand Patel",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "D A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Poonam Singh Bagh",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "D A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Saquib Nasim",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "D A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Komal Ahire",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "D A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Anand Patel",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "D A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
];

const volunteers = [
  {
    name: "Poonam Singh Bagh",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "A... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Saquib Nasim",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "B... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Komal Ahire",
    designation: "CEO, Navgurukul & Meraki",
    description:
      "C... A NavGurukul alumnus, Flyod completed BCA from Sant Singaji Institute Of Science & Management.",
  },
  {
    name: "Anand Patel",
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
  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section d-flex flex-column justify-content-center align-items-center">
          <h2 className="team-section-title">Our Team</h2>
          <hr className="mt-2" />
          <div className="team-page-content w-50">
            <p>
              We are a collective of full timers and volunteers that form the
              backbone aiming to bring affordable education to underprivileged
              girl students across India.
            </p>
          </div>
          <div className="container ">
            <div className="row">
              <div class="col-md team-button-container d-flex justify-content-center align-items-center col-sm-12">
                <button type="button" class="btn ng-labs-btn mx-5 my-2 career-button">
                  Careers at Navgurukul
                </button>
                <button type="button" class="btn btn-primary mx-5 my-2 volunteer-button">
                  Volunteer with us
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section w-100 d-flex flex-column justify center align-items-center">
          <h2 className="team-section-title">Core Members</h2>
          <hr className="mt-2" />
          <div className="all-members-btns d-flex justify-content-center align-items-center w-100">
            <span
              onClick={() => {
                setMembers({ volunteers: false, teamMembers: true });
              }}
              className="core-team-members members-selector"
              style={
                members.teamMembers ? { borderBottom: "2px solid #f05f40" } : {}
              }
            >
              Core Team
            </span>
            <span
              onClick={() => {
                setMembers({ teamMembers: false, volunteers: true });
              }}
              className="our-supporters members-selector"
              style={
                members.volunteers ? { borderBottom: "2px solid #f05f40" } : {}
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
          <div className="container  team-info-cards-container">
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
            {toIterate.map((item) => {
              return (
                <>
                  <div
                    class="card card-details"
                    // style={{ width: "18rem" }}
                  >
                    <img
                      // className="card-img-top card-img"
                      className="card-img-top team-info-card-img"
                      src="https://www.socialsamosa.com/wp-content/uploads/2019/11/Guru-Nanak-Dev-Ji.jpg"
                      alt="Card image cap"
                    />
                    <div className="team-info-card-title">{item.name}</div>
                    <p class="card-text hide">
                      <div className="team-info-card-title">{item.name}</div>
                      <div>{item.description}</div>
                    </p>
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

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
  const [members, setMembers] = useState(teamMembers);
  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section">
          <h2 className="team-section-title">Our Team</h2>
          <div className="team-underliner"></div>
          <div className="team-page-content">
            <p>
              We are a collective of full timers and volunteers that form the
              backbone aiming to bring affordable education to underprivileged
              girl students across India.
            </p>
          </div>
          <div className="container team-button-container">
            <div className="row">
              <div class="col-md col-sm-12">
                <button type="button" class="btn btn-primary career-button">
                  Careers at Navgurukul
                </button>
                <button type="button" class="btn btn-primary volunteer-button">
                  Volunteer with us
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <h2 className="team-section-title">Core Members</h2>
          <div className="team-underliner"></div>
          <div className="core-team">
            <button
              className="Meraki-section-title"
              onClick={() => {
                setMembers(teamMembers);
              }}
            >
              Core Team
            </button>
            <div className="core-team-underliner"></div>
            {/* <hr class="hr-line" /> */}
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
          </div>
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
          <div className="container team-info-cards-container">
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
            {members.map((item) => {
              return (
                <>
                  <div
                    class="card card-details"
                    // style={{ width: "18rem" }}
                  >
                    <img
                      // className="card-img-top card-img"
                      className="card-img-top"
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

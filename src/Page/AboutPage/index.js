import React from "react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";
import vluImg1 from "./assets/Frame_6.png";
import vluImg2 from "./assets/Frame_1.png";
import vluImg3 from "./assets/Frame_2.png";
import vluImg4 from "./assets/Frame_3.png";
import vluImg5 from "./assets/Frame_4.png";
import vluImg6 from "./assets/Frame_5.png";

function AboutPage() {
  const ourValues = [
    { img: vluImg1, name: 'Versatility', description: 'Facilitating forward-thinking through education that inspires students to adapt to constant updates in the industry and learn with an open mind' },
    { img: vluImg2, name: 'Opportunity', description: 'Creating pathways for professional development and opportunities for students and employees, regardless of their background' },
    { img: vluImg3, name: 'Leadership', description: 'Fostering leadership qualities within students, enabling them to become change-makers in their family' },
    { img: vluImg4, name: 'Inclusivity', description: 'Focusing on inclusiveness in our functions that embraces diversity and promotes gender equality and social inclusion' },
    { img: vluImg5, name: 'Trust', description: 'Building a foundation of trust through transparency & respect with all stakeholders' },
    { img: vluImg4, name: 'Innovation', description: 'Bringing innovation in educational methods, technological solutions, and social impact strategies' },
    { img: vluImg2, name: 'Ownership', description: 'Empowering students with the confidence and resources to take ownership of their learning journey and career paths' },
    { img: vluImg6, name: 'Nurturing', description: 'Providing a nurturing environment that supports personal and professional growth, enabling students to thrive in all aspects of their lives' },
  ];
  return (
    <main className="about-page">
      <div className="page-content">
        <section className="page-section d-flex flex-column mb-0">
          <h3 className="section-head mb-3">Who We Are</h3>

          <div className="about-page-content d-flex flex-column justify-content-center align-items-center">
            <p className="w-50 section-para">
              Founded in <span className="number">2016</span> by graduates of Harvard and IIT-Delhi,
              NavGurukul is a not-for-profit organization with a mission to create access to aspirational
              careers for students from marginalized communities.Our flagship residential program runs on
              fully funded <span className="number">18-month courses</span> in programming, finance,
              business & design.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              Currently, we are empowering <span className="number">1145+ students</span> in our fully
              funded seven residential centers across various states in India. So far, we have placed
              around <span className="number">830+ students</span> with tech and
              non-tech jobs in various IT companies, Small-medium enterprises, and product startups.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              NavGurukul is named after the blend of 'new' (Nav) and (Gurukul) meaning, the
              education system in ancient India where shishya ('students' or 'disciples') lived
              near or with the guru in the same house for a period of time. Our approach blends
              modern and traditional learning in a way that is self-directed and uses student-centered
              learning strategies reminiscent of India's historical educational systems.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              Besides the residential program, we have digital initiatives such
              as Meraki, Zuvy, and Samyarth.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              Through <span className="number">Meraki,</span> we work with students from government schools and ITIs
              through an online offering to help students learn basic English, touch typing, and programming.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              <span className="number">Zuvy</span> is our digital initiative that aims to provide degrees through three modes:
              residential, online, and day boarding. It supports students in getting the best
              jobs in the software industry, with a strong focus on problem-solving, system design,
              and programming languages.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              <span className="number">Samyarth</span> is a for-profit software cooperative run by Women from marginalized
              communities. Its mission is to provide underserved talent as a service to socially
              impactful initiatives and governments and share profits for its work.
            </p>
          </div>
        </section>

        <section className="page-section d-flex flex-column mb-0">
          <h3 className="section-head mb-3">Why do We do the Work?</h3>
          <div className="about-page-content d-flex flex-column justify-content-center align-items-center">
            <p className="w-50 section-para">
              Despite women comprising nearly half of India's population, only 19.2% of € N
              ing students are female, as reported by the All India Survey on Higher
              Education. -21 [1]. This stark disparity is even more critical as we navigate
              the fourth industrial revolution, which is set to create 60-65 million jobs in
              India's digital sector.{2} At NavGurukul, we are committed to dismantling the
              economic, social, pedagogical, and access barriers that prevent women from
              marginalized communities from participating in this wave of opportunity. Our
              goal is to enable these women to achieve financial independence and exert
              social agency, which we believe will generate significant, measurable
              benefits for their families, society, and the nation at large.
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              Our work derives its strength from pillars of equity and empowerment with a
              major focus on Gender, Inclusivity, and Innovation.
              <ul className="list-element">
                <li>
                  We ensure that over 90% of our seats in our residential campuses empower
                  young women, driving change where it's most needed.
                </li>
                <li>
                  65% of our team members are NavGurukul Alumni handling various
                  responsibilities across campuses and other remote functions.
                </li>
                <li>
                  Over 67% of team members are women, including non-binary members.
                </li>
                <li>
                  With our digital initiatives like Samyarth, our objective is to shift
                  economic opportunities that are designed to be more equitable.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section className="page-section d-flex flex-column ">
          <h3 className="section-head mb-3 ">Our Vision</h3>
          <div className="about-content d-flex flex-column justify-content-center mb-0 align-items-center">
            <p className="w-50 section-para mb-0">
              NavGurukul envisions an equitable future where every student has access to quality
              education, especially those from the bottom of the economic pyramid. We believe in
              fostering agency among our students, enabling them to chart their own professional paths
              while actively working to dismantle financial, gender, and social barriers that hinder their
              progress.
            </p>
          </div>
        </section>

        <section className="page-section d-flex flex-column ">
          <h3 className="section-head mb-3">Our Values</h3>
          <div className="about-content d-flex flex-column justify-content-center align-items-center">
            <p className="w-50 section-para mb-0">
              To guide our journey of empowering students from marginalized communities, we have
              realized an Acronym: “VOLITION,” which translates to the power of choosing and
              determining. By following our value system we want every student to have the power to
              choose better pathways, hence the acronym stands for:
            </p>
            <div className="vlu-container">
              {
                ourValues.map((ele) => {
                  return (
                    <div className="vlu-item">
                      <img src={ele.img} alt="" width={64} height={64} />
                      <div className="d-flex flex-column">
                        <span className="vlu-title">{ele.name}</span>
                        <span className="vlu-description">{ele.description}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;

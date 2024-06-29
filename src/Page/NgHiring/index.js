import React, { useState, useEffect } from "react";
import "./styles.css";

function NgHiring() {
  return (
    <main >
      <section className="container align-items-center d-flex flex-column  justify-content-center w-100">
        <h3 className="section-head mt-3 mt-md-5 mb-3">Hire from Us</h3>
        <div className=" hiring-page-content col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
          <p className="section-para body1  w-100" >
            Through harnessing the power of education, We bridge the learning 
            gap of students from marginalized communities to emerge as skilled,
            resilient, and job-ready professionals, proficient in the latest technologies
            and soft skills. By partnering with us, your organization can enrich its 
            workforce diversity and drive meaningful social impact, effortlessly meeting
            your Diversity, Equity, and Inclusion (DEI) goals.
          </p>
        </div>
        <div className=" hiring-page-content col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center  mt-3">
          <p className="section-para body1  w-100" >
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
         <div className=" hiring-page-content col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center  mt-2 ">
          <p className="section-para body1  w-100" >
              Contact us directly at{" "}
              <a href="mailto:tnp@navgurukul.org" className="link">
                tnp@navgurukul.org
              </a>{" "}
               for hiring or freelancing projects.
          </p>
        </div>
      
         <a
            href="https://drive.google.com/file/d/1sem3BGOxBscPY2KMOcc_KAZ1ZJSJ-IeE/view?usp=sharing"
            download="Placement Brief - Navgurukul"
            target="_blank"
          >
            <button
              type="button"
              class="btn mb-5 mt-32 f-Nuni fw-bold py-2 regular-btn align-self-center"
              style={{width : "360px"}}
            >
              Download Placement Brief
            </button>
          </a>
         
        </section>    
    </main>
  );
}

export default NgHiring;

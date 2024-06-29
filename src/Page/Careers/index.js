import React, { useState, useEffect } from "react";

function Careers() {
  
  return (
    <main >
      <section className="container align-items-center d-flex flex-column  justify-content-center w-100 mb-6">
        <h3 className="section-head mt-3 mt-md-5 mb-3">Careers</h3>
        <div className=" col-12 p-0 col-md-8 d-flex align-items-center justify-content-center mb-2 mt-3">
          <p className=" body1  w-100" >
            At NavGurukul,  we are committed to reshaping the educational landscape for 
            marginalized communities in India. At the heart of our work culture lies a belief
            in inclusivity, empowerment, and innovation. We have created an environment where 
            team members are encouraged to bring their whole selves to work, foster creativity, 
            encourage transparency, and drive meaningful change.
          </p>
        </div>
        <div className=" col-12 p-0 col-md-8  d-flex align-items-center justify-content-center  mt-3">
          <p className="body1  w-100" >
            Our team enjoys a range of perks that include:
            <ul className="ml-4">
                <li>
                    Continuous learning opportunities
                </li>
                <li>
                    Supportive and inclusive workplace focusing on health and growth              
                </li>
                <li>
                    Remote work & work-from-campus opportunities
                </li>
                <li>
                    Dedicated special leaves for vipassana meditation.
                </li>
                <li>
                    We organize monthly baithaks to understand organizational teams and collaboration opportunities.
                </li>
              <li>
                Positive Social Impact: Fulfill your corporate social responsibility goals by 
                hiring candidates who are part of a movement to bridge the education and employment gap in India.
              </li>
              <li>
                We hold Monthly Town Hall meetings where we openly share, discuss, and express our 
                challenges and issues related to our work, its purpose, impact, and efficiency.
              </li>
            </ul>
          </p>
        </div>
        
        <ul className="d-flex flex-wrap gap-responsive list-unstyled mt-4 mb-6 ">
            <li className="col-12 col-md-auto mb-2">
            <button
                type="button"
                className="btn regular-btn w-100"
                style={{ height: "48px", width: "153px"}}
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://recruiterflow.com/navgurukul/jobs", "_blank");
                }} 
            >
                Full Time Roles
            </button>
            </li>
            <li className="col-12 col-md-auto mb-2">
            <button
                type="button"
                className="btn regular-btn w-100"
                style={{ height: "48px", width: "181px"}}
                  onClick={(e) => {
                  e.preventDefault();
                  window.open("https://recruiterflow.com/navgurukul/jobs/112", "_blank");
                }} 
            >
                Volunteer With Us
            </button>
            </li>
        </ul>
          
         
        </section>    
    </main>
  );
}

export default Careers;

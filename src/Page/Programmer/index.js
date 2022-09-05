import React, { useState } from "react";
import "./style.css";
import "../../Global.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import video from "./assets/video.mp4";
import subVideo1 from "./assets/subVideo1.mp4";

function Programmer() {
  const [state, setState] = useState("");
  return (
    <div className="programmers d-flex flex-column justify-content-center">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-3  hero-P ">
            <h2 className="heading-line">
            <span className="text-primary">NavGurukul</span> one year<span className="BgColor"> software engineering</span> residential course
            </h2>
            <p className="font para-line">
            Study in an immersive environment at one of our campuses in Pune, 
            Bengaluru or Dharamshala (for boys) with peer learning and mentors 
            helping you at each turn. <br/> <br/>To be a part of the Gurukul, 
            all it takes is some determination and potential.

            </p>
            <button
                className="btn btn-primary text-white w-100 my-0 fs-sm-1.2  regular-btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.merakilearn.org/admission", "_blank");
                }}
              >
                Take the Test
              </button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md ">
          <img src={require("./assets/student-min.jpg").default} className="home-image"/>

          </div>

       

      </div>
      <section className="news-program ">
        <div className="container">
          <div className="row mar-3 ml-2">
           
            <div className="col-md-5  col-12 heading-line-1" >
              <h2 className="text-white heading-line">Listen to our students’ experiences at NavGurukul</h2>

            </div>
           
            <div className="col-md-7 align-center col-12 Image_new_program" >
              <img src={require("./assets/program.jpg").default} className="program-img-1"/>
              <div className="hover_video fw-bold">Video coming Shortly </div>
            </div>

          </div>
          <div className="row mt-5 mb-5">
           
            <div className="col-md-7 col-12 Image_new_program">
              <img src={require("./assets/new_program.jpg").default} className="program-img-1"/>
              <div className="hover_video fw-bold">Video coming Shortly </div>
            </div>
            
            <div className="col-md-5 col-12 heading-line-1">
                <h2 className="text-white text-right heading-line" >Watch more about NavGurukul and our programs</h2>
            </div>

          </div>

        </div>
        
      </section>
      <section className="new_programme mt-2\5 align-items-center ">
        <h3 className="text-center ">Who this <span className="BackColor">Programme</span> is for?</h3>
        {/* <hr className="heading-hr" /> */}
        <div className="container">
        <div className="row text-start   align-items-left mar-3">
         
         <div className="col-md-6 col-12 ">
           <img src={require("./assets/img_1.jpg").default} className="program-img-1 mr-3"/>
         </div>
         
         <div className=" col-md-6 mt-5 col-12 ">
           <ul className="ml-3">
             <li className="mb-3 ">
               <span className="li-points ">
               Youth from underprivileged or low income communities who can’t
               afford expensive college education
               </span>
               
             </li>
             <li className="mb-3">
               <span className="li-points">
               Students with college degrees who haven’t been able to get a
               good job because of lack of social or economic means.
               </span>
               
             </li>
             <li className="mb-3">
               <span className="li-points">
               Many of our current students are ones whose parents have humble
               backgrounds and working as a househelp, auto-drivers etc.
               </span>
               
             </li>
           </ul>
         </div>
         
       </div>
        </div>
        
      </section>

      <section className="programme_phases align-items-center justify-content-center mt-2\.5 flex-column "> 
        <h3 className=" mar-bot text-center">Programme <span className="BackColor"> Phases</span></h3>
        <div className="container mt-3"> 
        <div className=" phases_card_container ">
        <div className="row ">
        <div className="col-md-4 text-left program-phase_col py-4 px-4  mx-3  col-12 ">
          <h4 className="mb-3 "><span className="BackColor">Foundational Bootcamp</span></h4>
              <p className="mb-3 ">
                Building blocks of learning habits for logical and English
                skills.</p>
              <span>Duration: 1 to 2 months</span>
              

          </div>
          <div className="col-md-4 text-left program-phase_col py-4 px-4  mx-3 col-12">
          <h4 className="mb-3 ">
            <span className="BackColor">Coding Bootcamp</span></h4>
              <p className="mb-3 ">
              Learn coding skills along with English and leadership skills.</p>
              <span >Duration : 5 to 6 months</span>
          </div>
          <div className="col-md-4 text-left program-phase_col py-4 px-4  mx-3 col-12">
          <h4 className="mb-3 "><span className="BackColor">Interview Bootcamp</span></h4>
              <p className="mb-3 ">
              Work on interview skills and get an overview of office style work.</p>
              <span >Duration : 1 to 2 months</span>
          </div>
        </div>
        </div>
        </div>
         
      </section>
      <section className="new_programe_skills align-items-center ">
        <h3 className="  text-center mar-bot"> What <span className="BackColor">Skills</span> Do We Teach?</h3>
        <div className="container ">
          <div className="row ">
            
            <div className="col-md-6 col-11">
            <img src={require("./assets/developer.jpg").default } className="program-img-1 mr-3"/>
            </div>
            
            <div className="col-md-6 mar-3 col-12">
            <ul className="mt-4 ml-3">
                <li className="mb-3 points ">
                  <span className="li-points">
                  <span className="fw-bold ">Front end development :</span> Web and
                  mobile development in Javascript, React.js and Android
                  </span>
                
                </li>
                <li className="mb-3 points ">
                  <span className="li-points">
                  <span className="fw-bold ">Back end development :</span> Python,
                  Node.js, Javascript
                  </span>
                
                </li>
                <li className="mb-3 points ">
                  <span className="li-points">
                  <span className="fw-bold ">Hands-on projects :</span> Clone
                  projects for products such as Whatsapp and Facebook
                  </span>
                  
                </li>
                <li className="mb-0 points">
                  <span className="li-points">
                  <span className="fw-bold ">Soft Skills :</span> English speaking,
                  team work, emotional intelligence and leadership skills
                  </span>

                </li>
              </ul>
            </div>
          </div>
        </div>
        


      </section>
      <section className="our_campus">
        <h3 className="text-center mb-3">Our <span className="BackColor">Campuses</span></h3>
        <p className="mt-0 mb-3 pb-0 pb-md-3 text-center">
            Three campuses at Pune, Bengaluru and Dharamsala (for boys) each
          </p>
        {/* <div className="row mb-4">
          <div className="col-md-1"></div>
          <div className="col-md-4 col-12 mt-5 ml-2">
          <p className="fw-bold ">Facilities</p>
         
            <ul>
            <li className="mb-3 points font">
              <span className="li-points">
              Equipped with shared dorms, fully functional kitchen and other
                  amenities of daily use
              </span>
                  
                </li>
                <li className="mb-3 points font">
                <span className="li-points">
                Classrooms and large residential spaces

                </span>
                </li>
                <li className="mb-3 points font">
                <span className="li-points">
                Provision of laptop, internet, mentors, english classes,
                  mental health counselling 
                </span>
                  
                 </li>
                <li className="mb-0 points font">
                  <span className="fw-bold li-points">
                    All expenses are paid by Navgurukul and free for the student
                  </span>
                </li>
              
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 col-12">
          <img src={require("./assets/Img_program.jpg").default } 
            className="program-img-1"/>
          </div>

        </div> */}
        <div className="container">
        <div className="row">
        
        <div className="col-md-6 mar-3">
        <p className="fw-bold ">Facilities</p>
        <ul>
          <li className="mb-3 ">
          
              Equipped with shared dorms, fully functional kitchen and other
                  amenities of daily use
             
          </li>
          <li className="mb-3 ">
                <span className="li-points">
                Classrooms and large residential spaces

                </span>
                </li>
                <li className="mb-3 ">
                <span className="li-points">
                Provision of laptop, internet, mentors, english classes,
                  mental health counselling 
                </span>
                  
                 </li>
                <li className="mb-0 ">
                  <span className="fw-bold li-points">
                    All expenses are paid by Navgurukul and free for the student
                  </span>
                </li>
          
        </ul>

        </div>
        
        <div className="col-md-6">
        <img src={require("./assets/Img_program.jpg").default } 
            className="program-img-1"/>

        </div>

        </div>
        
        
        <div className="row ">
          
          <div className="col-md-6 mb-4 mt-3 col-12">
          <img src={require("./assets/Img_pro3.jpg").default } 
            
            className="program-img-1 mr-3"/>
          </div>
          <div className="col-md-6 col-10 mar-3 ">
          <p className="fw-bold ml-3">Lifestyle and Culture</p>
              <ul className="mb-0 ml-3">
                <li className="mb-3  ">
                  <span className="li-points">
                  Self responsibility to take care of activities with discipline

                  </span>
                </li>
                <li className="mb-3 ">
                  <span className="li-points">
                  Day is divided into learning schedules for various courses

                  </span>
                </li>
                <li className="mb-3  ">
                  <span className="li-points">
                  Evening includes free and leisure time

                  </span>
                </li>
                <li className="mb-3  ">
                  <span className="li-points">
                  Our culture is driven by empathy and inclusivity. We believe
                  in compassionate approach to making a safe space for students
                  to learn in
                  </span>
                 
                </li>
                <li className="mb-0 ">
                  <span className="li-points">
                  We constantly work towards diversity without discrimination
                  based no caste, class, gender and life experiences 
                  </span>
                 
                 </li>
              </ul>

          </div>
        </div>
        </div>

      </section>
      {/* <section className="programme_admissions  d-flex flex-column align-items-center">
        <h3 className="mb-3">Admissions</h3>
        <hr className="heading-hr" />
        <p>Tests can be taken by online or offline means</p>

        <div className="container text-start mb-1 mt-3 d-flex flex-column align-items-center justify-content-center text-start pl-0">
          <div className="col-12 col-md-8">
            <p className="fw-bold mb-3">Admission Criteria</p>
            <ul className="mb-3 pl-4 pb-3">
              <li>Anyone above 16 years of age</li>
              <li>
                Give and pass the test and interview based on 10th level maths
              </li>
              <li>
                No prior education level expectation: Our students have been
                school and college dropouts, 10th or 12th pass as well as degree
                holders such as BSc, BTech
              </li>
              <li>Some level of English is good to have</li>
              <li>
                All students are from low income families of less than 15,000
                INR in urban areas and 10,000 INR in rural areas
              </li>
            </ul> */}
            {/* <div className="pb-3">
              <p className="fw-bold mb-3">Admission Process</p>
              <p className="mb-3">
                <span className="fw-bold">Maths Test :</span> Questions from 8th
                to 10th grade on ratios and proportions, unitary method,
                percentages and algebra. This test is 1.5 hrs long.
              </p>
              <p className="mb-3">
                <span className="fw-bold">English Interview :</span> As a second
                step, we will call you within 2 days for the English interview.
                The topics are general and you talk to a person for 10 to 15
                minutes. We assess your fluency level, grammar and confidence.
                It does not need to be perfect.
              </p>
              <p className="mb-3">
                <span className="fw-bold">Algebra Interview :</span> A 40 to 50
                minutes of telephonic interview to test knowledge of basic
                algebra (linear equations).
              </p> */}
              {/* <p className="mb-3">
                <span className="fw-bold">Culture Fit Interview :</span> 30
                minutes telephonic interview to understand the applicants
                motivations and see if they would enjoy Navgurukul community and
                learning culture.
              </p>
            </div>
            <p className="fw-bold mb-3">How to Prepare for the test?</p>
            <ul className="mb-0 pl-4">
              <li>
                Revise basic algebra problems from 8th to 10th level mathematics
              </li>
              <li>
                There will be both easy and medium level questions For English,
              </li>
              <li>
                just speak as much as possible to the best of your ability
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* <div className="test-p mb-2 mb-sm-5 d-flex flex-column align-items-center">
        <h3 className="mb-3">Conduct a Test in Your <span className="BackColor">Locality</span></h3>

        <div className="container w-100 mb-3 d-flex align-items-center justify-content-center">
          <div className="row d-flex flex-md-row flex-column justify-content-center w-100">
            <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
              <div
                className="card p-3 d-flex flex-column mh-10 bg-bg-card-1 justify-content-top align-items-center text-left text-sm-center w-100 rounded border-0 "
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.merakilearn.org/admission", "_blank");
                }}
              >
                <h4 className="fw-bold my-1 section-head text-center">
                  Online Tests
                </h4>
                <p className="my-1 section-para">
                  Anyone with a smartphone or access to Laptop/Computer can give
                  the test online by registering their phone number
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
              <div className="card p-3 d-flex flex-column mh-10 justify-content-top bg-bg-card-2 align-items-center text-left text-sm-center w-100 rounded border-0 second-card">
                <h4 className="fw-bold my-1 section-head text-center">
                  Offline Tests
                </h4>
                <p className="my-1 section-para">
                  If you are proctoring the exam, we will send you the test
                  papers. Upon completion, you can simply send the photos of the
                  answer and student information sheet to us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
       <div className="students my-2 my-sm-3  d-flex flex-column align-items-center mb-4">
        <h3 className="mt-3 ">Hear From Our Students</h3>
        
        <div className="container w-100  d-flex justify-content-center mt-3">
          <div className="row d-flex flex-md-row flex-column justify-content-center w-100 student-video-parent">
            <div className="col-12 video-container col-md-4 mt-3 d-flex align-items-center flex-column">
              <video
                src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/WhatsApp+Video+2022-02-19+at+18.39.06.mp4"
                alt="Priyanka's Journey at Navgurukul"
                width="340"
                height="195"
                controls
              ></video>
              <p className="mt-3 text-center fw-bold">
                Priyanka's Journey at Navgurukul
              </p>
            </div>
            <div className="col-12 video-container col-md-4 mt-3 d-flex align-items-center flex-column">
              <video
                src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/Neha-+Sarjapur+Campus.mp4"
                alt="Pooja's learning experience during COVID"
                width="340"
                height="195"
                controls
              ></video>
              <p className="mt-3 text-center fw-bold">
                Pooja's learning experience during COVID
              </p>
            </div>
            <div className="col-12 video-container col-md-4 mt-3 d-flex align-items-center flex-column">
              <video
                src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/NEW+student+experience.mp4"
                alt="Soni's multiculural experience in Navgurukul"
                width="340"
                height="195"
                controls
              ></video>
              <p className="mt-3 text-center fw-bold">
                Soni's multiculural experience in Navgurukul
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="next-step mt-2 mt-sm-3 d-flex flex-column align-items-center">
        <h4 className="mb-3">Ready for the Next Step?</h4>
        <div className="input d-flex flex-column justify-content-center align-items-center  text-left w-100  ">
          <button
            className="btn btn-primary text-white align-self-center w-100 my-1 regular-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.merakilearn.org/admission", "_blank");
            }}
          >
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programmer;

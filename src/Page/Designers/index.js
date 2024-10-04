// import React, { useState } from "react";
// import "./style.css";
// import "../../Global.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import icon1 from "./assets/icon1.png";
// import icon2 from "./assets/icon2.png";
// import video from "./assets/video.mp4";

// function Programmer() {
//   const [state, setState] = useState("");
//   return (
//     <div className="programmers d-flex flex-column justify-content-center">
//       <div className="header w-100 ">
//         <div
//           className="alert alert-danger d-flex justify-content-between py-3 align-items-center"
//           role="alert"
//         >
//           <h4 className=" section-head text-black fw-bold mb-0">
//             Designers’ Gurukul
//           </h4>
//           <Link to="/job-course">
//             <span className="desktop d-block text-primary fw-bold">
//               Change Gurukul
//             </span>
//           </Link>
//         </div>
//       </div>
//       <div className="hero-P container my-2 my-sm-5">
//         <div className="row d-flex justify-content-between flex-md-column-reverse flex-lg-row flex-md-row">
//           <div className="col left-P d-flex flex-column align-items-start">
//             <h3 className="section-head">
//               Navgurukul One-Year Graphic Design Course
//             </h3>
//             <div className="input d-flex flex-column justify-content-center align-items-start text-left p-1 w-90">
//               <p className="my-2">
//                 Study in an immersive environment at one of our campuses in
//                 Pune, Bengaluru or Dharamshala (for boys) with peer learning and
//                 mentors helping you at each turn.
//               </p>
//               <p className="my-2">
//                 To be a part of the Gurukul, all it takes is some determination
//                 and potential.
//               </p>

//               <button
//                 className="btn btn-primary text-white w-100 my-1 fs-sm-1.2  regular-btn"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.open("https://admissions.navgurukul.org/", "_blank");
//                 }}
//               >
//                 Take the Test
//               </button>

//               {/* <div className="text my-1">
//               Had a test already?{" "}
//               <span className="text-primary">Check status here</span>
//             </div> */}
//             </div>
//           </div>
//           <div className="programmers-main-video col d-flex justify-content-center">
//             <video
//               src={video}
//               width="500px"
//               height="300px"
//               className="programmers-main-video"
//               controls
//             ></video>
//           </div>
//         </div>
//       </div>

//       <div className="test-p my-2 mb-sm-5 d-flex flex-column align-items-center">
//         <h3 className="mb-3">Conduct a Test in Your Locality</h3>
//         <hr className="heading-hr mb-3" />
//         <div className="container w-100 my-3 d-flex align-items-center justify-content-center">
//           <div className="row d-flex flex-md-row flex-column justify-content-center w-100">
//             <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
//               <div
//                 className="card p-3 d-flex flex-column mh-10 bg-bg-card-1 justify-content-top align-items-center text-left text-sm-center w-100 rounded border-0 "
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.open("https://admissions.navgurukul.org/", "_blank");
//                 }}
//               >
//                 <h4 className="fw-bold my-1 section-head text-center">
//                   Online Tests
//                 </h4>
//                 <p className="my-1 section-para">
//                   Anyone with a smartphone or access to Laptop/Computer can give
//                   the test online by registering their phone number
//                 </p>
//               </div>
//             </div>
//             <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
//               <div className="card p-3 d-flex flex-column mh-10 justify-content-top bg-bg-card-2 align-items-center text-left text-sm-center w-100 rounded border-0 second-card">
//                 <h4 className="fw-bold my-1 section-head text-center">
//                   Offline Tests
//                 </h4>
//                 <p className="my-1 section-para">
//                   If you are proctoring the exam, we will send you the test
//                   papers. Upon completion, you can simply send the photos of the
//                   answer and student information sheet to us
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="students my-2 my-sm-5  d-flex flex-column align-items-center">
//         <h3 className="mb-3">Hear From Our Students</h3>
//         <div className="container w-100 mt-3  d-flex justify-content-center">
//           <div className="row d-flex flex-md-row flex-column justify-content-center w-100 student-video-parent">
//             <div className="col-12 col-md-4 my-3 d-flex justify-content-center ">
//               <video src={video} width="340" height="190" controls></video>
//             </div>
//             <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
//               <video src={video} width="340" height="190" controls></video>
//             </div>
//             <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
//               <video src={video} width="340" height="190" controls></video>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="next-step mt-2 mt-sm-5 d-flex flex-column align-items-center">
//         <h3 className="mb-3">Ready for the Next Step?</h3>
//         <div className="input d-flex flex-column justify-content-center align-items-center mt-3 text-left w-100  ">
//           <button
//             className="btn btn-primary text-white align-self-center w-100 my-1 regular-btn"
//             onClick={(e) => {
//               e.preventDefault();
//               window.open("https://admissions.navgurukul.org/", "_blank");
//             }}
//           >
//             Take the Test
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Programmer;


import React, { useState,useEffect } from 'react';
import './style.css'
import NavGurukulPdf from "./assets/NavGurukul Graphic Design Course Curriculum.pdf";
import design from "./assets/design_services.svg";
import chat from "./assets/Chat.svg";
import formNew from "./assets/Form New.png";
import rightarrow from "./assets/rightarrow.jpg"
import downarrow from "./assets/downarrow.svg"

const Designers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleDownloadPDF = () => {
    const pdfURL = require('./assets/NavGurukul Graphic Design Course Curriculum.pdf').default;

    if (!pdfURL) {
        console.error('PDF URL is not defined');
        return;
    }
    const anchor = document.createElement("a");
    anchor.href = pdfURL;
    anchor.download = "NavGurukul Graphic Design Course Curriculum.pdf"; 
    document.body.appendChild(anchor); // Append to body to make it work in Firefox
    anchor.click();
    document.body.removeChild(anchor); // Clean up
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container justify-content-center align-items-center text-md-center mt-4 mb-4">
      <h3 className="section-head mt-4" style={{ marginBottom:"32px" }}>NavGurukul One-Year Graphic Design Residential Programme</h3>
     
      <div className="container small-container"  > 
          <p>Currently operational in Jashpur, Jharkhand, the programme is helping marginalized girl students with the help of a government initiative to build a career in Graphic Design</p>
          <h6 className='mt-2 '>Admissions will open up soon for the next batch in May - June 2024</h6>
      </div>

      <h3 className="section-head" style={{ marginBottom:"32px" , marginTop:"80px" }}>About the Programme </h3>
      
      <div className="container small-container  ">
        <p>The Graphic Design programme is designed to impart technical skills in core design concepts such as color theory, typography, alignment and various deliverables that are created by Graphic Designers in a real life work setting</p>
      </div>

      <button
          type="button"
          className="btn section-para regular-btn w-30 mt-2  "
          style={{ height: '50px' }}  
          onClick={handleDownloadPDF}
        >
          Download Curriculum
      </button>

      <h3 className="section-head  " style={{ marginBottom:"32px", marginTop:"80px"  }}>Admission Process</h3>
      <div className="container "> 
        <div className="row g-6 justify-content-center"  style={{ marginBottom:"32px" }}> 
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4"> 
            <div className="item-container d-flex align-items-center justify-content-center">
              <img src={formNew} className="img-fluid me-3 mr-2" alt="Image" />
              <p className="mb-0" style={{ whiteSpace: 'nowrap' }}>Mobilization Effort for Students</p>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4"> 
            <div className="item-container d-flex align-items-center justify-content-center">
              <img src={isSmallScreen  ? downarrow : rightarrow} alt="Arrow" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4"> 
            <div className="item-container d-flex align-items-center justify-content-center">
              <img src={design} className="img-fluid me-3 mr-2" alt="Image" />
              <p className="mb-0" style={{ whiteSpace: 'nowrap' }}>Online Design Test</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4"> 
            <div className="item-container d-flex align-items-center justify-content-center">
              <img src={isSmallScreen  ? downarrow : rightarrow} alt="Arrow" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4"> 
            <div className="item-container d-flex align-items-center justify-content-center">
              <img src={chat} className="img-fluid me-3 mr-2" alt="Image" />
              <p className="mb-0" style={{ whiteSpace: 'nowrap' }}>In-Person/Online Conversation</p>
            </div>
          </div>

        </div>
        <h6 className='small-container mb-5'>Admissions will open up soon for next batch in May - June 2024</h6>   
      </div>
     </div>
  );
};

export default Designers;




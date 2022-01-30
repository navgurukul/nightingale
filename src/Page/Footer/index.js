// import React from "react";
// import "./styles.css";
// import img from "./assets/logo.png";
// import fb from "./assets/fb.png";
// import twitter from "./assets/twitter.png";
// import linkedin from "./assets/linkedin.png";

// function Footer() {
//   return (
//     <div className="footer-container">
//       <div className="inner-container">
//         <div className="ng-logo">
//           {/* <img
//             // className="ng-logo"
//             // src={require("./assets/logo.png")}
//             src={img}
//           /> */}
//           <img src={require("./assets/logo.png").default} />
//         </div>
//         <div className="title-container">
//           <div className="row row-title">
//             <div className="col-sm">About</div>
//             <div className="col-sm row-sub-title">Our Initiatives</div>
//             <div className="col-sm row-sub-title">Get Involved</div>
//             <div className="col-sm">Learn Online</div>
//           </div>
//           <div className="row">
//             <div className="col-sm">Our Story</div>
//             <div className="col-sm row-sub-title">Guaranteed Job Courses</div>
//             <div className="col-sm row-sub-title">Be a Partner</div>
//             <div className="col-sm">
//               <div className="merakilogo">
//                 <img src={require("./assets/Merakilogo.png").default} />
//               </div>
//               <div className="merakilearn">
//                 <img src={require("./assets/MerakiLearn.png").default} />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm">Team</div>
//             <div className="col-sm row-sub-title">Meraki</div>
//             <div className="col-sm row-sub-title">Donate</div>
//             <div className="col-sm">
//               <div className="playstore-logo">
//                 <img src={require("./assets/playstore.png").default} />
//               </div>
//               <div className="playstore">Now on Playstore</div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm">Gallery</div>
//             <div className="col-sm row-sub-title">Code India Fellowships</div>
//             <div className="col-sm row-sub-title">Careers</div>
//             <div className="col-sm">About</div>
//           </div>
//           <div className="row">
//             <div className="col-sm">Blog</div>
//             <div className="col-sm row-sub-title">NG Labs</div>
//             <div className="col-sm row-sub-title">Volunteer</div>
//             <div className="col-sm">About</div>
//           </div>
//         </div>

//         <div className="footer-divider"></div>
//         <div className="details">
//           <div className="policy">
//             <div>Legal & Privacy Policy</div>
//             <div className="hiring">Hire From Us</div>
//           </div>
//           <div className="navgurukul">© 2021 Navgurukul</div>
//           <div className="social-media">
//             <div className="facebook">
//               <img src={fb} />
//             </div>
//             <div className="linkedin">
//               <img src={twitter} />
//             </div>
//             <div className="twitter">
//               <img src={linkedin} />
//             </div>
//           </div>
//         </div>
//         <div className="footer-details">
//           <p className="title">
//             Registered as Navgurukul Foundation for Social Welfare
//           </p>
//           <p className="sub-title">CIN Number: U85300HR2016NPL066468</p>
//           <p className="sub-title">Let’s talk at hi@navgurukul.org</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import "./styles.css";
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-container f-Nuni pb-5">
      <div className="inner-container">
        <div className="ng-logo">
          <img src={require("./assets/logo.png").default} />
        </div>
        <div className="title-container d-flex">
          <div className="row w-100 justify-content-between">
            <div class="col-md-2 p-0">
              <ul class="nav-footer ">
                <li className="row-title">About</li>
                <li>
                  <Link to="/about">Our Story</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/">Gallary</Link>
                </li>
                <li>
                  <a
                    href="https://medium.com/navgurukul"
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    Blog <FiExternalLink className="ml-2" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 p-0">
              <ul class="nav-footer ">
                <li className="row-title">Our Initiatives</li>
                <li>
                  <Link to="/job-course">Guaranteed Job Courses</Link>
                </li>
                <li>
                  <a
                    href="https://www.merakilearn.org/"
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    Meraki <FiExternalLink className="ml-2" />
                  </a>
                </li>
                <li>
                  <Link to="/cif">Code India Fellowships</Link>
                </li>
                <li>
                  <Link to="/nglabs">NG Labs</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-2 p-0">
              <ul class="nav-footer ">
                <li className="row-title">Get Involved</li>
                <li className="titlesss">
                  <Link to="/partners">Be a Partner</Link>
                </li>
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
                <li>
                  <a
                    href="https://admissions.navgurukul.org/"
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    Careers <FiExternalLink className="ml-2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScHvysncnhJkSMtpdpGl_uPhJWlE81hp6l5m2mvuE1hoxX-dQ/viewform"
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    Volunteer <FiExternalLink className="ml-2" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 p-0">
              <ul class="nav-footer">
                <li className="row-title">Learn Online</li>
                <li>
                  <a href="https://www.merakilearn.org/" target="_blank">
                    <div className="merakilogo">
                      <img src={require("./assets/Merakilogo.png").default} />
                    </div>
                    <div className="merakilearn">
                      <img src={require("./assets/MerakiLearn.png").default} />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.merakilearn.org/" target="_blank">
                    <div className="playstore-logo">
                      <img src={require("./assets/playstore.png").default} />
                    </div>
                    <div className="playstore">Now on Playstore</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>
        <div className="details ">
          <div className="policy">
            <Link to="/">
              <div>Legal & Privacy Policy</div>
            </Link>
            <Link to="/hiring">
              <div className="hiring">Hire From NG</div>
            </Link>
          </div>
          <div className="copyright">© 2021 Navgurukul</div>
          <div className="social-media">
            <div className="facebook">
              <img src={fb} />
            </div>
            <div className="linkedin">
              <img src={linkedin} />
            </div>
            <div className="twitter">
              <img src={twitter} />
            </div>
          </div>

          
        </div>
        <div className="footer-details">
          <p className="title">
            Registered as Navgurukul Foundation for Social Welfare
          </p>
          <p className="sub-title">CIN Number: U85300HR2016NPL066468</p>
          <p className="sub-title m-0">
            Let’s talk at{" "}
            <a href="#" className="email">
              hi@navgurukul.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

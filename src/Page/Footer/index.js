import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">

        <div className='footer-contetnt-wrappper'>
          <div className="footer-brand">
            <img src={require("./assets/logo.png").default} className="mb-1 mt-0" />

            <div className="social-icons">
              <div className="d-flex align-items-center">
                <div className="facebook">
                  <a href="https://www.facebook.com/navgurukul/" target="_blank">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-background"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#F05F40"
                      />
                      <g clip-path="url(#clip0_432_1637)">
                        <path
                          d="M19.5742 17.3508L20.0008 14.5999H17.3335V12.8148C17.3335 12.0623 17.7061 11.3287 18.9007 11.3287H20.1133V8.98663C20.1133 8.98663 19.0129 8.80078 17.9608 8.80078C15.7642 8.80078 14.3284 10.1183 14.3284 12.5034V14.5999H11.8867V17.3508H14.3284V24.0008H17.3335V17.3508H19.5742Z"
                          fill="#E16749"
                          className="socialmedia-icon"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_432_1637">
                          <rect
                            width="9.6"
                            height="15.2"
                            fill="white"
                            transform="translate(11.2 8.80078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="linkedin mx-1">
                  <a
                    href="https://www.linkedin.com/company/navgurukul/"
                    target="_blank"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-background"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#F05F40"
                      />
                      <g clip-path="url(#clip0_432_1634)">
                        <path
                          d="M12.0233 22.0016H9.03784V12.6548H12.0233V22.0016ZM10.529 11.3798C9.57431 11.3798 8.79999 10.611 8.79999 9.68289C8.79999 9.23708 8.98215 8.80953 9.30639 8.49429C9.63063 8.17905 10.0704 8.00195 10.529 8.00195C10.9875 8.00195 11.4273 8.17905 11.7515 8.49429C12.0758 8.80953 12.2579 9.23708 12.2579 9.68289C12.2579 10.611 11.4833 11.3798 10.529 11.3798ZM23.1968 22.0016H20.2178V17.4516C20.2178 16.3673 20.1953 14.9766 18.6656 14.9766C17.1134 14.9766 16.8756 16.1548 16.8756 17.3735V22.0016H13.8933V12.6548H16.7566V13.9298H16.7984C17.197 13.1954 18.1706 12.4204 19.6231 12.4204C22.6446 12.4204 23.2 14.3548 23.2 16.8673V22.0016H23.1968Z"
                          fill="#E16749"
                          className="socialmedia-icon"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_432_1634">
                          <rect
                            width="14.4"
                            height="16"
                            fill="white"
                            transform="translate(8.79999 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="twitter">
                  <a href="https://twitter.com/navgurukul" target="_blank">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-background"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#F05F40"
                      />
                      <g clip-path="url(#clip0_432_1640)">
                        <path
                          d="M21.7198 13.2151C21.729 13.3386 21.729 13.4622 21.729 13.5857C21.729 17.3533 18.7594 21.6945 13.332 21.6945C11.6599 21.6945 10.1066 21.2268 8.79999 20.4151C9.03756 20.4416 9.26596 20.4504 9.51268 20.4504C10.8924 20.4504 12.1624 20.0004 13.1766 19.2328C11.8792 19.2063 10.7919 18.3857 10.4172 17.2563C10.6 17.2827 10.7827 17.3004 10.9746 17.3004C11.2396 17.3004 11.5046 17.2651 11.7513 17.2033C10.399 16.9386 9.38474 15.7916 9.38474 14.4063V14.371C9.77762 14.5828 10.2345 14.7151 10.7187 14.7327C9.92381 14.221 9.40302 13.3474 9.40302 12.3592C9.40302 11.8298 9.54918 11.3445 9.80504 10.921C11.2578 12.6504 13.4416 13.7798 15.8903 13.9033C15.8447 13.6916 15.8172 13.471 15.8172 13.2504C15.8172 11.6798 17.133 10.4004 18.7685 10.4004C19.6183 10.4004 20.3858 10.7445 20.9249 11.3004C21.5919 11.1769 22.2314 10.9386 22.798 10.6122C22.5786 11.2739 22.1127 11.8298 21.5005 12.1827C22.0944 12.121 22.6701 11.9621 23.2 11.7416C22.798 12.3063 22.2955 12.8092 21.7198 13.2151Z"
                          fill="#E16749"
                          className="socialmedia-icon"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_432_1640">
                          <rect
                            width="14.4"
                            height="12"
                            fill="white"
                            transform="translate(8.79999 10.4004)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=' w-90'>
              <p className="title fw-bold lw-1">
                Registered as Navgurukul Foundation for Social Welfare
              </p>
              <p className="sub-title mt-1">CIN : U85300HR2016NPL066468</p>
              <p className="sub-title m-0 mb-4 mt-1">
                Let’s talk at{" "}
                <a href="mailto:hi@navgurukul.org" style={{ color: '#EB5F42' }} className='fw-bold email'>
                  hi@navgurukul.org
                </a>
              </p>
            </div>

          </div>
          <div className="footer-section about-us">
            <h6>ABOUT US</h6>
            <ul>
              <li>
                <a
                  href='/about'
                >
                  Who We Are
                </a>
              </li>
              <li><a href="/team">Team</a></li>
              <li>
                <a
                  href="https://medium.com/navgurukul"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section schools">
            <h6>SCHOOLS</h6>
            <ul>
              <li><a href="/school-programing">School of Programming</a></li>
              <li><a href="/school-design">School of Design</a></li>
              <li><a href="/school-busines">School of Business</a></li>
              <li><a href="/school-finance">School of Finance</a></li>
            </ul>
          </div>
          <div className="footer-section digital-initiatives">
            <h6>DIGITAL INITIATIVES</h6>
            <ul>
              <li>
                <a
                  href="https://zuvy.org"
                  target="_blank"
                >
                  Zuvy
                </a>
              </li>
              <li>
                <a
                  href="https://www.merakilearn.org"
                  target="_blank"
                >
                  Meraki
                </a>
              </li>
              <li>
                <a
                  href="https://www.codeindiafellowship.org"
                  target="_blank"
                >
                  Code India Fellowship
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section get-involved">
            <h6>GET INVOLVED</h6>
            <ul>
              <li>
                <a
                  href="/partners"
                >
                  Be a Partner
                </a>
              </li>
              <li>
                <a
                  href="https://recruiterflow.com/navgurukul/jobs"
                  target="_blank"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScHvysncnhJkSMtpdpGl_uPhJWlE81hp6l5m2mvuE1hoxX-dQ/viewform"
                  target="_blank"
                >
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section our-campuses">

            <h6>
              <Link to="/campus"
                style={{ textDecoration: 'none' }}
                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'none'}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                <span className='row-title'>
                  OUR CAMPUSES
                </span>
              </Link>
            </h6>
            <ul>
              <li><a href="/hiring" className='fw-bold'>HIRE FROM US</a></li>
              <li><a href="/donate" className='fw-bold'>DONATE</a></li>
            </ul>
          </div>
        </div>
        <div className="details mt-3">
          <div className="policy">
            <Link to="/privacy" style={{color: '#4A4A4A'}}>
              <span style={{ color: '#4A4A4A' }} >Legal & Privacy Policy</span>
            </Link>
          </div>

          <div className="copyright">
            © 2022 Navgurukul
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
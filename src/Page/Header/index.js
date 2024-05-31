import React, { useState } from "react";
// import JobCourse from "../JobCourse";
import { FiExternalLink } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import "./styles.css";
import "../../Global.css";
import externalLink from "./assets/external-link.png";
import { BiChevronsDown } from "react-icons/bi";


function Header() {
  const [toggle, setToggle] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="NG-Header navbar navbar-expand-lg navbar-light bg-light navbar-color">
      <a class="navbar-brand" href="/">
        <img
          src={require("./assets/logo.png").default}
        // className="nav-logo"
        />
      </a>

      <button
        class="navbar-toggler hover"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-2"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-list-2">
        <ul className="navbar-nav mr-auto nav-font-color">
          <li
            className="nav-item dropdown "
            onMouseOver={() => setShowDropdown(true)}
            onMouseOut={() => setShowDropdown(false)}
          >
            <a
              className="nav-link header-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Us
              <BiChevronDown />
            </a>

            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
              show={showDropdown}
            >
              <a className="dropdown-item" href="/about">
                Who We Are
              </a>
              <a className="dropdown-item" href="/team">
                Team
              </a>
              <a
                className="dropdown-item mr-2"
                target="_blank"
                href="https://medium.com/navgurukul"
              >
                Blog
                <FiExternalLink className="ml-2" />
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link  header-title mr-3"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              School
              <BiChevronDown />
            </a>

            <div
              className="dropdown-menu dropdown-items"
              show={showDropdown}
            >
              <a className="dropdown-item" href="/schoolofprograming">
                School of Programming
              </a>
              <a className="dropdown-item" href="/schoolDesign">
                School of Design
              </a>
              <a className="dropdown-item" href="/schoolOfBusines">
                School of Business
              </a>
              <a className="dropdown-item" href="/SchoolOfFinance">
                School of Finance
              </a>
            </div>
          </li>
            <li
            className="nav-item dropdown "
            onMouseOver={() => setShowDropdown(true)}
            onMouseOut={() => setShowDropdown(false)}
          >
            <a
              className="nav-link header-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Digital Initiatives
              <BiChevronDown />
            </a>

            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
              show={showDropdown}
            >
              <a className="dropdown-item" href="https://zuvy.org">
                Zuvy <FiExternalLink className="ml-2" />
              </a>
              <a className="dropdown-item" href="https://samyarth.org">
                Samyarth <FiExternalLink className="ml-2" />
              </a>
              <a
                className="dropdown-item"
                href="https://www.merakilearn.org"
                target="_blank"
              >
                Meraki <FiExternalLink className="ml-2" />
              </a>
              <a
                className="dropdown-item"
                href="https://www.codeindiafellowship.org"
                target="_blank"
              >
                Code India Fellowships <FiExternalLink className="ml-2" />
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link header-title mr-3" href="/campus">
              Our Campuses
            </a>
          </li>
            <li
            className="nav-item dropdown "
            onMouseOver={() => setShowDropdown(true)}
            onMouseOut={() => setShowDropdown(false)}
          >
            <a
              className="nav-link header-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Get Involved
              <BiChevronDown />
            </a>

            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
              show={showDropdown}
            >
              <a className="dropdown-item" href="partners">
                Partner With Us
              </a>
              <a className="dropdown-item" href="https://recruiterflow.com/navgurukul/jobs">
                Careers <FiExternalLink className="ml-2" />
              </a>
              <a
                className="dropdown-item"
                href="https://recruiterflow.com/navgurukul/jobs/112"
                target="_blank"
              >
                Volunteer <FiExternalLink className="ml-2" />
              </a>
              
            </div>
          </li>
        </ul>
        <ul className="navbar-nav nav-font-color gap-responsive">
          <button
            type="button"
            className="btn dashed-btn"
            style={{ height: "48px", width: "135px" }}
            onClick={(e) => {
              // e.preventDefault();
              window.open(
                "/hiring",
                "_blank"
              );
            }}
          >
            Hire from Us 
          </button>
          <button
            type="button"
            className="btn regular-btn "
            style={{ height: "48px", width: "135px" }}
            onClick={(e) => {
              // e.preventDefault();
              window.open(
                "/donate",
                "_blank"
              );
            }}
          >
            Donate
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

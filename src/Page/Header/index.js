import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import "./styles.css";
import "../../Global.css";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
   const openLinkInNewTab = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <nav className="NG-Header navbar navbar-expand-lg navbar-light bg-light navbar-color">
      <a className="navbar-brand mr-4 ml-4" href="/">
        <img
          src={require("./assets/logo.png").default}

        />
      </a>

      <button
        className="navbar-toggler hover"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-2"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-list-2">
        <ul className="navbar-nav mr-auto nav-font-color">
          <li
            className="nav-item dropdown "
            onMouseOver={() => setShowDropdown(true)}
            onMouseOut={() => setShowDropdown(false)}
          >
            <a
              className="nav-link header-title ml-4"
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
              className="nav-link  header-title mr-4 ml-4"
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

            <div className="dropdown-menu dropdown-items" show={showDropdown}>
              <a className="dropdown-item" href="/school-programing">
                School of Programming
              </a>
              <a className="dropdown-item" href="/school-design">
                School of Design
              </a>
              <a className="dropdown-item" href="/school-busines">
                School of Business
              </a>
              <a className="dropdown-item" href="/school-finance">
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
              className="nav-link header-title "
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
              {/* <a className="dropdown-item" href="https://samyarth.org">
                Samyarth <FiExternalLink className="ml-2" />
              </a> */}
              <a
                className="dropdown-item"
                href="https://www.merakilearn.org"
                target="_blank"
              >
                Meraki <FiExternalLink className="ml-2" />
              </a>
              <a
                className="dropdown-item "
                href="https://www.codeindiafellowship.org"
                target="_blank"
              >
                Code India Fellowships <FiExternalLink className="ml-2" />
              </a>
            </div>
          </li>
          <li
            className="nav-item dropdown ml-4 "
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
              <a
                className="dropdown-item"
                href="/careers"
              >
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
            className="btn custom-outline-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/hiring";
            }}
          >
            Hire from Us
          </button>
            <button
            type="button"
            className="btn custom-outline-button btn-width"
            onClick={(e) => {
                openLinkInNewTab(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdehRy3gDHgkj4bC-0AehiCNrk1_WgP39Zm7-l0YXowREupdw/viewform"
                )
            }}
          >
            CSR Enquiries
          </button>
          <button
            type="button"
            className="btn regular-btn "
            style={{ height: "48px", width: "135px" }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/donate";
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

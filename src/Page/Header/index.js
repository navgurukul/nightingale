import React, { useState } from "react";
// import JobCourse from "../JobCourse";
import "./styles.css";
import externalLink from "./assets/external-link.png";

function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="NG-Header navbar navbar-expand-lg navbar-light bg-light navbar-color">
      <a class="navbar-brand" href="/">
        <img
          src={require("./assets/logo.png").default}
          // className="nav-logo"
        />
      </a>
      {/* {toggle ? (
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-2"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      ) : (
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-2"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          &
        </button>
      )} */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-2"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        // onClick={() => {
        //   setToggle(!toggle);
        // }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <div class="collapse navbar-collapse" id="navbar-list-2">
        <ul className="navbar-nav mr-auto nav-font-color">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle header-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Our Initiatives
            </a>
            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/job-course">
                Guaranteed Job Courses
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a
                className="dropdown-item"
                href="https://www.merakilearn.org/"
                target="_blank"
              >
                Learn Online with Meraki
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="/cif">
                Code India Fellowships
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="/nglabs">
                NG Labs
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav nav-font-color">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle header-title mr-3"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </a>
            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/about">
                Our Story
              </a>
              <a className="dropdown-item" href="/team">
                Team
              </a>
              {/* <a className="dropdown-item" href="/gallery">
                Gallery
              </a> */}
              <a
                className="dropdown-item mr-2"
                target="_blank"
                href="https://medium.com/navgurukul"
              >
                Blog
                <img className="ml-2" src={externalLink}></img>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle header-title mr-3"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Get Involved
            </a>
            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="partners">
                Partner With Us
              </a>
              <a className="dropdown-item" href="/donate">
                Donate
              </a>
              <a
                className="dropdown-item mr-2"
                href="https://admissions.navgurukul.org/"
                target="_blank"
              >
                Career
                <img className="ml-2" src={externalLink}></img>
              </a>
              <a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScHvysncnhJkSMtpdpGl_uPhJWlE81hp6l5m2mvuE1hoxX-dQ/viewform" target="_blank">
                Volunteer
              </a>
            </div>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link disabled header-title" href="#"> */}
            <a className="nav-link header-title mr-3" href="/hiring">
              Hire from NG
            </a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link disabled header-title" href="#"> */}
            <a
              className="nav-link header-title d-flex align-items-center mr-3"
              href="https://www.merakilearn.org/"
              target="_blank"
            >
              Meraki
              <img className="ml-2" src={externalLink}></img>
            </a>
          </li>
          <div className="divider language mr-3"></div>
          <li className="nav-item dropdown language">
            <a
              className="nav-link dropdown-toggle header-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              English
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                English
              </a>
              <a className="dropdown-item" href="#">
                Hindi
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

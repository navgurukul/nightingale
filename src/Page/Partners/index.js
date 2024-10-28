import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import "../../Global.css";
import Donor from './assets/imgeslogo1.png'
import MbPartners from './assets/moving.png'
import placementPartner from './assets/imglogo2.png'
import CampusPartners from './assets/campuspartener.png'

function Partners() {
  return (
    <div className="partners d-flex flex-column justify-content-center w-100">
      <div className="container partnerInfo align-items-center d-flex flex-column  justify-content-center w-100">
        <h3 className="mt-5 section-head mb-3">Partner Highlights</h3>
        <div className="partner-content-data body1 col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
          Our partners help us give access to aspirational careers to youth who want to grow but don’t have means to do so. Our partnerships
          are the backbone of our operations. Our partners share our values,
          our partners share our impact.
        </div>
        <button
          className="btn btn-primary section-para regular-btn mt-4 mb-4 px-4 py-2"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://forms.gle/NfXdR1dg4zpSyYvZ9", "_blank");
          }}

        >
          Partner With Us
        </button>

        <h3 className="mt-3 section-head mb-4 mr-4">Our Partners</h3>
      </div>
      <div className="w-100 mb-0  md-5 d-flex align-items-center flex-column">
        <div className="row  mb-4">
          <div className="col-md-6 col-sm-12">
            <div className="card h-367 border ">
              <div className="card-header">
                <h4 className="card-title">Donors</h4>
              </div>
              <div className="card-img-wrapper mt-2">
                <img src={Donor} className="custom-img-1" alt="Image 1" />
              </div>
            </div>

            <div className="card h-271 border top-mar " >
              <div className="card-header">
                <h4 className="card-title">Mobilization Partners</h4>
              </div>
              <div className="card-img-wrapper  mt-2">
                <img src={MbPartners} className="custom-img-3" alt="Image 3" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card h-367 border">
              <div className="card-header">
                <h4 className="card-title">Placement Partners</h4>
              </div>
              <div className="card-img-wrapper  mt-2">
                <img src={placementPartner} className="custom-img-2" alt="Image 2" />

              </div>
            </div>
            <div className="card h-175 border top-mar">
              <div className="card-header">
                <h4 className="card-title">Campus Partners</h4>
              </div>
              <div className="card-img-wrapper  mt-2">
                <img src={CampusPartners} className="custom-img-4" alt="Image 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Partners;

import React from 'react'
import "./style.css";
import img from "../assets/keyFacilities.png"
import verifiedimg from '../assets/verified.png'

function KeyFacilities() {
  return (
     
    <div className="container mt-3 mb-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={img}
            alt="keyFacilities"
            className="img" 
          />
        </div>

        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <img src={verifiedimg} alt="verified" className="icon" />
            <p className="mb-0 font body1 ">All expenses are paid by Navgurukul and free for the student</p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <img src={verifiedimg} alt="verified" className="icon" />
            <p className="mb-0 font body1 ">Equipped with shared dorms, fully functional kitchen and other amenities of daily use</p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <img src={verifiedimg} alt="verified" className="icon" />
            <p className="mb-0 font body1 ">Classrooms and large residential spaces</p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <img src={verifiedimg} alt="verified" className="icon" />
            <p className="mb-0 font body1 ">Provision of laptop, internet, mentors, english classes, mental health counselling</p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default KeyFacilities;
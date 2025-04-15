import React from 'react';
import "./style.css";
import Logo from "./image/Eternal.png"; 

const AdmissionsAlert = () => {
  // WhatsApp group links
  const sopWhatsAppLink = "https://chat.whatsapp.com/LTVyrLeGCHcKV7UmgEt09H";
  const bcaWhatsAppLink = "https://chat.whatsapp.com/JX0J1T2x8EPEUkgF3pn9es";
  
  // Handler functions for button clicks
  const handleSOPButtonClick = () => {
    window.open(sopWhatsAppLink, '_blank');
  };
  
  const handleBCAButtonClick = () => {
    window.open(bcaWhatsAppLink, '_blank');
  };
  
  return (
    <div className="admissions-container">
      <div className="admissions-header">
        <h2>Admissions Alert</h2>
      </div>
      <div className="admissions-cards-row">
        {/* First Card */}
        <div className="admissions-card">
          <h4 className="card-heading">Build Your Future With Navgurukul</h4>
          
          <p className="card-text">
            <strong>Admissions Open!</strong> for Fully Funded Residential Programs at
            School of Programming (SOP) & School of Business (SOB)
          </p>
          
          <p className="card-text">Join the Whatsapp group today!</p>
          
          <button className="apply-button" onClick={handleSOPButtonClick}>
            Get Info & Apply
          </button>
        </div>
        
        {/* Second Card */}
        <div className="admissions-card">
          <h4 className="card-heading">Earn Your University Degree</h4>
          
          <div className="flex-row">
            <img src={Logo} alt="Graduation Icon" className="icon" />
            <div>
              <strong>Admissions Open!</strong> for BCA program in
              collaboration with Eternal University
            </div>
          </div>
          
          <p className="card-text">Join the Whatsapp group today!</p>
          
          <button className="apply-button" onClick={handleBCAButtonClick}>
            Get Info & Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsAlert;
import React from 'react';
import './style.css';
const AdmissionProcess = ({ stages }) => {
  const renderStructuredText = (data) => {
    if (typeof data === 'object') {
      return Object.entries(data).map(([key, value], index) => (
        <React.Fragment key={index}>
          {key}: {value}<br />
        </React.Fragment>
      ));
    }
    if (typeof data === 'string') {
      return data.split(',').map((item, index) => (
        <React.Fragment key={index}>
          {item.trim()}<br />
        </React.Fragment>
      ));
    }
    return null;
  };

  return (
    <div className="partners-data w-100 mb-0 md-5 d-flex align-items-center flex-column" style={{marginTop:"40px"}}>
       <h3 className="text-center" style={{ marginBottom: "32px"}}>
                <span className="BackColor">Admission</span>  Process
            </h3>
      <div className="all-partners w-75 d-flex flex-column">
        <div className="all-partners-row d-flex justify-content-around w-100 my-1" >
          <div className="container-fluid overflow-hidden">
            <div className="row">
              {stages.map((stage, index) => (
                <div className="col-sm-12 col-lg-3 col-md-6" key={index} >
                  <div className="">
                    <div
                      className="input d-flex flex-column justify-content-center align-items-right text-left w-70"
                      style={{ padding: "16px"}}
                    >
                      <button
                        style={{ fontSize: "18px" }}
                        className="btn btn-dark stage-btn"
                      >
                        {stage.buttonText}
                      </button>
                    </div>
                    <div
                      style={{
                        background: "#FBDFD9",
                        borderRadius: "8px",
                      }}
                    >
                      <div className="card-body stage-card">
                        <h5 className="card-title">{stage.cardTitle}</h5>
                        <p className="card-text">{stage.cardText}</p>
                      </div>
                    </div>
                    <div
                      className=""
                      style={{
                        borderRadius: "8px",
                        boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
                        padding:"16px",
                        marginTop:"16px",
                      }}
                    >
                      <div className="card-body">
                        <p className="">
                          <span className="fw-bold">Format: </span>
                          {stage.format}
                        </p>
                        {stage.eligibility && (
                          <p className="">
                            <span className="fw-bold">Eligibility: </span>
                            {stage.eligibility}
                          </p>
                        )}
                        {stage.testStructure && (
                          <p className="">
                            <span className="fw-bold">Test Structure and Marks: </span><br></br>
                            {renderStructuredText(stage.testStructure)}
                          </p>
                        )}
                        {stage.passingCriteria && (
                          <p className="">
                            <span className="fw-bold">Passing Criteria: </span><br></br>
                            {renderStructuredText(stage.passingCriteria)}
                          </p>
                        )}
                        {stage.additionalInfo && (
                          <span style={{ fontSize: "14px" }}>
                            {stage.additionalInfo}
                          </span>
                        )}
                        {stage.confirmation && (
                          <p className="">
                            <span className="fw-bold">Confirmation: </span>
                            {stage.confirmation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;


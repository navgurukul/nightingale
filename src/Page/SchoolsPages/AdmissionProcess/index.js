import "./style.css"
function AdmissionProcess() {
    return (
        <>
            <div className="container admision-page">
                <h5 className="admission-title">Admission Process</h5>
                <div class="row custom-row">
                    <div class="col-sm-12 col-lg-3 col-md-12">
                        <div className="stage-container">
                            <button type="button" class="btn btn-dark stage-area">Stage 1</button>
                        </div>
                        <div className="container-card-1">
                            <p className="subtitle">Screening Test</p>
                            <span className="subtitle-prag">Assesses fundamental design aptitude on how the student interprets the messages communicated by designs in day to day life</span>
                        </div>
                        <div className="container-card-2">
                            <p className="eligibility"><span className="title-class">Format :</span> Online/Offline</p>
                            <p className="eligibility"> <span className="title-class">Eligibility :  </span> Student from any stream</p>
                            <p className="eligibility"> <span className="title-class">Test Structure :</span>
                                Multiple Choice Questions on design aptitude
                                Sketching Questions</p>
                            <p className="eligibility">
                                <span className="title-class">
                                    Passing Criteria:
                                </span>
                                A specialized rubric
                                is used<br></br> to grade the answers.
                                Those<br></br> who get more than 50%<br></br>
                                answers and sketches as<br></br> “Good
                                Enough” pass
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 col-md-12 ">
                        <div className="stage-container">
                            <button type="button" class="btn btn-dark stage-area">Stage 2</button>
                        </div>
                        <div className="container-card-1">
                            <p className="subtitle">Academic Interview</p>
                            <span className="subtitle-prag">Further evaluates the design aptitude and English, similar to the screening test</span>
                        </div>
                        <div className="container-card-2">
                            <p className="eligibility"><span className="title-class">Format  :</span> Online</p>
                            <p className="eligibility"> <span className="title-class">Eligibility  :  </span>  Candidates qualifying the screening test.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 col-md-12 ">
                        <div className="stage-container">
                            <button type="button" class="btn btn-dark stage-area">Stage 3</button>
                        </div>
                        <div className="container-card-1">
                            <p className="subtitle">Culture Fit Round</p>
                            <span className="subtitle-prag">Assess cultural alignment, focusing on needs, emotional aspects, and commitment to community</span>
                        </div>
                        <div className="container-card-2">
                            <p className="eligibility"><span className="title-class">Format  :</span> Online/Offline</p>
                            <p className="eligibility"> <span className="title-class">Eligibility   :  </span> Successful candidates from the academic interview</p>
                            <p className="eligibility">
                                <span className="eligibility-condidates">Candidates are either marked 'Failed' or﻿ 'In Preparation'. Depending on which re-interview  is allowed in 7 to 15 days</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 col-md-12" >
                        <div className="stage-container">
                            <button type="button" class="btn btn-dark stage-area">Stage 4</button>
                        </div>
                        <div className="container-card-1">
                            <p className="subtitle">Offer Letter</p>
                            <span className="subtitle-prag">Confirms selection for residential course</span>
                        </div>
                        <div className="container-card-2">
                            <p className="eligibility"><span className="title-class">Format  :</span> Online/Offline</p>
                            <p className="eligibility"> <span className="title-class">Eligibility :  </span> Candidates passing the culture-fit round.</p>
                            <p className="eligibility"> <span className="title-class">Confirmation  :</span>
                                Sent via email</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdmissionProcess;
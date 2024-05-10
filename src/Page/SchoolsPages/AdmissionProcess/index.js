import "./style.css"
function AdmissionProcess() {
    return (
        <>
            <div className="container">
                <h5 className="text-center section-heading-one">Admission Process</h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <button className="stage-1 btn btn-dark" type="button">Stage 1</button>
                        </div>
                        <div className="container-card">
                            <h5 className="heading">Screening Test</h5>
                            <p className="stage-first-content">Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.</p>
                        </div>
                        <div className="container-description">
                            <div className="description-content">
                                <p className="text"><span className="title">Format: </span>Online/Offline</p>
                                <p className="text"><span className="title">Eligibility:</span> Student from any stream</p>
                                <p className="text">
                                    <span className="title">Test Structure and Marks:</span><br></br>
                                    Maths: 20 marks<br></br>
                                    English: 10 marks<br></br>
                                    Total: 30 marks<br></br>
                                </p>
                                <p className="text">
                                    <span className="text">Passing Criteria:</span><br></br>
                                    Maths: 14 marks<br></br>
                                    English: 6 marks<br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <button className="stage-1 btn btn-dark" type="button">Stage 2</button>
                        </div>
                        <div className="container-card">
                            <h5 className="heading">Academic Interview</h5>
                            <p className="stage-first-content">Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.</p>
                        </div>
                        <div className="container-description">
                            <div className="description-content">
                                <p className="text"><span className="title">Format:</span> Online</p>
                                <p className="text"><span className="title">Eligibility:</span> Candidates qualifying the screening test.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <button className="stage-1 btn btn-dark" type="button">Stage 3</button>
                        </div>
                        <div className="container-card">
                            <h5 className="heading">Culture Fit Round</h5>
                            <p className="stage-first-content">Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.</p>
                        </div>
                        <div className="container-description">
                            <div className="description-content">
                                <p className="text"><span className="title">Format:</span> Online/Offline</p>
                                <p className="text"><span className="title">Eligibility:</span> Successful candidates from the academic interview</p>
                                <p className="text">Candidates are either marked 'Failed' or 'In Preparation'. Depending on which re-interview  is allowed in 7 to 15 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <button className="stage-1 btn btn-dark" type="button">Stage 4</button>
                        </div>
                        <div className="container-card">
                            <h5 className="heading">Offer Letter</h5>
                            <p className="stage-first-content">Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.</p>
                        </div>
                        <div className="container-description">
                            <div className="description-content">
                                <p className="text"><span className="title">Eligibility:</span> Candidates passing the culture-fit round.</p>
                                <p className="text"><span className="title">Confirmation:</span> Sent via email</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdmissionProcess;
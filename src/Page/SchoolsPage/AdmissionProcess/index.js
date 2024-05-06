import "./style.css"
function AdmissionProcess() {
    return (
        <>
            <div className="container addmision-process-container">
                <h5 className="Admission-Process">Admission Process</h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <button type="button" class="btn btn-dark">Stage 1</button>
                                </div>
                            </div>
                            <div className="list-group-item " style={{ background: "#FBDFD9", color: "black" }}>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="fw bold fs-30">Screening Test</h5>
                                </div>
                                <p className="mb-1">Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.</p>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <p className="mb-1"><span className="fw-bold">Format:</span> Online/Offline</p>
                                </div>
                                <p className="mb-1"><span className="fw-bold">Eligibility: </span>Student from any stream</p>
                                <p classNamess="fw-bold mb-1">Test Structure and Marks:</p>
                                <span className="mb-1">Maths: 20 marks</span><br></br>
                                <span className="mb-1">English: 10 marks</span><br></br>
                                <span className="mb-1">Total: 30 marks</span><br></br>
                            </a>
                        </div>
                    </div>
                    <div class=" col-sm-12 col-md-6 col-lg-3">
                        <div class="list-group card">
                            <div className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <button type="button" class="btn btn-dark">Stage 2</button>
                                </div>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action " style={{ background: "#FBDFD9", color: "black" }} aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Academic Interview</h5>
                                </div>
                                <p className="mb-1">Evaluates 8th standard-level Math and English, similar to the screening test</p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 class="fw-bold">Format: Online</h5>
                                </div>
                                <p className="mb-1"> <span className="fw-bold">Eligibility:  </span>Candidates qualifying the screening test.</p>
                            </a>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="list-group card">
                            <div className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <button type="button" class="btn btn-dark">Stage 3</button>
                                </div>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action " style={{ background: "#FBDFD9", color: "black" }} aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Culture Fit Round</h5>
                                </div>
                                <p className="mb-1">Assess cultural alignment, focusing on needs, emotional aspects, and commitment to community</p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1"><span className="fw-bold">Format: </span>Online/Offline</h5>
                                </div>
                                <p className="mb-1"> <span className="fw-bold">Eligibility:  </span>Successful candidates from the academic interview</p>
                                <p className="mb-1">Candidates are either marked 'Failed' or﻿ 'In Preparation'. Depending on which re-interview  is allowed in 7 to 15 days</p>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="list-group card">
                            <div className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <button type="button" class="btn btn-dark">Stage 4</button>
                                </div>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action" aria-current="true" style={{ background: "#FBDFD9", color: "black" }} >
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Offer Letter</h5>
                                </div>
                                <p className="mb-1">Confirms selection for residential course</p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <p className="mb-1"><span className="fw-bold">Eligibility: </span>Candidates passing the culture-fit round.</p>
                                </div>
                                <p className="mb-1"><span className="fw-bold">Confirmation:</span> Sent via email</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdmissionProcess
import React from "react";
import "./style.css";
function ScreeningTestPage({ programNeme }) {
    const handleButtonClick = () => {
        window.open("https://admissions.navgurukul.org/", "_blank");
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12 mt-4">
                    <div className="next-step mt-2 mt-sm-3 d-flex flex-column align-items-center">
                        {
                            programNeme === "SchoolOfDesign" ? (
                                <div className="container d-flex justify-content-center subtitle-container">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-12 custom-bg">
                                            <h6 className="Subtitle1">
                                                Please note: School of Design admissions are halted at the moment. We will update as soon as they open up again
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                            ) : (
                                <>
                                    <h4 className="text-center test-title">
                                        Want to Enroll and Start your Career?
                                    </h4>
                                    <div className=" d-flex flex-column justify-content-center align-items-center mt-4" >   
                                        <button
                                            type="button"
                                            className="btn regular-btn mt-1"
                                            style={{ height: "48px", width: "189px" }}
                                            onClick={handleButtonClick}
                                        >
                                            Take Screening Test

                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreeningTestPage;
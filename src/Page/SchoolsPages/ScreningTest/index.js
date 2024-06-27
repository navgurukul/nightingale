import React from "react";
import "./style.css";
function ScreeningTestPage({ programNeme }) {
    const handleButtonClick = () => {
        window.open("https://admissions.navgurukul.org/", "_blank");
    };

    return (
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12 mx-auto">
                    <div className="next-step mt-2 mt-sm-3 d-flex flex-column align-items-center ">
                        {
                            programNeme === "SchoolOfDesign" ? (

                                <div className="container Admision-container d-flex justify-content-center custom-bg w-50">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-12">
                                            <p className="pra-subtitle">
                                                Please note: School of Design admissions are halted at the moment. We will update<br></br> as soon as they open up again
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            ) : (
                                <>
                                    <h6 className="text-center test-title" style={{ marginBottom: "32px" }}>
                                        Want to Enroll and Start your Career?
                                    </h6>
                                    <div className="input d-flex flex-column justify-content-center align-items-center" style={{ width: "189px" }}>
                                        <button
                                            className="btn text-white align-self-center my-1 regular-btn user-btn"
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
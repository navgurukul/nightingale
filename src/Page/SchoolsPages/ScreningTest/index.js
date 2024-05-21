import React from "react";
import "./style.css";

function ScreeningTestPage() {
    const handleButtonClick = () => {
        window.open("https://admissions.navgurukul.org/", "_blank");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12" style={{ margin: "auto", marginBottom: "40px", marginTop: "40px" }}>
                        <div className="next-step mt-2 mt-sm-3 d-flex flex-column align-items-center">
                            <h5 className="text-center" style={{ marginBottom: "32px" }}>
                                Want to Enroll <span className="BackColor">Want to Enroll and </span> Start your Career?
                            </h5>
                            <div className="input d-flex flex-column justify-content-center align-items-center">
                                <button
                                    className="btn btn-primary text-white align-self-center my-1 regular-btn user-test-btn"
                                    onClick={handleButtonClick}
                                >
                                    Take Screening Test
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScreeningTestPage;

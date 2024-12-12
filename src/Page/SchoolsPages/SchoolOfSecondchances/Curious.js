
import email from "./assets/Vector.png"
import phone from "./assets/phone.png"

const Corious = () => {
    return (
        <>
            <div className="container-fluid curiousuppor mt-4">
                <div className="row">
                    <div className="col-12 col-lg-8 mb-4" style={{ margin: "auto", color: "#EB5F42" }}>
                        <h3 className="text-center mb-4">Curious, Want Support Or Have Questions/Suggestions?</h3>
                        <div className="container">
                            <div className="row container-area">
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center px-0 py-2">
                                    <div className="d-flex align-items-center text-center">
                                        <img
                                            src={email}
                                            alt="Phone"
                                            className="email-icon  mr-2"
                                            style={{ width: "20px", margin: "auto" }}
                                        />
                                        <a
                                            href="mailto:sosc@navgurukul.org"
                                            className="text-dark text-decoration-none"
                                        >
                                            sosc@navgurukul.org
                                        </a>
                                    </div>
                                </div>
                                {/* Phone Section */}
                                <div
                                    className="col-12 col-md-6 d-flex align-items-center justify-content-center px-0 py-2"
                                >
                                    <div className="d-flex align-items-center text-center">
                                        <img
                                            src={phone}
                                            alt="Phone"
                                            className="email-icon mr-2"
                                            style={{ width: "20px", margin: "auto" }}
                                        />
                                        <a
                                            href="tel:+919878657667"
                                            className="text-dark text-decoration-none"
                                        >
                                            +91 9878657667
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corious;
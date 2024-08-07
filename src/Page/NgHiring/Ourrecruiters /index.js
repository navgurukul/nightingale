import "./styles.css";
import logos from "../assets/logos.png";
const Ourrecruiters = () => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="row">
                            <h3 className="section-head body1 w-100 d-flex justify-content-center text-center p-3">Our recruiters</h3>
                            <img src={logos} alt="logos" className="logos-img" />
                        </div>
                        <div className="row section-para body1 w-100 p-3 mt-5 d-flex justify-content-center text-center">
                            Logos of all the companies from NG deck
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 d-none d-md-flex align-items-center justify-content-center">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="row">
                            <h3 className="section-head body1 w-100 d-flex  text-left p-3">Contact us</h3>
                        </div>
                        <div className="row section-para body1 w-100 p-3 d-flex text-left ">
                            <div>
                                <p className="mb-1">Gurgaon Address</p>
                                <p className="mb-1">Phone no.: XCXXXXXXX99</p>
                                <p className="mb-1">Let’s talk at <a href="mailto:tnp@navgurukul.org">tnp@navgurukul.org</a></p>
                            </div>
                        </div>
                        <div className='row p-1 justify-content-center'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn align-self-center  "
                                style={{ width: "360px" }}
                            >
                                Hire from Us
                            </button>
                        </div>
                        <div className='row p-1 justify-content-center'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn align-self-center"
                                style={{ width: "360px" }}
                            >
                                Become knowledge partner
                            </button>
                        </div>
                        <div className='row p-1 justify-content-center mb-6'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn align-self-center"
                                style={{ width: "360px" }}
                            >
                                Volunteer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Ourrecruiters;
import "./styles.css";
import logos from "../assets/logos.png";

const Ourrecruiters = ({ handleOpenForm }) => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="row text-center">
                            <h3 className="section-head body1 w-100 p-3">Our recruiters</h3>
                            <div className="w-100 d-flex justify-content-center">
                                <img src={logos} alt="logos" className="logos-img" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-2 col-md-2 d-none d-md-flex align-items-center justify-content-center">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="row">
                            <h3 className="section-head body1 w-100 d-flex  text-left p-3 justify-content-center">Contact us</h3>
                        </div>
                        <div className="row section-para body1 w-100 p-3 d-flex text-left  justify-content-center ">
                            <div>
                                <p>Phone no.: 9987609708</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container mb-4 mt-4'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn align-self-center px-4"
                                style={{ width: "100%" }}
                                onClick={() => handleOpenForm('Hire from Us')}
                            >
                                Hire from Us
                            </button>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn align-self-center px-4"
                                style={{ width: "100%" }}
                                onClick={() => handleOpenForm('Become knowledge partner')}
                            >
                                Become knowledge partner
                            </button>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn align-self-center px-4"
                                style={{ width: "100%" }}
                                onClick={() => handleOpenForm('Volunteer')}
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
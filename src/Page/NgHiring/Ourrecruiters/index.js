import "./styles.css";
import wipro from '../assets/wipro.png';
import tata from '../assets/Tata.png';
import microsoft from '../assets/microsoft.png';
import amazon from '../assets/amazon.png';
import infosys from '../assets/infosys.png';
import ebene from '../assets/Ebene.png';
const Ourrecruiters = ({ handleOpenForm }) => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container">
                <div className="row"
                // style={{ border: "2px solid black" }}
                >
                    <h5 className="section-head media-font body1 w-100 mb-3 mt-3">Our recruiters</h5>
                    <div className="col-12 d-flex justify-content-center flex-wrap">
                        {/* Displaying only 5 logos */}
                        <div className="logo-item mx-2">
                            <img src={wipro} alt="Wipro Logo" className="logo-img1" />
                        </div>
                        <div className="logo-item mx-2">
                            <img src={tata} alt="Tata Logo" className="logo-img1" />
                        </div>
                        <div className="logo-item logosize mx-2">
                            <img src={microsoft} alt="Microsoft Logo" className="logo-img1" />
                        </div>
                        <div className="logo-item mx-2">
                            <img src={amazon} alt="Amazon Logo" className="logo-img1" />
                        </div>
                        <div className="logo-item mx-2">
                            <img src={infosys} alt="Infosys Logo" className="logo-img1" />
                        </div>
                        <div className="logo-item mx-2">
                            <img src={ebene} alt="Ebene Logo" className="logo-img1" />
                        </div>

                    </div>
                </div>
            </div>

            <div className='container mb-4 mt-5'>
                <div className='row justify-content-center align-items-center'
                // style={{ border: "2px solid black" }}
                >
                    <h5 className="section-head media-font w-100 mb-4 mt-3 py-3 ">Join Our Movement</h5>

                    <div className='col-lg-8 col-md-10 col-sm-12 d-flex justify-content-center'>
                        <div className='d-flex flex-column flex-lg-row align-items-center w-100 mx-4'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn px-4 mb-2 mb-lg-0 mx-2 mx-md-3"
                                onClick={() => handleOpenForm('Hire from Us')}
                            >
                                Hire from Us
                            </button>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn px-4 mb-2 mb-lg-0 mx-2 mx-md-3"
                                onClick={() => handleOpenForm('Become knowledge partner')}
                            >
                                Become Knowledge Partner
                            </button>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn px-4 mx-2 mx-md-3"
                                onClick={() => handleOpenForm('Volunteer')}
                            >
                                Volunteer with Us
                            </button>
                        </div>
                    </div>
                </div>
                <p className=" body1 w-100 text-center mb-5 mt-4 p-2"> For any queries, please contact us at
                    <span className='link'>+91 9987609708</span>
                </p>
            </div>
        </section>
    );
};

export default Ourrecruiters;
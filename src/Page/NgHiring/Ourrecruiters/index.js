
import "./styles.css";
import wipro from '../assets/wipro.png'
import tata from '../assets/Tata.png'
import microsoft from '../assets/microsoft.png'
import amazon from '../assets/amazon.png'
import infosys from '../assets/infosys.png'
import north from '../assets/north.png'

const Ourrecruiters = ({ handleOpenForm }) => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container">
                <div className="row" >
                    <h3 className="section-head body1 w-100 p-3 mb-4">Our recruiters</h3>

                    <div className="logo-scroller">
                        <div className="logo-track">
                            <div className="logo-item">
                                <img src={wipro} alt="Wipro Logo" className="wipro-img logo-img" />
                            </div>
                            <div className="logo-item">
                                <img src={tata} alt="Tata Logo" className="tata-img logo-img" />
                            </div>
                            <div className="logo-item">
                                <img src={microsoft} alt="Microsoft Logo" className="microsoft-img" />
                            </div>
                            <div className="logo-item">
                                <img src={amazon} alt="Amazon Logo" className="amazon-img" />
                            </div>
                            <div className="logo-item">
                                <img src={infosys} alt="Infosys Logo" className="infosys-img" />
                            </div>
                            <div className="logo-item">
                                <img src={north} alt="North Logo" className="north-img" />
                            </div>
                            <div className="logo-item">
                                <img src={wipro} alt="Wipro Logo" className="wipro-img logo-img" />
                            </div>
                            <div className="logo-item">
                                <img src={tata} alt="Tata Logo" className="tata-img logo-img" />
                            </div>
                            <div className="logo-item">
                                <img src={microsoft} alt="Microsoft Logo" className="microsoft-img" />
                            </div>
                            <div className="logo-item">
                                <img src={amazon} alt="Amazon Logo" className="amazon-img" />
                            </div>
                            <div className="logo-item">
                                <img src={infosys} alt="Infosys Logo" className="infosys-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-4 mt-3'>
                <div className='row justify-content-center align-items-center'>
                    <h3 className="section-head body1 w-100 p-3 mb-4 text-center">Join Our Movement</h3>

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
                                onClick={() => handleOpenForm('Become Knowledge Partner')}
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
            </div>
            <p className="section-para body1 w-100 p-1 text-center mb-5"> For any queries, please contact us at
                <span className='link'>+91 9987609708</span>
            </p>
        </section>
    );
};
export default Ourrecruiters;

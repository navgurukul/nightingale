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

                    <h3 className="section-head body1 w-100 p-3 mb-3">Our recruiters</h3>

                    <div className='col-lg-2 col-md-2 col-sm-6 mb-3' >
                        <img src={wipro} alt="logos" className="logos-img" />
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 mb-3' >
                        <img src={tata} alt="logos" className="logos-img" />

                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 mb-3' >
                        <img src={microsoft} alt="logos" className="logos-img" />

                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 mb-3' >
                        <img src={amazon} alt="logos" className="logos-img" />

                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 mb-3'>
                        <img src={infosys} alt="logos" className="logos-img" />

                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 mb-3' >
                        <img src={north} alt="logos" className="logos-img" />

                    </div>

                    <h3 className="section-head body1 w-100 p-3">Join Our Movement</h3>


                    <div className='container mb-4 mt-3'>
                        <div className='row' >
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
                                    Volunteer with Us
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

                {/* <div className='container mb-4 mt-4'>
                    <div className='row' style={{border:"2px solid black"}}>
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
                </div> */}


            </div>
        </section>

    );
};
export default Ourrecruiters;
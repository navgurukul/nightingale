import React from 'react';
import hire from './assets/hire.png';

const HireFromUs = ({ handleOpenForm }) => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives px-md-0">
            <div className="container">

                <div className="row mt-3">
                    <div className="col-lg-6 col-md-12 d-flex">
                        <img
                            src={hire}
                            alt="Hire From Us"
                            style={{ maxWidth: '100%', height: 'auto' }}

                        />
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column">
                        <h5 className="heddinghireformus media-font">Hire from Us</h5>

                        <p className="section-para body1 w-100">
                            We bridge the learning gap of marginalized communities students. Enrich your workforce diversity and drive meaningful social impact, meeting your Diversity, Equity, and Inclusion (DEI) goals                        </p>
                        <p className="section-para body1 w-100">By hiring from us, you are achieving:</p>
                        <div className="section-para body1 w-100">
                            <ul className="px-4">
                                <li>
                                    <span className="">Handpicked Tech Talent</span>
                                </li>
                                <li>
                                    <span className="">Zero Hiring Fees</span>
                                </li>
                                <li>
                                    <span className="">High Retention Candidates</span>
                                </li>
                                <li>
                                    <span className="">Diverse Talent Pool</span>
                                </li>
                                <li>
                                    <span className="">Job-Ready Talent</span>
                                </li>
                                <li>
                                    <span className="">Positive Social Impact</span>
                                </li>
                            </ul>
                        </div>

                        <div className='d-flex flex-column mb-2 ml-3'>
                            <button
                                type="button"
                                className="btn fw-bold regular-btn mb-2"
                                style={{ width: "280px" }}
                                onClick={() => handleOpenForm("Hire from Us")}>
                                Hire from Us
                            </button>

                            <button
                                type="button"
                                className="btn fw-bold regular-btn1"
                                style={{
                                    width: "280px",
                                    backgroundColor: "transparent",
                                    border: "2px solid red",
                                    color: "red",
                                }}
                                onClick={() => handleOpenForm('Download Placement Brief')}>
                                Download Placement Brief
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HireFromUs;

import React from 'react';
import hire from './assets/hire.png';

const HireFromUs = ({ handleOpenForm }) => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container" >
                <h3 className="media-font px-3 mt-3 text-center">Hire from Us</h3>
                <img className="banner-img mt-4 mb-4 sm-px-3" src={hire} alt="Hire From Us" />
                <div>
                    <p className="section-para body1 w-100">
                        Through harnessing the power of education, we bridge the learning gap of students from marginalized communities to emerge as skilled, resilient, and job-ready professionals, proficient in the latest technologies and soft skills. By partnering with us, your organization can enrich its workforce diversity and drive meaningful social impact, effortlessly meeting your Diversity, Equity, and Inclusion (DEI) goals.
                    </p>
                    <p className="section-para body1 w-100">By hiring from us, you are achieving:</p>
                    <div className="section-para body1 w-100">
                        <ul className="px-3">
                            <li>
                                <span className="link">Handpicked Tech Talent:</span> Pre-screened candidates to save you time.
                            </li>
                            <li>
                                <span className="link">Zero Hiring Fees:</span> Fully funded by our generous donors.
                            </li>
                            <li>
                                <span className="link">High Retention Candidates:</span> Quality talent within the budget.
                            </li>
                            <li>
                                <span className="link">Diverse Talent Pool:</span> Our students are from different regions of India, ready to enhance your workforce diversity and business capabilities.
                            </li>
                            <li>
                                <span className="link">Job-Ready Talent:</span> Our students undergo rigorous training in both technical and soft skills, preparing them for the complexities of modern work environments.
                            </li>
                            <li>
                                <span className="link">Positive Social Impact:</span> Fulfill your corporate social responsibility goals by hiring candidates who are part of a movement to bridge India's education and employment gap.
                            </li>
                        </ul>
                    </div>


                    <div className='row mb-2'>
                        <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end justify-content-center align-items-center my-md-2 my-sm-2 my-xs-2"
                            // style={{ border: "2px solid black" }}
                        >
                            <button
                                type="button"
                                className="btn fw-bold regular-btn mr-0"
                                style={{ width: "360px" }}
                                onClick={() => handleOpenForm("Hire from Us")}>
                                Hire from Us
                            </button>
                        </div>

                        <div className='col-lg-6 col-md-12 d-flex justify-content-lg-start justify-content-center align-items-center my-md-2 my-sm-2 my-xs-2'
                            // style={{ border: "2px solid black" }}
                        >
                            <button
                                type="button"
                                className="btn fw-bold regular-btn1"
                                style={{
                                    width: "360px",
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


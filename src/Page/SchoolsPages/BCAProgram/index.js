import React from 'react'
import BackgroundImg from "./assets/hero section.png"
import "./style.css";

function BCAProgram() {

  return (
    <>
        <img src={BackgroundImg} style={{width:"100%", height:"100%"}} alt=''/>
        <div className="d-flex flex-column justify-content-center w-100 ">
            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">About the Program</h3>
                <div className="body1 col-12 p-0 col-md-8 d-flex align-items-center justify-content-center mb-2 mt-3">
                    NavGurukul, in collaboration with Eternal University and Sri Badrika Ashram,
                    offers a fully funded BCA Program for young women from Punjab,
                    Himachal Pradesh, and neighboring regions.
                </div>
            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Program Benefits</h3>
                <div className=" col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
                    <p className="body1 w-100" >
                        The selected candidates will receive the following benefits:-
                        <ul className="ml-4 mt-4 mb-4" >
                            <li><span className="fw-bold">Full Scholarship : </span>Covering tuition, accommodation, meals, internet, and a laptop for the entire duration of the degree course.</li>
                            <li><span className="fw-bold"> Degree :</span> Awarded by Eternal University</li>
                            <li><span className="fw-bold">Support : </span> Financial support from Sri Badrika Ashram</li>
                            <li><span className="fw-bold">Unique Learning Curriculum : </span> NavGurukul's modern curriculum is designed by alumni of IIT, Harvard, and NIT focusing on 21st-century skills such as coding, leadership, critical thinking, effective communication, and problem-solving</li>
                            <li><span className="fw-bold"> Placement support : </span> 100% Placement assistance post-course completion</li>
                        </ul>
                        This program is aimed at empowering young women, equipping 
                        them with the skills and knowledge to become future tech leaders.
                        Applicants will incur a one-time cost of ₹23,500, which covers uniform, 
                        registration, and exam fees.
                    </p>
                </div>
            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Eligibility Criteria</h3>
                <div className="partner-content-data col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
                    <p className="body1 w-100" >
                        The eligibility criteria for the program are as follows:-
                        <ul className="ml-4 mt-4">
                            <li>
                                Open for female applicants who are Indian nationals
                            </li>
                            <li>
                                Applicants must have domiciled in Punjab, Himachal Pradesh, or neighboring areas
                            </li>
                            <li>
                                Applicants must be between 16 and 28 years old
                            </li>
                            <li>Applicants must have passed or be currently enrolled in Class 12 (in any stream) from a recognized institution/school</li>
                            <li>The annual family income must not be more than ₹6,00,000.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="container d-flex flex-column align-items-center justify-content-center w-100">
                <div className="custom-box w-100 col-12 col-md-8 d-flex flex-column align-items-center">
                    <h4 className="mb-3">Last Date of Application: 30th June 2024</h4>
                    <button
                        type="button"
                        className="btn  regular-btn mb-3 custom-button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(
                                "https://forms.gle/pKzCnkzF6RebsXzn6",
                                "_blank"
                            );
                        }}
                    >
                        Register Now
                    </button>
                    <p className="body2 mb-0">Hurry up the seats are filling fast</p>
                </div>
            </div>


            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Contact Us</h3>
                <div className="body1 col-12 p-0 col-md-8 section-para  mb-2 mt-3">
                    In case of any queries, please reach out to:<br /><br />
                    <span className='fw-bold'>Phone:</span> (+91) 7081255272 (Monday to Friday - 10:00 AM to 06:00 PM (IST)<br />
                    <span className='fw-bold'>Email:</span> <a href='mailto:nikesh@navgurukul.org' style={{ color: '#EB5F42' }} className='fw-bold'>nikesh@navgurukul.org</a> <br />

                </div>
            </div>

             <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Collaboration Partners</h3>
                <div className="body1 col-12 p-0 col-md-8 section-para align-items-center justify-content-center mb-2 mt-3">
                    <span className='fw-bold'> Eternal University<br /></span>
                    Established in 2008, Eternal University is the first female-only university in North India. It offers value-based education (combining science and spirituality) with programs in fields like engineering, management, and public health
                </div>
                 <div className="body1 col-12 p-0 col-md-8 section-para  align-items-center justify-content-center mb-2 mt-4">
                   
                    <span className='fw-bold'> Sri Badrika Ashram<br /></span>
                    Founded by Om Swami in Himachal Pradesh, Sri Badrika Ashram focuses on reviving ancient meditation and chanting practices. This non-profit ashram serves the community and offers programs like spiritual retreats and scholarships for local students
                </div>
            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">FAQs</h3>
                <div className="body1 col-12 p-0 col-md-8 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
                    <ol>
                       
                        <li>What is the selection criteria for this fully-funded BCA program?</li>
                        Selection of candidates will be based on two factors: meeting the eligibility criteria outlined above, and their performance during the screening test and interview rounds.
                        <li className='mt-4'>
                          What is the syllabus for screening test?
                        </li>
                        Interested applicants can click the links below to download the syllabus for the online entrance exam for this course in their preferred language.
                        <a href="https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2024/05/22085918/Hindi-Syallbus-Sample-Paper-Resources-NG-1-2.pdf" className="custom-underline"> In Hindi</a> | <a href="https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2024/05/22085942/English-Syllabus-Sample-Paper-Resources-NG1-1.pdf" className="custom-underline"> In English</a>.
                        <li className='mt-4'>What will be asked in interview rounds? </li>
                        The interview process consists of two rounds. In the first round, we assess academic alignment for the course by asking questions similar to those on the screening test. The second round is a conversation to gauge the candidate's passion, motivation, and suitability for a fully funded residential course.

                    </ol>
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default BCAProgram;
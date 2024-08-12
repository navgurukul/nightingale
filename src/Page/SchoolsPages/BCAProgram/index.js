import React from 'react'
import BackgroundImg from "./assets/hero section.png"
import "./style.css";

function BCAProgram() {

  return (
    <>
        <img src={BackgroundImg} style={{width:"100%", height:"100%"}} alt=''/>
        <div className="d-flex flex-column justify-content-center w-100 mb-4">
            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">About the Program</h3>
                <div className='row'>
                <div className="body1 col-12 p-0 col-md-6 section-para d-flex align-items-center justify-content-center mt-4">
                <img src={require("./assets/campus photo.jpg").default} style={{width:"100%", height:"100%"}}alt="student"/>
                </div>

                <div className="body1 col-12 col-md-6 mt-4 pl-4 ">
                    
                NavGurukul in collaboration with Eternal University and Sri Badrika Ashram, offers a fully funded BCA
                 Program for young women from Punjab, Himachal Pradesh, and neighboring regions.
                </div>
                </div>
            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100 mt-4">
                <h3 className="mt-2 section-head mb-3">Program Benefits</h3>
                <div className=" col-12 p-0 col-md-12 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
                    <p className="body1 w-100" >
                        The selected candidates will receive the following benefits:-
                        <ul className="ml-4 mt-4 mb-4" >
                            <li><span className="fw-bold">Full Scholarship : </span>Covering tuition, accommodation, meals, internet, and a laptop for the entire duration of the degree course.</li>
                            <li><span className="fw-bold"> Degree :</span> Awarded by Eternal University</li>
                            <li><span className="fw-bold">Support : </span> Financial support from Sri Badrika Ashram</li>
                            <li><span className="fw-bold">Unique Learning Curriculum : </span> avGurukul's modern curriculum is designed by 
                            alumni of IIT, Harvard, and NIT focusing on meeting the needs of the industry and imparts 21st-century skills 
                            such leadership, critical thinking, effective communication, and problem-solving
                            </li>
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
                <div className="partner-content-data col-12 p-0 col-md-12 section-para d-flex align-items-center justify-content-center mb-2 mt-3">
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
                <div className="custom-box w-100 col-12 col-md-12 d-flex flex-column align-items-center">
                    <h4 className="mb-3">Last Date of Application: 18th August 2024</h4>
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
                <div className="body1 col-12 p-0 col-md-12 section-para  mb-2 mt-3">
                    In case of any queries, please reach out to:<br /><br />
                    <span className='fw-bold'>Phone:</span> (+91) 7081255272 (Monday to Friday - 10:00 AM to 06:00 PM (IST)<br />
                    <span className='fw-bold'>Email:</span> <a href='mailto:nikesh@navgurukul.org' style={{ color: '#EB5F42' }} className='fw-bold'>nikesh@navgurukul.org</a> <br />

                </div>
            </div>

             <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Collaboration Partners</h3>
                <div className="body1 col-12 p-0 col-md-12 section-para align-items-center justify-content-center mb-2 mt-3">
                    <span className='fw-bold'> Eternal University<br /></span>
                    Established in 2008, Eternal University is the first female-only university in North India. It offers value-based education (combining science and spirituality) with programs in fields like engineering, management, and public health
                </div>
                 <div className="body1 col-12 p-0 col-md-12 section-para  align-items-center justify-content-center mb-2 mt-4">
                   
                    <span className='fw-bold'> Sri Badrika Ashram<br /></span>
                    Founded by Om Swami in Himachal Pradesh, Sri Badrika Ashram focuses on reviving ancient meditation and chanting practices. This non-profit ashram serves the community and offers programs like spiritual retreats and scholarships for local students
                </div>
            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Introduction to our course </h3>
                <div className="body1 col-12 p-0 col-md-12 section-para align-items-center justify-content-center mb-2 mt-3">
                The Bachelor of Computer Applications (BCA) program is designed to develop skilled software professionals with a strong 
                practical foundation. It offers a unique and innovative learning experience that effectively supports every student’s success, 
                regardless of their starting point, provided they are committed to working hard.
                </div>
            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">Learning to Learn </h3>
                <div className='row '>
                    <div className='body1 col-12 p-2 col-md-6 section-para d-flex align-items-center justify-content-center mt-4'>
                        <img src={require("./assets/stu_1.jpg").default} style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className='body1 col-12 p-2 col-md-6 section-para d-flex align-items-center justify-content-center mt-4'>
                        <img src={require("./assets/stu-3.jpg").default} style={{width:"100%",height:"100%"}}/>
                    </div>
                </div>
                <div className="body1 col-12 p-0 col-md-12 section-para align-items-center justify-content-center mb-2 mt-3">
                    <p>
                    The world is changing faster than ever before, particularly in technology, which evolves at a rapid pace. In this program, the approach to learning is completely reimagined to ensure students are prepared to succeed in this ever-changing world. The program is designed to develop graduates into leaders who are equipped to handle future challenges through unique campus learning experiences.


                    </p>
                    <p>
                    From day one, students engage in hands-on learning rather than passively listening to lectures. 
                    They begin developing applications and websites within the first month of the program, instead of receiving theoretical instruction.
                    Facilitators, rather than teachers, guide students, fostering self-directed learning that is crucial for industry success.
                    The program emphasizes applying concepts in real projects, developing problem-solving skills, and adapting to industry practices. F
                    acilitators provide the necessary support to ensure that students learn with understanding and can apply their knowledge in real-world contexts.
                    </p>
                    <p>
                    Additionally, the program places significant emphasis on developing students' soft skills. This is achieved through student-led 
                    campus activities, decision-making, and peer collaboration. These experiences cultivate leadership, teamwork, and collaboration 
                    skills that are essential not only for surviving but also for thriving in the 21st-century world.


                    </p>
                    <p>
                    This program is ideal for those who:
                    <ul className='ml-4 mt-4'>
                       
                       <li>Are drawn to a college experience that is different, innovative, challenging, and effective.
                       </li>
                       <li>Find excitement in the prospect of working hard (at least 10-12 hours a day) to learn and grow while enjoying time with 
                        friends and mentors.
                       </li>
                       <li>Appreciate an environment where independence is encouraged, allowing students to learn on their own without being spoon-fed.</li>
                       <li>Desire to be pushed out of comfort zones and to face challenges that lead to reaching one’s highest potential.
                       </li>
                       <li>Value living in a community of peers, with a passion for ensuring the happiness and success of everyone around.</li>
                       <li>Seek an experience that fosters not only success but also a greater sense of happiness.
                       </li>

                   </ul>

                    </p>
                
                </div>
            </div>
            <div className="container  w-100">
            <h3 className="mt-2 section-head mb-3">Hear from a NavGurukul Alumna in how learning at NavGurukul helped in her journey: </h3>
            <div className="custom-video-container">
           
            <iframe 
            className="bg-video mt-2"
           
            src="https://www.youtube.com/embed/p2SIfigBJfE?si=DSV9TjZ2Yh7wM-3H" 
            title="YouTube video player" frameborder="90px" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
        <div className="container  w-100">
            <h3 className='mt-6 section-head mb-4'>
            Culture at campus
            </h3>

           
            <div className="body1 col-12 p-0 col-md-12 section-para  align-items-center justify-content-center mb-2 mt-3 ">
                <div className='row'>
                    <div className='body1 col-12 p-0 col-md-6 '>
                        <img src={require("./assets/cultur.png").default} style={{height:"100%", width:"100%"}}/>
                    </div>
                    <div className='body1 col-12 p-0 col-md-6 pl-4'>
                    <p>
                Our campus culture is centered on fostering student ownership and agency, equipping students to face real-world challenges with confidence. 
            The program does not follow a traditional classroom-led schedule like in most colleges. Instead, students will be guided on what to study 
            and how to approach it. A typical day on campus will look like this:
                </p>
                <p>
                <ul className='ml-4 mt-4'>
                    <li>
                    Students create their own goals for how much they want to achieve in a day, ensuring they learn the crucial skill of time management 
                    and take ownership of their learning, rather than someone constantly pushing them to study (as expected in the industry).

                    </li>
                    <li>Students actively engage in peer learning, collaborating with each other to share knowledge and helping others learn, which, in turn, 
                        deepens their own understanding.</li>
                    <li>
                    They will have personalized doubt-solving sessions as needed, drawing on the support of peers, mentors, and facilitators, 
                    ensuring a truly personalized learning experience.
                    </li>
                </ul>
                    
                </p>

                    </div>
                </div>
                <h5 className='mt-4'>All of this is done to ensure:</h5>
                <p className="body1 w-100" >
                
                        <ul className="ml-4 mt-4 mb-4" >
                            <li><span className="fw-bold">Practical Skill Development: </span>
                          
                            <ul className="ml-4 mt-4 mb-4">
                                    <li>In just a few months, students learn to build functional websites, gaining hands-on experience in web development and troubleshooting.</li>
                                    <li>They also explore computer hardware, learning to assemble and diagnose technical issues, bridging theory with practical application.</li>
                            </ul>

                            </li>
                            <li><span className="fw-bold">Leadership:: </span>
                            <ul className="ml-4 mt-4 mb-4">
                                    <li>Leadership is fostered as students manage campus learning and operations by being a part of the student council, organizing events,
                                         and managing projects, honing their planning and execution abilities.</li>
                                    <li>Students develop interpersonal communication and conflict resolution skills, essential for personal and professional growth.</li>
                            </ul>

                            </li >
                            <li><span className="fw-bold">Community Involvement: </span>
                            <ul className="ml-4 mt-4 mb-4">
                                <li>
                                Volunteering in community service projects, such as teaching coding or promoting digital literacy, instills social responsibility and empathy, 
                                contributing to overall well-being.
                                </li>
                            </ul>

                            

                            </li>
                        </ul>
                        These experiences shape students into well-rounded individuals, ready to meet real-world demands with agency,
                         ownership, and a commitment to social responsibility. They graduate not only as skilled professionals but 
                         also as adaptable leaders prepared to make a difference.

                    </p>
            </div>
            </div>

            </div>

            <div className="container align-items-center d-flex flex-column  justify-content-center w-100">
                <h3 className="mt-2 section-head mb-3">FAQs</h3>
                <div className="body1 col-12 p-0 col-md-12 section-para d-flex align-items-center justify-content-center mb-2 mt-3 ml-4">
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
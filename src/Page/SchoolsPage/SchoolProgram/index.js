import "../style.css";
import CampusLocation from "./CampusLocation";
import JobAssistance from "../JobAssistance";
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreeningTest";
function SchoolProgramming() {
    const name="khushboo"
    return (
        <>
            <img
                src={require("./assets/bgimg.png").default}
                className="bg-img-container"
                alt="Background Image"
            ></img>

            <div class="centered">
                <div className="text-block">
                    <h3 className="software-engineering-course-title">School of Programming</h3>
                    <p class="software-engineering-course">
                        Fully-funded course in software engineering with regular<br></br>
                        <span>mentor support</span>
                    </p>
                </div>
            </div>

            <div className="container">
                <div class="row align-items-center">
                    <div class="col-10 col-sm-12 col-md-12 col-lg-10 mx-auto">
                        <div class="">
                            <div class="card-body d-flex flex-column align-items-center" >
                                <h5 class="text-title title-text" >Who This Programme Is For</h5>
                                <ul className="eligibility-list list-group " >
                                    <li>Youth above 16 years of age from underprivileged or low-income communities who can’t afford expensive college education</li>
                                    <li>No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs</li>
                                    <li>Anyone from low-income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas</li>
                                    <li>When the card is hovered over, rotate the front-side to -180 degrees and the back-side to 0 degrees.</li>
                                    <li>Some level of English is good to have</li>
                                </ul>
                            </div>
                            <div class="card-body d-flex flex-column align-items-center" >
                                <h5 class="text-title title-text">What You Will Learn</h5>
                                <ol className="eligibility-list list-group ">
                                    <p>Our student-led, self-paced 18-months programming course includes:</p>
                                    <li> <span className="fw-bold">Front-end development:</span> Web and Mobile development in Javascript, React.js, and Android</li>
                                    <li> <spna className="fw-bold">Back-end development:</spna> Python, Node.js, Javascript</li>
                                    <li> <span className="fw-bold">Soft skills:</span> English speaking, teamwork, emotional intelligence, and leadership skills</li>
                                    <li>When the card is hovered over, rotate the front-side to -180 degrees and the back-side to 0 degrees.</li>
                                </ol>
                                <span>
                                    <spna className="fw-bold">Co-curricular Activities: </spna>Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CampusLocation/>
            <JobAssistance></JobAssistance>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>
        </>
    )
}
export default SchoolProgramming;
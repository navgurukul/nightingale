import "../style.css";

import JobAssistance from "../JobAssistance";
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreeningTest";
import ProgrammeLocations from "../ProgrammeLocations";
function SchoolofFinance() {
    return (
        <>
            <img
                src={require("./assets/bgimg.png").default}
                className="bg-img-container"
                alt="Background Image"
            ></img>

            <div class="centered">
                <div className="text-block">
                    <h3 className="software-engineering-course-title" style={{color:"black"}}>School Of Finance</h3>
                    <p class="software-engineering-course" style={{color:"black"}}>
                    Fully funded course in Finance with regular mentor support<br></br>
                        <span style={{color:"black"}}>support</span>
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
                                    <p>Our student-led, self-paced finance course includes:</p>
                                    <li> <span className="fw-bold">Financial Accounting:</span>Learning accounting, cost accounting, management accounting</li>
                                    <li> <spna className="fw-bold">Learning Taxation:</spna> Learning Direct Tax, computation of income of individual, firm & company</li>
                                    <li> <span className="fw-bold">Learning Tally: </span>User interface and company management, ledgers, payment voucher & financial reports</li>
                                </ol>
                                <span>
                                    <spna className="fw-bold">Co-curricular Activities: </spna>Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < ProgrammeLocations/>
            <JobAssistance></JobAssistance>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>
        </>
    )
}
export default SchoolofFinance;
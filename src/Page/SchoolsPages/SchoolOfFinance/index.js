import React from 'react';
import AdmissionProcess from "../AdmissionProcess";
import JobAssistance from "../JobAssistance";
import ScreeningTestPage from '../ScreningTest';
import CoursesLocation from "../CourseLocations"
import "./style.css";

function SchoolOfFinance() {
    return (
        <>
            <div className="SchoolOfFinanceBgImg col-sm-12 col-lg-12 col-md-12" style={{ gap: "40px" }}>
                <div className='container-fluid ' style={{ marginTop: "180px" }}>
                    <div className='row'>
                        <div className='col-sm-6 col-md-10 col-lg-10 col-xs-6' style={{ margin: "auto" }}>
                            <h5 className='programmingSchooltitle'>School Of Finance</h5>
                            <p className='Programingcontent'>Fully funded course in Finance with regular <br></br> mentor support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-section">
                <div className="row first-row">
                    <div className="col-lg-8 col-section">
                        <h5 className="programme-audience-list text-center">Who This Programme Is For</h5>
                        <ul>
                            <li className='list-item'>Youth above 16 years of age from underprivileged or low-income communities who can’t afford expensive college education</li>
                            <li className='list-item'>No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs</li>
                            <li className='list-item'>Anyone from low-income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas</li>
                            <li className='list-item'>When the card is hovered over, rotate the front-side to -180 degrees and the back-side to 0 degrees.</li>
                            <li className='list-item'>Some level of English is good to have</li>
                        </ul>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-sm-12 col-lg-8  col-section-2">
                        <h5 className="programme-audience-list text-center">Who This Programme Is For</h5>
                        <div className="">
                            <p className='programme-details-item'>Our student-led, self-paced finance course includes:</p>
                        </div>
                        <div className="p-3 list-group">
                            <ol className="programme-details-list">
                                <li className='programme-details-item'><span className='programme-details-subitem'>Financial Accounting: : </span> Learning accounting, cost accounting, management accounting</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Learning Taxation : </span>  Learning Direct Tax, computation of income of individual, firm & company</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'> Learning Tally : </span>  User interface and company management, ledgers, payment voucher & financial reports</li>
                            </ol>
                        </div>
                        <div className="">
                            <p className="programme-details-item"><span className='programme-details-subitem'>Co-curricular Activities :  </span> Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health &
                                hygiene, cooking, sports, recreational & field visits</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='CampusLocation'>
                <CoursesLocation />
            </div>
            <div className="jobAssistance">
                <JobAssistance></JobAssistance>
            </div>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>
        </>
    )
}
export default SchoolOfFinance;
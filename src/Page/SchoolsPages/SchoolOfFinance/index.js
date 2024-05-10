import "./style.css";
import ProgrammeLocation from "../ProgrammeLocations";
import JobAssistance from "../JobAssistance";
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreningTest";
function SchoolOfFinance() {
    return (
        <>
            <div className="SchoolOfFinanceBgImg col-sm-12 col-lg-12 col-md-12">
                <div className='container-fluid' style={{ marginTop: "180px" }}>
                    <div className='row'>
                        <div className='col-sm-6 col-md-10 col-lg-10 col-xs-6' style={{ margin: "auto" }}>
                            <h5 className='programmingSchoolTitle'>School Of Finance</h5>
                            <p className='ProgramingContent'>Fully funded course in Finance with regular<br></br> mentor support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row gy-50">
                    <div className="col-sm-12 col-md-12 col-lg-8 web-body-1">
                        <div className="p-3 list-group">
                            <h5 className="programme-audience-list text-center">Who This Programme Is For</h5>
                            <ul className="">
                                <li className='list'>Youth above 16 years of age from underprivileged or low-income communities who can’t afford expensive college education</li>
                                <li className='list'>No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs</li>
                                <li className='list'>Anyone from low-income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas</li>
                                <li className='list'>When the card is hovered over, rotate the front-side to -180 degrees and the back-side to 0 degrees.</li>
                                <li className='list'>Some level of English is good to have</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 web-body-1">
                        <div className="p-3 list-group">
                            <h5 className="programme-audience-list text-center">Who This Programme Is For</h5>
                            <p className="list-detail"> Our student-led, self-paced finance course includes:</p>
                            <ol className="list-group-inform">
                                <li className='list-detail'><span className="list-subtitle">Financial Accounting:</span> Learning accounting, cost accounting, management accounting</li>
                                <li className='list-detail'><span className="list-subtitle">Learning Taxation: </span>Learning Direct Tax, computation of income of individual, firm & company</li>
                                <li className='list-detail'><span className="list-subtitle">Learning Tally:</span> User interface and company management, ledgers, payment voucher & financial reports</li>
                            </ol>
                            <p className="Activities-detail"><spna className="list-subtitle">Co-curricular Activities:</spna> Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProgrammeLocation />
            <div className="jobAssistance"> <JobAssistance /></div>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>
        </>
    )
}
export default SchoolOfFinance;
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreningTest";
import JobAssistance from "../JobAssistance";
import ProgrammeLocation from "../ProgrammeLocations";
// import ProgrammeLocation from "../ProgrammeLocations";
import "./style.css"
function SchoolOfBusiness() {
    return (
        <>
            <div className="bg col-sm-12 col-lg-12 col-md-12">
                <div className='container-fluid' style={{ marginTop: "180px" }}>
                    <div className='row'>
                        <div className='col-sm-6 col-md-10 col-lg-10 col-xs-6' style={{ margin: "auto" }}>
                            <h5 className='programmingSchooltitle'>School Of Business</h5>
                            <p className='Programingcontent'>Fully funded course in Business CRM with regular<br></br> mentor support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row gy-50">
                    <div className="col-sm-12 col-md-12 col-lg-8 web-body-1">
                        <div className="p-3 list-group">
                            <h5 className="programme-audience-list text-center">Who This Programme Is For</h5>
                            <ul>
                                <li className='list'>Youth above 16 years of age from underprivileged or low-income communities who can’t afford expensive college education</li>
                                <li className='list'>No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs</li>
                                <li className='list'>Anyone from low-income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas</li>
                                <li className='list'>When the card is hovered over, rotate the front-side to -180 degrees and the back-side to 0 degrees.</li>
                                <li className='list'>Some level of English is good to have</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row gy-50">
                    <div className="col-sm-12 col-md-12 col-lg-9 web-body-1">
                        <div className="p-3 list-group">
                            <h5 className="programme-audience-list text-center">Who This Programme Is For</h5>
                            <ol className="programme-details-list">
                                <p className='Activities-title'>Our student led, self-paced business course includes:</p>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Introduction to Google Suite:</span> Learning advanced Google Sheets, slides, and forms</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Introduction:</span>Customer Relationship Management & Salesforce</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Digital Marketing:</span>Website building, Social media marketing & SEO</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Data Analytics</span> Statistics, SQL queries, Tableau</li>
                                <p className="Activities"><span className='programme-details-subitem'>Co-curricular Activities:  </span> Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits</p>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <ProgrammeLocation></ProgrammeLocation>
            <div className="JobAssistance">
                <JobAssistance></JobAssistance>
            </div>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>
        </>
    )
}
export default SchoolOfBusiness;
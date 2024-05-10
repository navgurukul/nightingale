import "./style.css"
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreningTest";
import ProgrammeLocation from "../ProgrammeLocations";
import JobAssistance from "../JobAssistance";
function SchoolOfDesign() {
    return (
        <>
            <div className="SchoolOfDesignBgImg col-sm-12 col-lg-12 col-md-12">
                <div className='container-fluid' style={{ marginTop: "180px" }}>
                    <div className='row'>
                        <div className='col-sm-6 col-md-10 col-lg-10 col-xs-6' style={{ margin: "auto" }}>
                            <h5 className='programmingSchoolTitle'>School of Design</h5>
                            <p className='ProgramingContent'>Fully-funded course in graphic design with dedicated<br></br> teacher and mentor support</p>
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
                                <p className='Activities-title'>Our teacher-led, 18-months design course Includes:</p>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Introduction: </span> Graphic design and its domains</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Fundamental and Basics of Design: </span>Elements, drawing, color theory, typography</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Exploring Design Domains: </span>Publication design, social media design, UX design, video editing, motion graphics</li>
                                <li className='programme-details-item'><span className='programme-details-subitem'>Creation of Portfolio: </span> Preparing portfolios for job applications</li>
                                <p className="Activities"><span className='programme-details-subitem'>Co-curricular Activities:  </span> Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits</p>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <ProgrammeLocation />
            <div className="jobAssistance"><JobAssistance></JobAssistance></div>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>

        </>
    )
}
export default SchoolOfDesign;
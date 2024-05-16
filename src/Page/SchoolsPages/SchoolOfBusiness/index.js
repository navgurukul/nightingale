import "./style.css"
import JobAssistance from "../JobAssistance"
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreningTest";
import CoursesLocation from "../CourseLocations";
function SchoolOfBusinessPage() {
    return (
        <>
            <div className="business-bg-img col-sm-12 col-lg-12 col-md-12" style={{ gap: "40px" }}>
                <div className='container-fluid' >
                    <div className='row'>
                        <div className='col-sm-6 col-md-10 col-lg-9 col-xs-12' style={{ margin: "auto", marginTop: "80px" }}>
                            <h2 style={{ marginBottom: "16px", color: "white" }}>
                                School <span className="BackColor"> Of Business</span>
                            </h2>
                            <span className="li-points" style={{ color: "white" }}>
                                Fully funded course in Business CRM with regular<br></br> mentor support
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container programing-page">
                <div className="row custom-row">
                    <div className="col">
                        <h3 className="text-center" style={{ marginBottom: "16px" }}>
                            Who this <span className="BackColor">Programme</span> is for
                        </h3>
                        <div className=" col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                            <ul className="ml-3">
                                <li className="mb-1">
                                    <span className="li-points ">
                                        Youth above 16 years of age from underprivileged or low income communities who can’t<br></br>  afford expensive college education
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <span className="li-points">
                                        No prior education needed : Our students have been school and college dropouts, 10th or<br></br> 12th pass as well as degree holders such as BSc, BTech who could not get jobs
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <span className="li-points">
                                        Anyone from low income families of less than 15,000 INR in urban areas and 10,000<br></br> INR in rural areas
                                    </span>
                                </li>
                                <li className="mb-2">
                                    <span className="li-points">
                                        Some level of English is good to have
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <span className="li-points">
                                        Have heard about programming or have an interest in making a career in this field
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row custom-row">
                    <div className="col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                        <h3 className="text-center" style={{ marginBottom: "16px" }}>
                            What <span className="BackColor">You Will</span>  Learn
                        </h3>
                        <span className="li-points">
                            Our student led, self-paced business course includes:
                        </span>
                        <ol className="mt-4 ml-4">
                            <li className="mb-2 points ">
                                <span className="li-points">
                                    <span className="fw-bold ">Introduction to Google Suite : </span>{" "}
                                    Learning advanced Google Sheets, slides, and forms                                </span>
                            </li>
                            <li className="mb-2 points ">
                                <span className="li-points">
                                    <span className="fw-bold "> Introduction to Google Suite : </span>{" "}
                                    Learning advanced Google Sheets, slides, and forms
                                </span>
                            </li>
                            <li className="mb-2 points ">
                                <span className="li-points">
                                    <span className="fw-bold ">Introduction : </span>
                                    Customer Relationship Management & Salesforce
                                </span>
                            </li>
                            <li className="mb-0 points">
                                <span className="li-points">
                                    <span className="fw-bold ">Data Analytics : </span> English
                                    Statistics, SQL queries, Tableau
                                </span>
                            </li>
                        </ol>
                        <span className="li-points">
                            <span className="fw-bold mb-5 points"> Co-curricular Activities : </span>
                            Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits
                        </span>
                    </div>
                </div>
                <CoursesLocation></CoursesLocation>
            </div>
            <JobAssistance></JobAssistance>
            <AdmissionProcess></AdmissionProcess>
            <ScreeningTestPage></ScreeningTestPage>

        </>
    )
}
export default SchoolOfBusinessPage;
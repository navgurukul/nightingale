import "./style.css";
// import CampusLocation from "./Locations";
import Admission from "./Admission";
import CampusLocations from "./Locations";
import Test from "./Test";
function Programming() {
    return (
        <>
            <img
                src={require("./assets/Rectangle.png").default}
                className="bg-img-container"
                alt="Background Image"
            ></img>
            <div class="centered">
                <div class="text-block">
                    <h3 className="title-text">School of Programming</h3>
                    <p>Fully-funded course in software engineering with
                        <span>regular mentor support</span>
                    </p>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card-container col-sm-12 col-md-7 col-lg-7 text-box" >

                            <h5 className="title-text">Who This Programme Is For</h5>
                            <ul className="eligibilityCriteriaList">
                                <li>Youth above 16 years of age from underprivileged or low income communities who can’t afford expensive college education</li>
                                <li>
                                    No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs
                                </li>
                                <li>
                                    Anyone from low income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas
                                </li>
                                <li>
                                    Some level of English is good to have
                                </li>
                                <li>Have heard about programming or have an interest in making a career in this field</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-container col-sm-12 col-md-7 col-lg-7 text-box">
                            <h5 className="title-text">What You Will Learn</h5>
                            <p>Our student-led, self-paced 18-months programming course includes:</p>
                            <ol className="eligibilityCriteriaList">
                                <li><span style={{ fontWeight: "bold" }}>Front-end development:</span><span>Web and Mobile development in Javascript, React.js, and Android</span></li>
                                <li>
                                    <span style={{ fontWeight: "bold" }}>Back-end development:</span>Python, Node.js, Javascript
                                </li>
                                <li>
                                    <span style={{ fontWeight: "bold" }}> Soft skills:</span> English speaking, teamwork, emotional intelligence, and leadership skills
                                </li>
                                <li>
                                    <span style={{ fontWeight: "bold" }}>Hands-on projects:</span>  Clone projects for products such as WhatsApp and Facebook
                                </li>
                                <li>Have heard about programming or have an interest in making a career in this field</li>
                            </ol>
                        </div>
                    </div>
                    <CampusLocations />
                </div>
                <div className="container-fluid admission-test-wrapper">
                    <div class="text-center row">
                        <div class="card-body col-lg-4 col-md-4 col-sm-12 m-auto" >
                            <h5 class="card-title">100% Job Assistance</h5>
                            <p class="card-text">Students will get 100% assistance for securing job in roles such as entry-level Software Developer, Front-End Developer, Back-End Developer, Python Developer, JavaScript Developer, Testing & QA engineer</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>


            <Admission></Admission>
            <Test />

        </>
    )
}
export default Programming;

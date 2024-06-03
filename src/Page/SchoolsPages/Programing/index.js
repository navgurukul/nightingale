import "./style.css";
import JobAssistance from "../JobAssistance";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import BackgroundImg from "../BgroundImg";
import { program1Data, whoForPoints, JobAssistanceData, whatLearnPoints, backgroundData } from "./data";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest"
import AdmissionProcess from "../AdmissionProcess";
const information = "Our student-led, self-paced 18-months programming course includes:";
function SchoolProgramming() {

    return (
        <>
            <BackgroundImg backgroundData={backgroundData} />
            <div className="container">
                <div className="row">
                    <EligibilityDetail points={whoForPoints} />
                </div>
                <div className="row">
                    <CourseDetail data={whatLearnPoints} information={information} />
                </div>
            </div>
            <CoursesLocation courses={"School of Programming"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program1Data}></AdmissionProcess>
            <ScreeningTestPage programNeme = {"SchoolProgramming"}></ScreeningTestPage>
        </>
    )
}
export default SchoolProgramming;

import JobAssistance from "../JobAssistance";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import AdmissionProcess from "../AdmissionProcess";
import BackgroundImg from "../BgroundImg";
import CoursesLocation from "../CourseLocations";
import { whoForPoints, topics, JobAssistanceData, program2Data, BgroundImg } from "../SchoolsOfDesign/data";
const information = "Our teacher-led, 18-months design course Includes:"
function SchoolOfDesignPage() {
    return (
        <>
            <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information}></CourseDetail>
            <CoursesLocation courses={"School of Design"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program2Data}></AdmissionProcess>
            
        </>
    )
}
export default SchoolOfDesignPage;
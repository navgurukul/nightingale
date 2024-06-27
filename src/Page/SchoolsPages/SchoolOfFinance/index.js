
import CourseDetail from "../ProgramDetails/CourseDetail";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import JobAssistance from "../JobAssistance";
import { whoForPoints, JobAssistanceData, topics, program4Data, BgroundImg } from "../SchoolOfFinance/data";
import BackgroundImg from "../BgroundImg";
import CoursesLocation from "../CourseLocations";
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreningTest";
import DownloadCurriculum from "../DownloadCurriculum"
const information = "Our student-led, self-paced finance course includes:";

function SchoolOfFinancePage() {
    return (
        <>
            <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
            <EligibilityDetail points={whoForPoints}></EligibilityDetail>
            <CourseDetail data={topics} information={information}></CourseDetail>
            <DownloadCurriculum></DownloadCurriculum>
            <CoursesLocation courses={"School of Finance"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program4Data}></AdmissionProcess>
            <ScreeningTestPage programNeme={"SchoolOfFinance"}></ScreeningTestPage>
        </>
    )
}
export default SchoolOfFinancePage;
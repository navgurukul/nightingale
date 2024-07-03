
import JobAssistance from "../JobAssistance";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import AdmissionProcess from "../AdmissionProcess";
import BackgroundImg from "../BgroundImg";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import DownloadCurriculum from "../DownloadCurriculum";
import { whoForPoints, topics, JobAssistanceData, program2Data, BgroundImg ,DownloadData} from "../SchoolsOfDesign/data";
const information = "Our teacher-led, 18-months design course Includes:"
function SchoolOfDesignPage() {
    return (
        <>
            <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information}></CourseDetail>
            <DownloadCurriculum DownloadData={DownloadData}></DownloadCurriculum>
            <CoursesLocation courses={"School of Design"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program2Data}></AdmissionProcess>
            <ScreeningTestPage programNeme={"SchoolOfDesign"}></ScreeningTestPage>
        </>
    )
}
export default SchoolOfDesignPage;
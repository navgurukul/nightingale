import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import JobAssistance from "../JobAssistance";
import BackgroundImg from "../BgroundImg"
import { whoForPoints, topics, JobAssistanceData, program3Data, BackgroundImgData,AnumnusPageData} from "./Data"
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";
import AlumnusPage from "../AlumnusPage";
import DownloadCurriculum from "../DownloadCurriculum";
const information = "Our student led, self-paced business course includes:";
function SchoolOfBusinessPage() {

    return (
        <>
            <BackgroundImg backgroundData={BackgroundImgData}></BackgroundImg>
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information}></CourseDetail>
            <DownloadCurriculum></DownloadCurriculum>
            <CoursesLocation courses={"School Of Business"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program3Data}></AdmissionProcess>
            <ScreeningTestPage programNeme = {"SchoolOfBusiness"}></ScreeningTestPage>
            <AlumnusPage AnumnusPageData={AnumnusPageData}></AlumnusPage>
        </>
    )

}
export default SchoolOfBusinessPage;
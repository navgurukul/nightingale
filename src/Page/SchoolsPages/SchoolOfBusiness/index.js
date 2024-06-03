import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import JobAssistance from "../JobAssistance";
import BackgroundImg from "../BgroundImg"
import { whoForPoints, topics, JobAssistanceData, program3Data, BackgroundImgData } from "./Data"
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";
const information = "Our student led, self-paced business course includes:";

function SchoolOfBusinessPage() {

    return (
        <>
            <BackgroundImg backgroundData={BackgroundImgData}></BackgroundImg>
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information}></CourseDetail>
            <CoursesLocation courses={"School Of Business"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program3Data}></AdmissionProcess>
            <ScreeningTestPage programNeme = {"SchoolOfBusiness"}></ScreeningTestPage>
        </>
    )

}
export default SchoolOfBusinessPage;
// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import JobAssistance from "../JobAssistance";
// import BackgroundImg from "../BgroundImg"
// import { whoForPoints, topics, JobAssistanceData, program3Data, BackgroundImgData,AnumnusPageData,DownloadData} from "./Data"
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest";
// import AdmissionProcess from "../AdmissionProcess";
// import AlumnusPage from "../AlumnusPage";
// import DownloadCurriculum from "../DownloadCurriculum";
// const information = "Our student led, self-paced business course includes:";

// function SchoolOfBusinessPage() {

//     return (
//         <>
//             <BackgroundImg backgroundData={BackgroundImgData}></BackgroundImg>
//             <EligibilityDetail points={whoForPoints} />
//             <CourseDetail data={topics} information={information}></CourseDetail>
//             <DownloadCurriculum DownloadData={DownloadData}></DownloadCurriculum>
//             <CoursesLocation courses={"School Of Business"}></CoursesLocation>
//             <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
//             <AdmissionProcess stages={program3Data}></AdmissionProcess>
//             <ScreeningTestPage programNeme = {"SchoolOfBusiness"}></ScreeningTestPage>
//             <AlumnusPage AnumnusPageData={AnumnusPageData}></AlumnusPage>
//         </>
//     )

// }
// export default SchoolOfBusinessPage;

import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import JobAssistance from "../JobAssistance";
import BackgroundImg from "../BgroundImg"
import { whoForPoints, topics, JobAssistanceData, program3Data, BackgroundImgData, AnumnusPageData } from "./Data"
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";
import AlumnusPage from "../AlumnusPage";

const information = "Our student led, self-paced business course includes:";

function SchoolOfBusinessPage() {

    const onButtonClick = () => {
        const pdfUrl = "https://ng-webite-pdfs.s3.ap-south-1.amazonaws.com/SoBCurriculum+(1).pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <>
            <BackgroundImg backgroundData={BackgroundImgData}></BackgroundImg>
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information}></CourseDetail>


            <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer mt-3">
                <button
                    type="button"
                    className="btn regular-btn"
                    style={{ height: "48px", width: "208px", margin: "10px" }}
                    onClick={() => onButtonClick()}
                >
                    Download Curriculum
                </button>
            </div>

            <CoursesLocation courses={"School Of Business"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program3Data}></AdmissionProcess>
            <ScreeningTestPage programNeme={"SchoolOfBusiness"}></ScreeningTestPage>
            <AlumnusPage AnumnusPageData={AnumnusPageData}></AlumnusPage>
        </>
    )
}
export default SchoolOfBusinessPage;



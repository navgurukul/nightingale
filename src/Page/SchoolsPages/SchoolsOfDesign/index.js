
// import JobAssistance from "../JobAssistance";
// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import AdmissionProcess from "../AdmissionProcess";
// import BackgroundImg from "../BgroundImg";
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest";
// import DownloadCurriculum from "../DownloadCurriculum";
// import { whoForPoints, topics, JobAssistanceData, program2Data, BgroundImg ,DownloadData} from "../SchoolsOfDesign/data";
// const information = "Our teacher-led, 18-months design course Includes:"
// function SchoolOfDesignPage() {
//     return (
//         <>
//             <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
//             <EligibilityDetail points={whoForPoints} />
//             <CourseDetail data={topics} information={information}></CourseDetail>
//             <DownloadCurriculum DownloadData={DownloadData}></DownloadCurriculum>
//             <CoursesLocation courses={"School of Design"}></CoursesLocation>
//             <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
//             <AdmissionProcess stages={program2Data}></AdmissionProcess>
//             <ScreeningTestPage programNeme={"SchoolOfDesign"}></ScreeningTestPage>
//         </>
//     )
// }
// export default SchoolOfDesignPage;




import JobAssistance from "../JobAssistance";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import AdmissionProcess from "../AdmissionProcess";
import BackgroundImg from "../BgroundImg";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import SoDCurriculum from '../../../Pdf/SoDCurriculum.pdf';
import { whoForPoints, topics, JobAssistanceData, program2Data, BgroundImg } from "../SchoolsOfDesign/data";
const information = "Our teacher-led, 18-months design course Includes:"


function SchoolOfDesignPage() {

    const onButtonClick = (pdfFile, fileName) => {
        console.log("PDF file path:", pdfFile);
        const link = document.createElement("a");
        link.href = pdfFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information}></CourseDetail>

            <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
                <button
                    type="button"
                    className="btn regular-btn"
                    style={{ height: "48px", width: "208px", margin: "10px" }}
                    onClick={() => onButtonClick(SoDCurriculum, "SoDCurriculum.pdf")}
                >
                    Download Curriculum
                </button>
            </div>

            <CoursesLocation courses={"School of Design"}></CoursesLocation>
            <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
            <AdmissionProcess stages={program2Data}></AdmissionProcess>
            <ScreeningTestPage programNeme={"SchoolOfDesign"}></ScreeningTestPage>
        </>
    )
}
export default SchoolOfDesignPage;



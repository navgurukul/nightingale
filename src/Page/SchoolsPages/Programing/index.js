// import "./style.css";
// import JobAssistance from "../JobAssistance";
// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import BackgroundImg from "../BgroundImg";
// import { program1Data, whoForPoints, JobAssistanceData, whatLearnPoints, backgroundData,AnumnusPageData,DownloadData} from "./data";
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest"
// import AdmissionProcess from "../AdmissionProcess";
// import AlumnusPage from "../AlumnusPage";
// import DownloadCurriculum from "../DownloadCurriculum";
// const information = "Our student-led, self-paced 18-months programming course includes:";
// function SchoolProgramming() {

//     return (
//         <>
//             <BackgroundImg backgroundData={backgroundData} />
//             <div className="container">
//                 <div className="row">
//                     <EligibilityDetail points={whoForPoints} />
//                 </div>
//                 <div className="row">
//                     <CourseDetail data={whatLearnPoints} information={information} />
//                 </div>
//             </div>
//             <DownloadCurriculum DownloadData={DownloadData}></DownloadCurriculum>
//             <CoursesLocation courses={"School of Programming"}></CoursesLocation>
//             <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
//             <AdmissionProcess stages={program1Data}></AdmissionProcess>
//             <ScreeningTestPage programNeme = {"SchoolProgramming"}></ScreeningTestPage>
//             <AlumnusPage AnumnusPageData={AnumnusPageData}></AlumnusPage>
//         </>
//     )
// }
// export default SchoolProgramming;










import "./style.css";
import JobAssistance from "../JobAssistance";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import BackgroundImg from "../BgroundImg";
import { program1Data, whoForPoints, JobAssistanceData, whatLearnPoints, backgroundData, AnumnusPageData} from "./data";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";
import AlumnusPage from "../AlumnusPage";
import SoPCurriculum from '../../../Pdf/SoPCurriculum.pdf';

const information = "Our student-led, self-paced 18-months programming course includes:";

function SchoolProgramming() {

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
           <BackgroundImg backgroundData={backgroundData} />
           <div className="container">
               <div className="row">
                   <EligibilityDetail points={whoForPoints} />
               </div>
               <div className="row">
                   <CourseDetail data={whatLearnPoints} information={information} />
               </div>
           </div>

           <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
               <button
                   type="button"
                   className="btn regular-btn"
                   style={{ height: "48px", width: "208px", margin: "10px" }}
                   onClick={() => onButtonClick(SoPCurriculum, "SoPCurriculum.pdf")}
               >
                   Download Curriculum
               </button>
           </div>

           <CoursesLocation courses={"School of Programming"} />
           <JobAssistance JobAssistance={JobAssistanceData} />
           <AdmissionProcess stages={program1Data} />
           <ScreeningTestPage programNeme={"SchoolProgramming"} />
           <AlumnusPage AnumnusPageData={AnumnusPageData} />
       </>
   );
}


export default SchoolProgramming;

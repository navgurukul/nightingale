
// import React from 'react';
// import { DownloadData, whoForPoints, topics, JobAssistanceData, program4Data, BgroundImg, AnumnusPageData } from './data'; // Correct data import
// import DownloadCurriculum from "../DownloadCurriculum";
// import BackgroundImg from "../BgroundImg";
// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import JobAssistance from "../JobAssistance";
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest";
// import AdmissionProcess from "../AdmissionProcess";

// const information = "Our student-led, self-paced finance course includes:";

// function SchoolOfFinancePage() {
//     return (
//         <>
//             <BackgroundImg backgroundData={BgroundImg} />
//             <EligibilityDetail points={whoForPoints} />
//             <CourseDetail data={topics} information={information} />
//             <DownloadCurriculum DownloadData={DownloadData} /> 
//             <CoursesLocation courses={"School of Finance"} />
//             <JobAssistance JobAssistance={JobAssistanceData} />
//             <AdmissionProcess stages={program4Data} />
//             <ScreeningTestPage programNeme={"SchoolOfFinance"} />
//         </>
//     );
// }

// export default SchoolOfFinancePage;




import CourseDetail from "../ProgramDetails/CourseDetail";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import JobAssistance from "../JobAssistance";
import { whoForPoints, JobAssistanceData, topics, program4Data, BgroundImg } from "../SchoolOfFinance/data";
import BackgroundImg from "../BgroundImg";
import CoursesLocation from "../CourseLocations";
import AdmissionProcess from "../AdmissionProcess";
import ScreeningTestPage from "../ScreningTest";

const SoFCurriculum = "/Pdfs/SoFCurriculum.pdf"; 
const information = "Our student-led, self-paced finance course includes:";

function SchoolOfFinancePage() {


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
           <EligibilityDetail points={whoForPoints}></EligibilityDetail>
           <CourseDetail data={topics} information={information}></CourseDetail>

           <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
               <button
                   type="button"
                   className="btn regular-btn"
                   style={{ height: "48px", width: "208px", margin: "10px" }}
                   onClick={() => onButtonClick(SoFCurriculum, "SoFCurriculum.pdf")}
               >
                   Download Curriculum
               </button>
           </div>

           <CoursesLocation courses={"School of Finance"}></CoursesLocation>
           <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
           <AdmissionProcess stages={program4Data}></AdmissionProcess>
           <ScreeningTestPage programNeme={"SchoolOfFinance"}></ScreeningTestPage>
       </>
   )
}
export default SchoolOfFinancePage;


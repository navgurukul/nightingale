
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
import SoFCurriculum from '../../../Pdf/SoFCurriculum.pdf';
const information = "Our student-led, self-paced finance course includes:";

function SchoolOfFinancePage() {

    const onButtonClick = () => {
        const pdfUrl = "https://ng-webite-pdfs.s3.ap-south-1.amazonaws.com/SoFCurriculum.pdf";
        window.open(pdfUrl, "_blank");
    };

   return (
       <>
           <BackgroundImg backgroundData={BgroundImg}></BackgroundImg>
           <EligibilityDetail points={whoForPoints}></EligibilityDetail>
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

           <CoursesLocation courses={"School of Finance"}></CoursesLocation>
           <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
           <AdmissionProcess stages={program4Data}></AdmissionProcess>
           <div className="" style={{marginBottom:"60px"}}>
           <ScreeningTestPage programNeme={"SchoolOfFinance"}></ScreeningTestPage>
           </div>
       </>
   )
}
export default SchoolOfFinancePage;


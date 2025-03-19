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










// import "./style.css";
// import JobAssistance from "../JobAssistance";
// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import BackgroundImg from "../BgroundImg";
// import { program1Data, whoForPoints, JobAssistanceData, whatLearnPoints, backgroundData, AnumnusPageData} from "./data";
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest";
// import AdmissionProcess from "../AdmissionProcess";
// import AlumnusPage from "../AlumnusPage";

// // const SoPCurriculum = "/pdfs/SoPCurriculum.pdf"; 
// // const SoPCurriculum = `${window.location.origin}/Pdfs/SoPCurriculum.pdf`;
// const SoPCurriculum = process.env.PUBLIC_URL + "/pdfs/SoPCurriculum.pdf";

// const information = "Our student-led, self-paced 18-months programming course includes:";

// function SchoolProgramming() {

// //    const onButtonClick = (pdfFile, fileName) => {
// //        console.log("PDF file path:", pdfFile);
// //        const link = document.createElement("a");
// //        link.href = pdfFile;
// //        link.download = fileName;
// //        document.body.appendChild(link);
// //        link.click();
// //        document.body.removeChild(link);
// //    };
// const onButtonClick = async () => {
//     try {
//       // 1. Fetch PDF with error handling
//       const response = await fetch(SoPCurriculum);
//       if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      
//       // 2. Create Blob with proper MIME type
//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(new Blob([blob], { 
//         type: 'application/pdf' 
//       }));
      
//       // 3. Create temporary link
//       const link = document.createElement("a");
//       link.href = blobUrl;
//       link.download = "SoPCurriculum.pdf";
//       link.style.display = "none";
      
//       // 4. Trigger download
//       document.body.appendChild(link);
//       link.click();
      
//       // 5. Cleanup
//       window.URL.revokeObjectURL(blobUrl);
//       document.body.removeChild(link);
      
//     } catch (error) {
//       console.error("Download failed:", error);
//       alert("Failed to download curriculum. Please try again.");
//     }
//   };


//    return (
//        <>
//            <BackgroundImg backgroundData={backgroundData} />
//            <div className="container">
//                <div className="row">
//                    <EligibilityDetail points={whoForPoints} />
//                </div>
//                <div className="row">
//                    <CourseDetail data={whatLearnPoints} information={information} />
//                </div>
//            </div>

//            <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
//                <button
//                    type="button"
//                    className="btn regular-btn"
//                    style={{ height: "48px", width: "208px", margin: "10px" }}
//                    onClick={() => onButtonClick()}
//                >
//                    Download Curriculum
//                </button>
//            </div>

//            <CoursesLocation courses={"School of Programming"} />
//            <JobAssistance JobAssistance={JobAssistanceData} />
//            <AdmissionProcess stages={program1Data} />
//            <ScreeningTestPage programNeme={"SchoolProgramming"} />
//            <AlumnusPage AnumnusPageData={AnumnusPageData} />
//        </>
//    );
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

const information = "Our student-led, self-paced 18-months programming course includes:";

function SchoolProgramming() {
    const handleDownloadPdf = () => {
        // Using relative path to ensure it works in both development and production
        const pdfUrl = '/pdfs/SoPCurriculum.pdf';
        
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'SoPCurriculum.pdf'; // Suggested filename for download
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
                    onClick={handleDownloadPdf}
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
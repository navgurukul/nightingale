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
import BackgroundImg from "../BgroundImg";
import {
  whoForPoints,
  topics,
  JobAssistanceData,
  program3Data,
  BackgroundImgData,
  AnumnusPageData,
} from "./Data";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";
import AlumnusPage from "../AlumnusPage";

// Ensure the PDF file is correctly referenced from the public directory
const SoBCurriculum = "./SoBCurriculum.pdf";

const information = "Our student-led, self-paced business course includes:";

function SchoolOfBusinessPage() {
  // Create a function to download a PDF file
  function downloadPDF() {
    // Define the URL of the PDF file
    const pdfUrl = SoBCurriculum; // Replace with your PDF file path

    // Create an anchor element
    const link = document.createElement("a");

    // Set the href attribute to the PDF URL
    link.setAttribute("href", pdfUrl);

    // Set the download attribute with a desired filename
    link.setAttribute("download", "downloadedFile.pdf"); // Replace with your desired filename

    // Programmatically click the link to trigger the download
    link.click();
  }

  // Call the function when needed, e.g., on button click
  // <button onclick="downloadPDF()">Download PDF</button>
  return (
    <>
      <BackgroundImg backgroundData={BackgroundImgData}></BackgroundImg>
      <EligibilityDetail points={whoForPoints} />
      <CourseDetail data={topics} information={information}></CourseDetail>
      <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
        <button onClick={downloadPDF} className="btn btn-primary">
          Download Shivansh
        </button>
      </div>
      <CoursesLocation courses={"School Of Business"}></CoursesLocation>
      <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
      <AdmissionProcess stages={program3Data}></AdmissionProcess>
      <ScreeningTestPage programNeme={"SchoolOfBusiness"}></ScreeningTestPage>
      <AlumnusPage AnumnusPageData={AnumnusPageData}></AlumnusPage>
    </>
  );
}

export default SchoolOfBusinessPage;

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

// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import JobAssistance from "../JobAssistance";
// import BackgroundImg from "../BgroundImg";
// import {
//   whoForPoints,
//   topics,
//   JobAssistanceData,
//   program3Data,
//   BackgroundImgData,
//   AnumnusPageData,
// } from "./Data";
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest";
// import AdmissionProcess from "../AdmissionProcess";
// import AlumnusPage from "../AlumnusPage";

// // import SoBCurriculum from '../../../Pdf/SoBCurriculum.pdf';
// const SoBCurriculum = "/SoBCurriculum.pdf";

// const information = "Our student led, self-paced business course includes:";

// function SchoolOfBusinessPage() {
//   const onButtonClick = (pdfFile, fileName) => {
//     console.log("PDF file path:", pdfFile);
//     const link = document.createElement("a");
//     link.href = pdfFile;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//       <BackgroundImg backgroundData={BackgroundImgData}></BackgroundImg>
//       <EligibilityDetail points={whoForPoints} />
//       <CourseDetail data={topics} information={information}></CourseDetail>
//       <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
//         <button
//           type="button"
//           className="btn regular-btn"
//           style={{ height: "48px", width: "208px", margin: "10px" }}
//           onClick={() => onButtonClick(SoBCurriculum, "SoBCurriculum.pdf")}
//         >
//           Download Curriculum test
//         </button>
//       </div>
//       <CoursesLocation courses={"School Of Business"}></CoursesLocation>
//       <JobAssistance JobAssistance={JobAssistanceData}></JobAssistance>
//       <AdmissionProcess stages={program3Data}></AdmissionProcess>
//       <ScreeningTestPage programNeme={"SchoolOfBusiness"}></ScreeningTestPage>
//       <AlumnusPage AnumnusPageData={AnumnusPageData}></AlumnusPage>
//     </>
//   );
// }
// export default SchoolOfBusinessPage;

import React, { useState } from 'react';
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

const information = "Our student led, self-paced business course includes:";

function SchoolOfBusinessPage() {
  const [downloadStatus, setDownloadStatus] = useState({
    loading: false,
    error: null
  });

  const handlePdfDownload = async () => {
    setDownloadStatus({ loading: true, error: null });

    try {
      const baseUrl = window.location.origin;
      const pdfUrl = `${baseUrl}/SoBCurriculum.pdf`;
      
      // Fetch the PDF with specific headers
      const response = await fetch(pdfUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to download PDF (Status: ${response.status})`);
      }

      // Get the PDF as a blob with explicit type
      const blob = await response.blob();
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      
      // Create object URL with the correctly typed blob
      const url = window.URL.createObjectURL(pdfBlob);
      
      // Create and configure download link
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SoBCurriculum.pdf';
      link.type = 'application/pdf';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 100);
      
      setDownloadStatus({ loading: false, error: null });

    } catch (error) {
      console.error('Error downloading PDF:', error);
      setDownloadStatus({ 
        loading: false, 
        error: 'Failed to download the PDF. Please try again.' 
      });
    }
  };

  // Preview function to open PDF in new tab
  const handlePreviewPdf = () => {
    const baseUrl = window.location.origin;
    const pdfUrl = `${baseUrl}/SoBCurriculum.pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <BackgroundImg backgroundData={BackgroundImgData} />
      <EligibilityDetail points={whoForPoints} />
      <CourseDetail data={topics} information={information} />
      <div className="container d-flex flex-column align-items-center justify-content-center DownloadCurriculumContainer">
        {/* Download Button */}
        <button
          type="button"
          className="btn regular-btn"
          style={{ height: "48px", width: "208px", margin: "10px" }}
          onClick={handlePdfDownload}
          disabled={downloadStatus.loading}
        >
          {downloadStatus.loading ? 'Downloading...' : 'Download Curriculum'}
        </button>

        {/* Preview Button */}
        <button
          type="button"
          className="btn regular-btn"
          style={{ height: "48px", width: "208px", margin: "10px" }}
          onClick={handlePreviewPdf}
        >
          Preview Curriculum
        </button>
        
        {downloadStatus.error && (
          <div className="text-danger mt-2">
            {downloadStatus.error}
          </div>
        )}
      </div>
      <CoursesLocation courses={"School Of Business"} />
      <JobAssistance JobAssistance={JobAssistanceData} />
      <AdmissionProcess stages={program3Data} />
      <ScreeningTestPage programNeme={"SchoolOfBusiness"} />
      <AlumnusPage AnumnusPageData={AnumnusPageData} />
    </>
  );
}

export default SchoolOfBusinessPage;
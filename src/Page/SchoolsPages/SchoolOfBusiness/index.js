
// import React from 'react';
// import { DownloadData } from './Data'; 
// import DownloadCurriculum from "../DownloadCurriculum";
// import BackgroundImg from "../BgroundImg";
// import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
// import CourseDetail from "../ProgramDetails/CourseDetail";
// import JobAssistance from "../JobAssistance";
// import CoursesLocation from "../CourseLocations";
// import ScreeningTestPage from "../ScreningTest";
// import AdmissionProcess from "../AdmissionProcess";
// import AlumnusPage from "../AlumnusPage";
// import { whoForPoints, topics, JobAssistanceData, program3Data, BackgroundImgData, AnumnusPageData } from './Data';

// const information = "Our student led, self-paced business course includes:";

// function SchoolOfBusinessPage() {
//     return (
//         <>
//             <BackgroundImg backgroundData={BackgroundImgData} />
//             <EligibilityDetail points={whoForPoints} />
//             <CourseDetail data={topics} information={information} />
//             <DownloadCurriculum DownloadData={DownloadData} /> 
//             <CoursesLocation courses={"School Of Business"} />
//             <JobAssistance JobAssistance={JobAssistanceData} />
//             <AdmissionProcess stages={program3Data} />
//             <ScreeningTestPage programNeme={"SchoolOfBusiness"} />
//             <AlumnusPage AnumnusPageData={AnumnusPageData} />
//         </>
//     );
// }

// export default SchoolOfBusinessPage;






import React from 'react';
import SoBCurriculum from './SoBCurriculum.pdf';
import BackgroundImg from "../BgroundImg";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import JobAssistance from "../JobAssistance";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";
import AlumnusPage from "../AlumnusPage";
import { whoForPoints, topics, JobAssistanceData, program3Data, BackgroundImgData, AnumnusPageData } from './Data';

const information = "Our student led, self-paced business course includes:";

function SchoolOfBusinessPage() {
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = SoBCurriculum;
        link.target = '_blank';
        link.download = 'SoBCurriculum.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <BackgroundImg backgroundData={BackgroundImgData} />
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information} />

          
            <div className="d-flex justify-content-center my-4">
                <button
                    type="button"
                    className="btn regular-btn"
                    style={{ height: "48px", width: "208px", margin: "10px" }}
                    onClick={downloadPDF}
                >
                    Download Curriculum
                </button>
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
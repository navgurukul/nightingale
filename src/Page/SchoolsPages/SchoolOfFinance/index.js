
import React from 'react';
import { DownloadData, whoForPoints, topics, JobAssistanceData, program4Data, BgroundImg, AnumnusPageData } from './data'; // Correct data import
import DownloadCurriculum from "../DownloadCurriculum";
import BackgroundImg from "../BgroundImg";
import EligibilityDetail from "../ProgramDetails/EligibilityDetail";
import CourseDetail from "../ProgramDetails/CourseDetail";
import JobAssistance from "../JobAssistance";
import CoursesLocation from "../CourseLocations";
import ScreeningTestPage from "../ScreningTest";
import AdmissionProcess from "../AdmissionProcess";

const information = "Our student-led, self-paced finance course includes:";

function SchoolOfFinancePage() {
    return (
        <>
            <BackgroundImg backgroundData={BgroundImg} />
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information} />
            <DownloadCurriculum DownloadData={DownloadData} /> {/* The button will download the correct PDF */}
            <CoursesLocation courses={"School of Finance"} />
            <JobAssistance JobAssistance={JobAssistanceData} />
            <AdmissionProcess stages={program4Data} />
            <ScreeningTestPage programNeme={"SchoolOfFinance"} />
        </>
    );
}

export default SchoolOfFinancePage;

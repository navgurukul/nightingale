
import React from 'react';
import { DownloadData } from './Data'; // Import the DownloadData from the SchoolOfBusiness Data.js
import DownloadCurriculum from "../DownloadCurriculum";
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
    return (
        <>
            <BackgroundImg backgroundData={BackgroundImgData} />
            <EligibilityDetail points={whoForPoints} />
            <CourseDetail data={topics} information={information} />
            <DownloadCurriculum DownloadData={DownloadData} /> {/* This will load the correct PDF */}
            <CoursesLocation courses={"School Of Business"} />
            <JobAssistance JobAssistance={JobAssistanceData} />
            <AdmissionProcess stages={program3Data} />
            <ScreeningTestPage programNeme={"SchoolOfBusiness"} />
            <AlumnusPage AnumnusPageData={AnumnusPageData} />
        </>
    );
}

export default SchoolOfBusinessPage;

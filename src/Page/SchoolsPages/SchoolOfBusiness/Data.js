import SchoolOfBusinessPage from "../SchoolOfBusiness/assets/businessbgimg.png"
import KiranJatav from "./assets/ KiranJatav.png";
import MeenuGwala from "./assets/MeenuGwala.png";

export const whoForPoints = [
    { point: "Youth above 16 years of age from underprivileged or low-income communities who can't afford expensive college education" },
    { point: "No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs" },
    { point: "Anyone from low-income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas" },
    { point: "Some level of English is good to have" },
    { point: "Have heard about programming or have an interest in making a career in this field" }
];
export const topics = [
    { subtitle: 'Introduction to Google Suite:', text: "Learning advanced Google Sheets, slides, and forms" },
    { subtitle: "Introduction:", text: "Customer Relationship Management & Salesforce" },
    { subtitle: "Digital Marketing:", text: "Website building, Social media marketing & SEO" },
    { subtitle: "Data Analytics:", text: "Statistics, SQL queries, Tableau" }
]
export const JobAssistanceData = [
    {
        JobAssistanceContent: "Students will get 100% assistance for securing jobs in roles such as Customer Relationship Representative, CRM Associate, Salesforce Associate & Operations Associate"
    }
]
export const program3Data = [
    {
        buttonText: "Stage 1",
        cardTitle: "Screening Test",
        cardText: "Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.",
        format: "Online/Offline",
        eligibility: "Student from any stream",
        testStructure: { Maths: "20 marks", English: "10 marks ", Total: "30 marks" },
        passingCriteria: { Maths: "14 marks", English: "6 marks" }
    },
    {
        buttonText: "Stage 2",
        cardTitle: "Academic Interview",
        cardText: "Evaluates 8th standard-level Math and English, similar to the screening test",
        format: "Online",
        eligibility: "Candidates qualifying the screening test."
    },
    {
        buttonText: "Stage 3",
        cardTitle: "Culture Fit Round",
        cardText: "Assess cultural alignment, focusing on needs, emotional aspects, and commitment to community",
        format: "Online/Offline",
        eligibility: "Successful candidates from the academic interview",
        additionalInfo: "Candidates are either marked 'Failed' or 'In Preparation'. Depending on which re-interview is allowed in 7 to 15 days"
    },
    {
        buttonText: "Stage 4",
        cardTitle: "Offer Letter",
        cardText: "Confirms selection for residential course",
        format: "Online/Offline",
        eligibility: "Candidates passing the culture-fit round.",
        confirmation: "Sent via email"
    }
];
export const BackgroundImgData = [
    {
        urlImg: SchoolOfBusinessPage,
        title: "School Of Business",
        text: "Ever pictured yourself as a business person? Explore the world of business with skills in Google Suite, CRM, Digital Marketing, and Data Analytics, where we prepare you for a digital-first economy.",
        color: "white",
        buttonText: "Take Screening Test"
    }
]
export const AnumnusPageData = [
    {
        id: 1,
        name: "Meenu Gwala",
        img: MeenuGwala,
        bioData: "Coming from a family in Rajasthan whose main source of income is daily wage. I joined NavGurukul after graduation and served as a facility coordinator, gaining motivation and valuable experience. Despite facing rejections and curriculum changes, I discovered my interest in non-tech fields. This led me to join the School of Business, which opened new opportunities. Today, I work as a Managed Services Representative at Cloudthat in Bangalore. NavGurukul's support and the guidance of Brigadier Kishor Jadhav Sir from Anish Jadhav Memorial Foundation were instrumental in my success, and I am incredibly grateful for the opportunities I received.",
        linkdin: "https://www.linkedin.com/in/meenu-gwala-5b6262275/",
    },
    {
        id: 2,
        name: "Kiran Jatav",
        bioData: "NavGurukul has been a transformative experience for me. Coming from Alwar, Rajasthan, with a background in farming, I joined NavGurukul on April 10, 2022. Initially, I explored programming but soon realized my interest lay elsewhere. Transitioning to the School of Business, I completed a Salesforce diploma, learning CRM and sales. Today, I am a Managed Services Representative at CloudThat in Bangalore. I am deeply grateful to NavGurukul for their support, which has enabled me to reach this position.",
        img: KiranJatav,
        linkdin: "https://www.linkedin.com/in/kiran-jatav-564a712a9/"
    }
]

// export const DownloadData=[
//     {
//         id:1,
//         pdfFile:"/Pdfs/SoBCurriculum.pdf"
//     }
// ]

export const DownloadData = [
    {
        id: 1,
        pdfFile: `${process.env.PUBLIC_URL}/Pdfs/SoBCurriculum.pdf`
    }
];






















import SchoolOfFInanceImg from "../SchoolOfFinance/assets/financeImg.png";

export const whoForPoints = [
   { point: "Youth above 16 years of age from underprivileged or low-income communities who can't afford expensive college education" },
   { point: "No prior education needed: Our students have been school and college dropouts, 10th or 12th pass as well as degree holders such as BSc, BTech who could not get jobs" },
   { point: "Anyone from low-income families of less than 15,000 INR in urban areas and 10,000 INR in rural areas" },
   { point: "Some level of English is good to have" },
   { point: "Have heard about programming or have an interest in making a career in this field" }
];
export const topics = [
   { id: 1, subtitle: "Financial Accounting:", text: "Learning accounting, cost accounting, management accounting" },
   { id: 2, subtitle: "Learning Taxation: ", text: "Learning Direct Tax, computation of income of individual, firm & company" },
   { id: 3, subtitle: "Learning Tally:", text: "User interface and company management, ledgers, payment voucher & financial reports" },
];
export const JobAssistanceData = [
   {
       JobAssistanceContent: "Students will get 100% assistance for securing jobs in general Graphic designer roles and depending on individual may also specialize for specific roles of Illustrator, Video Editor, Motion Graphics etc.",
   }
]
export const program4Data = [
   {
       buttonText: "Stage 1",
       cardTitle: "Screening Test",
       cardText: "Assess fundamental skills up to 8th standard level in Mathematics, Logical Reasoning, and English Language.",
       format: "Online/Offline",
       eligibility: "Student from any stream",
       testStructure: { Maths: "20 marks", English: "10 marks", Total: "30 marks" },
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

export const BgroundImg = [
   {
       urlImg: SchoolOfFInanceImg,
       title: "School Of Finance",
       text: "Fascinated by the financial world? Master the arts of Accounting, Taxation, and Tally to unlock new opportunities in the finance sector.",
       color: "black",
       buttonText: "Take Screening Test"
   }
]
export const DownloadData=[
    {
        id:1,
        pdfFile:"/Pdfs/SoFCurriculum.pdf",
        
    }
]



// export const DownloadData=[
//     {
//         id:1,
//         pdfFile: `${process.env.PUBLIC_URL}/Pdfs/SoFCurriculum.pdf`
//     }
// ]





// import React from 'react';

// function DownloadCurriculum({ DownloadData }) {
//     // const onButtonClick = (pdfFile) => {
//     //     const link = document.createElement("a");
//     //     link.href = pdfFile; // Set the href to the PDF file path
//     //     link.target = "_blank"; // Open in a new tab
//     //     link.download = "Curriculum.pdf"; // The download name for the file
//     //     document.body.appendChild(link);
//     //     link.click();
//     //     document.body.removeChild(link);
//     // };
//     const onButtonClick = (pdfFile) => {
//         // Create an anchor element
//         console.log(pdfFile);
//         const link = document.createElement("a");
//         console.log(link);
//         link.href = pdfFile; // Directly set the PDF file URL
//         link.download = "Curriculum.pdf"; // Specify the default filename for download
//         // Append the link to the body
//         document.body.appendChild(link);
//         link.click(); // Programmatically click the link to trigger the download
//         document.body.removeChild(link); // Clean up the DOM
//     };
    
//     return (
//         <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
//             {DownloadData && DownloadData.map((data) => (
//                 <button
//                     key={data.id}
//                     type="button"
//                     className="btn regular-btn"
//                     style={{ height: "48px", width: "208px", margin: "10px" }}
//                     onClick={() => onButtonClick(data.pdfFile)} // Trigger the download
//                 >
//                     Download Curriculum
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default DownloadCurriculum;


import React from 'react';

function DownloadCurriculum({ DownloadData }) {
    // const onButtonClick = (pdfFile) => {
    //     const link = document.createElement("a");
    //     link.href = pdfFile; // Set the href to the PDF file path
    //     link.target = "_blank"; // Open in a new tab
    //     link.download = "Curriculum.pdf"; // The download name for the file
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
    const onButtonClick = (pdfFile) => {
        const link = document.createElement("a");
        const isProduction = process.env.NODE_ENV === 'production';
        const baseURL = isProduction ? "https://vercel.com/dashboard" : ""; // Replace with your actual production domain
        link.href = `${baseURL}${pdfFile}`;
        link.target = "_blank";
        link.download = "Curriculum.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
            {DownloadData && DownloadData.map((data) => (
                <button
                    key={data.id}
                    type="button"
                    className="btn regular-btn"
                    style={{ height: "48px", width: "208px", margin: "10px" }}
                    onClick={() => onButtonClick(data.pdfFile)} // Trigger the download
                >
                    Download Curriculum
                </button>
            ))}
        </div>
    );
}

export default DownloadCurriculum;

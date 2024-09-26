import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function DownloadCurriculum({ DownloadData }) {
    const onButtonClick = (pdfFile) => {
        console.log(pdfFile);
        // Create an anchor element
        const link = document.createElement("a");
        link.href = pdfFile; // Directly set the PDF file URL
        link.target = "_blank"; // Optional: open in a new tab
        link.download = "Curriculum.pdf"; // Specify the default filename for download
        console.log(link);
        // Append the link to the body
        document.body.appendChild(link);
        link.click(); // Programmatically click the link to trigger the download
        document.body.removeChild(link); // Clean up the DOM
        
    };

    return (
        <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
            {DownloadData && DownloadData.map((data) => (
                
                    <button
                        key={data.id}
                        type="button"
                        className="btn regular-btn"
                        style={{ height: "48px", width: "208px", margin: "10px" }}
                        onClick={() => onButtonClick(data.pdfFile)}
                        
                    >
                        Download Curriculum 
                    </button>
                
            ))}
        </div>
    );
}

export default DownloadCurriculum;

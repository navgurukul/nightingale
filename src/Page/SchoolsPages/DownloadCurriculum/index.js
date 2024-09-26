import React from 'react';
import "./style.css";
import { saveAs } from 'file-saver';

function DownloadCurriculum({ DownloadData }) {
    const onButtonClick = (pdfFile) => {
        
        const pdfUrl = pdfFile;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculam.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    

    return (
        <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer ">
            
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


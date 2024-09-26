import React from 'react';
import "./style.css";
import { saveAs } from 'file-saver';

function DownloadCurriculum({ DownloadData }) {
    const onButtonClick = (pdfFile) => {
        console.log("Attempting to download:", pdfFile);
    
        fetch(pdfFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.blob();
        })
        .then(blob => {
            saveAs(blob, "Curriculum.pdf");  // Automatically triggers the download using file-saver
            console.log("Download complete", blob);
        })
        .catch(error => {
            console.error('There was an error with the fetch operation:', error);
        });
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


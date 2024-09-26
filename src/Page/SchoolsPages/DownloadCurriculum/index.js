import React from 'react';
import "./style.css";

function DownloadCurriculum({ DownloadData }) {
    const onButtonClick = (pdfFile) => {
        console.log("Attempting to download:", pdfFile);
    
        fetch(pdfFile, {
            headers: {
                'Content-Type': 'application/pdf',  // Set the expected content type
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const alink = document.createElement("a");
            alink.href = url;
            alink.download = "Curriculum.pdf";
            alink.click();
            window.URL.revokeObjectURL(url);
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


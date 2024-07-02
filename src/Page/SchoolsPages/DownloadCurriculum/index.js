import React from 'react';
import "./style.css";
function DownloadCurriculum({ DownloadData }) {
    const onButtonClick = (pdfFile) => {
        let alink = document.createElement("a");
        alink.href = pdfFile;
        alink.download = "Curriculum.pdf";
        alink.click();
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

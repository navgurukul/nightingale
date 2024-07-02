import "./style.css"
function DownloadCurriculum() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "https://drive.google.com/uc?export=download&id=1ODCSwz5Zfp5yuzksvjfI4xVj-VEZnrpT";
        link.download = "Placement_Brief_Navgurukul.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
                <button
                    type="button"
                    className="btn regular-btn"
                    style={{ height: "48px", width: "208px" }}
                    onClick={handleDownload}
                >
                    Download Curriculum
                </button>
            </div>
        </>
    );
}
export default DownloadCurriculum;

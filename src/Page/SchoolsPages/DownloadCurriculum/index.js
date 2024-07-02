import "./style.css";
import CurriculumpdfFile from './assets/Curriculum.pdf';
function DownloadCurriculum() {
    const onButtonClick = () => {
        let alink = document.createElement("a");
        alink.href = CurriculumpdfFile;
        alink.download = "Curriculum.pdf";
        alink.click();
    };
    return (
        <>
            <div className="container d-flex justify-content-sm-center DownloadCurriculumContainer">
                <button
                    type="button"
                    className="btn regular-btn"
                    style={{ height: "48px", width: "208px" }}
                    onClick={onButtonClick}
                >
                    Download Curriculum
                </button>
            </div>
        </>
    );
}
export default DownloadCurriculum;

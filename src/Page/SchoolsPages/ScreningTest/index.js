import "./style.css"
function ScreeningTestPage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12" style={{ margin: "auto",marginBottom:"40px"}}>
                        <div className="next-step mt-2 mt-sm-3 d-flex flex-column align-items-center">
                            <h4 className="mb-3">Want to Enroll and Start your Career?</h4>
                            <div className="input d-flex flex-column justify-content-center align-items-center  text-left w-100  ">
                                <button
                                    className="btn btn-primary text-white align-self-center w-100 my-1 regular-btn"
                                >
                                    Take Screening Test
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ScreeningTestPage;
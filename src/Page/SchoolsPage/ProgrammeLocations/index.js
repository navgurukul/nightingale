import "./style.css"
function ProgrammeLocations() {
    return (
        <>
            <div className="container">
                <div class="row align-items-center">
                    <div class="col-10 col-sm-12 col-md-12 col-lg-10 mx-auto">
                        <div class="">
                            <div class="card-body d-flex flex-column align-items-center" >
                                <h5 class="text-title title-text" >Programme Locations</h5>
                                <ul className="eligibility-list list-group " >
                                    <span className="fw-bold">Jashpur Campus</span>
                                    <span><span className="fw-bold">Address:</span> Navgurukul Jashpur Campus Livelihood College, Jashpur Nagar, Chhattisgarh 496331</span>
                                    <span><span className="fw-bold">Email: </span>jashpurcampusteam@navgurukul.org</span>
                                    <img
                                        src={require("./assets/instagram.png").default}
                                        className="instagram-icon"
                                    ></img>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProgrammeLocations;
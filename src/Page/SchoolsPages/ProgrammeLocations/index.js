import "./style.css";
function ProgrammeLocation() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 boder-box">
                        <h5 className="ProgrammeTitle text-center">Programme Locations</h5>
                        <div>
                            <p className="place-name">Jashpur Campus</p>
                            <p className="address"> <span className="address-subtitle">Address: </span>Navgurukul Jashpur Campus Livelihood College, Jashpur Nagar, Chhattisgarh 496331</p>
                            <p className="address"> <span className="address-subtitle">Email: </span>jashpurcampusteam@navgurukul.org</p>
                            <img src={require("../assets/instagram.png").default}
                                className="instagram-img"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProgrammeLocation;

import insta from "./assets/insta.png"

const Programmelocation = () => {
    return (
        <>
            <section className="container align-items-center d-flex flex-column justify-content-center w-100 mb-3">
                <h5 className="section-head media-font body1 w-100 mb-5 mb-md-6 mt-5 mt-md-6">
                    Programme Location
                </h5>

                <div className="col-12 col-md-8 p-0 location-details text-start">
                    <h4 className="campus-name mb-3 ">Pune Campus</h4>
                    <p className="address-text">
                        <strong className="">Address: </strong>
                        <span className="body1 w-100">
                            Anish Jadhav Memorial Foundation Gharkul Properties,
                            Plot No. 60/1/1, Survey No 60, Pathare Wasti, Lohegaon, Pune, Maharashtra 411047
                        </span>
                    </p>
                    <p className="">
                        <strong className="email-text">Email: </strong>
                        <a href="mailto:pune-team@navgurukul.org" style={{ color: "black" }}>
                            pune-team@navgurukul.org
                        </a>
                    </p>

                    <div className="social-icon">
                        <a href="https://www.instagram.com/ng_pune/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" className="icon-img" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Programmelocation;
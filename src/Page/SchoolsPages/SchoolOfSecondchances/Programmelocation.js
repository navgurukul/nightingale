import insta from "./assets/insta.png"

const Programmelocation = () => {
    return (
        <>
            <div className="container programDetails">
                <h3 className="text-center mb-4 headingcolore" style={{ marginTop: "80px" }}>
                    Programme <span className="BackColor" > Location</span>
                </h3>
                <div className="row custom-row">
                    <div className="col">
                        <div className=" col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                            <h4 className="campus-name mb-3 ">Pune Campus</h4>
                            <p className="body1 w-100">
                                <strong>Address: </strong>
                                <span className="body1 w-100">
                                    Anish Jadhav Memorial Foundation Gharkul Properties,
                                    Plot No. 60/1/1, Survey No 60, Pathare Wasti, Lohegaon, Pune, Maharashtra 411047
                                </span>
                            </p>

                            <p className="body1 w-100 ">
                                <strong>Email: </strong>
                                <a href="mailto:pune-team@navgurukul.org" className="headingcolore" style={{ textDecoration: "none" }}>
                                    pune-team@navgurukul.org
                                </a>
                            </p>

                            <div className="social-icon">
                                <a href="https://www.instagram.com/ng_pune/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" target="_blank" rel="noopener noreferrer">
                                    <img src={insta} alt="Instagram" className="icon-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Programmelocation;
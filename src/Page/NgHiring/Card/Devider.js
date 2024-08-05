
import "./styles.css";
const Devider = () => {
    return (

        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row" >
                            <h3 className="section-head body1 w-100  d-flex justify-content-center text-center">Our recruiters</h3>

                        </div>
                        <div className="row section-para body1 w-100 p-3  mt-5 d-flex justify-content-center text-center" >
                            Logos of all the companies from NG deck
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row" >
                            <h3 className="section-head body1 w-100  d-flex justify-content-center text-center">Contact us</h3>
                        </div>
                        <div className="row section-para body1 w-100 p-3  mt-5 d-flex justify-content-center text-center" >
                            Gurgaon Address
                            Phone no.: XCXXXXXXX99
                            Let’s talk at tnp@navgurukul.org
                        </div>
                        <div className="row section-para body1 w-100 p-3  mt-1 d-flex justify-content-center text-center" >
                            <div className='row justify-content-center p-1' >
                                <button
                                    type="button"
                                    class="btn fw-bold  regular-btn align-self-center px-4 p-2"
                                    style={{ width: "360px" }}
                                >
                                    Book an appointment
                                </button>
                            </div>
                            <div className='row justify-content-center p-1' >
                                <button
                                    type="button"
                                    class="btn fw-bold  regular-btn align-self-center px-4 p-2"
                                    style={{ width: "360px" }}
                                >
                                    Hire from Us
                                </button>
                            </div>
                            <div className='row justify-content-center p-1' >
                                <button
                                    type="button"
                                    class="btn fw-bold  regular-btn align-self-center px-4 p-2"
                                    style={{ width: "360px" }}
                                >
                                    Become knowledge partner
                                </button>
                            </div>

                            <div className='row justify-content-center p-1' >
                                <button
                                    type="button"
                                    class="btn fw-bold  regular-btn align-self-center px-4 "
                                    style={{ width: "360px" }}
                                >
                                    Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Devider;
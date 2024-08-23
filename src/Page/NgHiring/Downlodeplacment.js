

import myImage from './assets/image.png';

const Downlodeplacment = ({handleOpenForm}) => {
    return (
        <section className="d-flex flex-column align-items-center our-initiatives">
            <div className="container">
                <div className="row gy-4 ">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-1 mb-lg-0">
                        <div className="p-2 ">
                            <img src={myImage} className="women-image p-1" alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="p-2 ">
                            <p className="section-para body1 w-100 p-1">
                                Join forces with NavGurukul to unlock a reservoir of untapped potential. Our rigorously trained tech graduates possess
                                <span className="link">skills, talent, and adaptability;</span> they bring unique perspectives that
                                <span className="link">enrich your workforce and foster innovation.</span> With our partnership, you're not just filling a role but embracing diversity and driving meaningful change for a
                                <span className="link">future where everyone has a seat at the table regardless of their background</span>
                            </p>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn mb-5 fw-bold py-2 regular-btn align-self-center px-4"
                                    style={{ width: "360px" }}
                                    onClick={() => handleOpenForm('Download Placement Brief')}
                                >
                                    Download Placement Brief
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Downlodeplacment;
import "./style.css";
function AlumnusPage({ AnumnusPageData }) {
    const openLinkedInProfile = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank');
    };
    return (
        <div className="d-flex justify-content-center mt-4 alumnus-container">
            <section className="partners-data w-100">
                <div className="container-fluid">
                    <div className="all-partners w-100 d-flex flex-column">
                        <div className="row w-100 justify-content-center">
                            {AnumnusPageData.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                                    <div className="h-100" style={{ width: "82%" }}>
                                        <p className="my-2">{item.bioData}</p>
                                        <div class="d-flex justify-content-start mt-4">
                                            <div>
                                                <img src={item.img} className="alumnus-img" />
                                            </div>
                                            <div className="ml-3" >
                                                <h5 className="fw-bold mb-2">{item.name}</h5>
                                                <svg
                                                    onClick={() => openLinkedInProfile(item.linkdin)}
                                                    className="social-icon-in"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14.4px"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0)">
                                                        <path
                                                            d="M4.0233 14.0016H1.03788V4.65477H4.0233V14.0016ZM2.52898 3.37977C1.57434 3.37977 0.800018 2.61102 0.800018 1.68289C0.800018 1.23708 0.982177 0.809525 1.30642 0.494288C1.63066 0.179051 2.07043 0.00195312 2.52898 0.00195312C2.98753 0.00195312 3.4273 0.179051 3.75154 0.494288C4.07579 0.809525 4.25795 1.23708 4.25795 1.68289C4.25795 2.61102 3.4833 3.37977 2.52898 3.37977ZM15.1968 14.0016H12.2178V9.45164C12.2178 8.36726 12.1953 6.97664 10.6656 6.97664C9.11345 6.97664 8.87559 8.15477 8.87559 9.37352V14.0016H5.89338V4.65477H8.75666V5.92977H8.79845C9.19702 5.19539 10.1706 4.42039 11.6232 4.42039C14.6446 4.42039 15.2 6.35477 15.2 8.86727V14.0016H15.1968Z"
                                                            fill="#E16749"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect
                                                                width="14.4"
                                                                height="16"
                                                                fill="white"
                                                                transform="translate(0.800018)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default AlumnusPage;

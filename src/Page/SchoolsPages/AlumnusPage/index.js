import "./style.css";
function AlumnusPage({ AnumnusPageData }) {
    const openLinkedInProfile = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank');
    };
    return (
        <div className="d-flex justify-content-center alumnus-container">
            <section className="partners-data w-100">
                <div className="container-fluid">
                    <div className="all-partners w-100 d-flex flex-column">
                        <div className="row w-100 justify-content-center">
                            {AnumnusPageData.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                                    <div className="h-100" style={{ width: "82%" }}>
                                        <p className="my-2 body1" style={{ lineHeight: "30.0px" }}>{item.bioData}</p>
                                        <div class="d-flex justify-content-start ml-3 mt-4">
                                            <div>
                                                <img src={item.img} className="alumnus-img" />
                                            </div>
                                            <div className="ml-3">
                                                <h5 className="Subtitle1">{item.name}</h5>
                                                <svg
                                                    onClick={() => openLinkedInProfile(item.linkdin)}
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width="31"
                                                        height="31"
                                                        rx="15.5"
                                                        stroke="#F05F40"
                                                    />
                                                    <g clip-path="url(#clip0_432_1634)">
                                                        <path
                                                            d="M12.0233 22.0016H9.03784V12.6548H12.0233V22.0016ZM10.529 11.3798C9.57431 11.3798 8.79999 10.611 8.79999 9.68289C8.79999 9.23708 8.98215 8.80953 9.30639 8.49429C9.63063 8.17905 10.0704 8.00195 10.529 8.00195C10.9875 8.00195 11.4273 8.17905 11.7515 8.49429C12.0758 8.80953 12.2579 9.23708 12.2579 9.68289C12.2579 10.611 11.4833 11.3798 10.529 11.3798ZM23.1968 22.0016H20.2178V17.4516C20.2178 16.3673 20.1953 14.9766 18.6656 14.9766C17.1134 14.9766 16.8756 16.1548 16.8756 17.3735V22.0016H13.8933V12.6548H16.7566V13.9298H16.7984C17.197 13.1954 18.1706 12.4204 19.6231 12.4204C22.6446 12.4204 23.2 14.3548 23.2 16.8673V22.0016H23.1968Z"
                                                            fill="#E16749"
                                                            className="socialmedia-icon"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_432_1634">
                                                            <rect
                                                                width="14.4"
                                                                height="16"
                                                                fill="white"
                                                                transform="translate(8.79999 8)"
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

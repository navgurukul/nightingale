import "./style.css"
function EligibilityDetail({ title, points }) {
    return (
        <>
            <div className="container programDetails">
                <h3 className="text-center mb-4 ">
                    Who this <span className="BackColor" >Programme</span> is for
                </h3>
                <div className="row custom-row">
                    <div className="col">
                        <h3 className="text-center" >
                            <span className="BackColor">{title}</span>
                        </h3>
                        <div className=" col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                            <ul className="ml-3">
                                {points.map((item, index) => (
                                    <li key={index} className="mb-1">
                                        <span className="">{item.point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EligibilityDetail;
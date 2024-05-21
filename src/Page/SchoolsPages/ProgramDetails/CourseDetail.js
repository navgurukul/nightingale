import "./style.css";
function CourseDetail({ data, information }) {
    return (
        <> 
        <div className="container courseDetail">
            <h3 className="text-center" style={{ marginBottom: "32px"}}>
                 What You  <span className="BackColor">Will Learn</span> 
            </h3>
            <div className="row" >
                <div className="col">
                    <div className=" col-md-12 col-lg-9 col-12" style={{ margin: "auto" }}>
                        <p className="mb-3">
                            <p className="">{information}</p>
                        </p>
                        <ol className="ml-4">
                            {data.map((item, index) => (
                                <li key={index} className="mb-1 points ">
                                    <span className="">
                                        <span className="fw-bold ">{item.subtitle} : </span>{" "}
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ol>
                        <span className="mb-4 points">
                            <span className="">
                                <span className="fw-bold md-3">Co - curricular Activities : </span>{" "}
                                Apart from core subject learning student get to participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CourseDetail;



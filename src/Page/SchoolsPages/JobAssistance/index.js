import "./style.css";
function JobAssistance({ JobAssistance }) {
    return (
        <div className="job-assistance-container container-fluid">
            <div className="row card-content">
                <div className="col-12 col-lg-5 card-container" style={{ padding: "30px",margin:"auto" }}>
                    <h3 className="text-center mb-2">
                        100% Job <span className="BackColor">Assistance</span>
                    </h3>
                    {JobAssistance.map((item, index) => (
                        <section key={index} className="our-campus">
                            <p className="li-points" style={{fontSize:"18px"}}>
                                {item.JobAssistanceContent}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default JobAssistance;

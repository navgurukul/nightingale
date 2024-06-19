import { data } from "./data";
import "./style.css";
function OurCampuses() {
    return (
        <>
            <div className="container campus-main-page">
            <h3 className="text-center media-font">Our Campuses</h3>
                <div className="row g-0" style={{marginTop:"40px"}}>
                    {data.map((item) => (
                        <div class="col-sm-3 mb-3 mb-sm-0" style={{marginTop:"32px" }}>
                            <div className="campus-title-design contant-box">
                                <img className="campus-img" src={item.img}></img>
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="mb-5 text-center campus-name">
                                        {item.place}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default OurCampuses;
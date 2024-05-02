// function CampusLocation() {
//     return (
//         <>
//             <div className="container">
//                 <div class="row">
//                     <div class="col-sm-6">
//                         <div class="card">
//                             <div class="card-body">
//                                 <h5 class="card-title">Jashpur Campus</h5>
//                                 <p class="card-text"><span style={{ fontWeight: "bold" }}>Address: </span>Navgurukul Jashpur Campus Livelihood College, Jashpur Nagar, Chhattisgarh 496331</p>
//                                 <p className="card-text"><span style={{ fontWeight: "bold" }}>Email: </span>jashpurcampusteam@navgurukul.org</p>
//                                 <img
//                                     src={require("./assets/instagram.png").default}
//                                     alt="Background Image"
//                                 ></img>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-sm-6">
//                         <div class="card">
//                             <div class="card-body">
//                                 <h5 class="card-title">Dantewada Campus</h5>
//                                 <p class="card-text"><span style={{ fontWeight: "bold" }}>Address:</span>YUVA BPO Call Center, Jawanga Education City, Geedam, Chhattisgarh 494441</p>
//                                 <p><span style={{ fontWeight: "bold" }}>Email:</span> navgurukul_dantewada@navgurukul.org</p>
//                                 <img
//                                     src={require("./assets/instagram.png").default}
//                                     alt="Background Image"
//                                 ></img>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-sm-6">
//                         <div class="card">
//                             <div class="card-body">
//                                 <h5 class="card-title">Pune Campus</h5>
//                                 <p class="card-text"><span style={{ fontWeight: "bold" }}>Address:</span> Anish Jadhav Memorial Foundation Gharkul Properties, Plot No. 60/1/1, Survey No 60, Pathare Wasti, Lohegaon, Pune, Maharashtra 411047</p>
//                                 <p><spna style={{ fontWeight: "bold" }}>Email:</spna> pune-team@navgurukul.org</p>
//                                 <img
//                                     src={require("./assets/instagram.png").default}
//                                     alt="Background Image"
//                                 ></img>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-sm-6">
//                         <div class="card">
//                             <div class="card-body">
//                                 <h5 class="card-title">Dharmshala Campus</h5>
//                                 <p class="card-text"><span style={{ fontWeight: "bold" }}>Address:</span> Navgurukul Dharmshala Campus. Ward number 202, Sukkhad, Dharmshala, Himachal Pradesh. 176057</p>
//                                 <p><span style={{ fontWeight: "bold" }}>Email:</span> dharamshala_campus@navgurukul.org</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-sm-6">
//                         <div class="card">
//                             <div class="card-body">
//                                 <h5 class="card-title">Sarjapura Campus</h5>
//                                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default CampusLocation;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import "../../Global.css";
import { useHistory } from "react-router-dom";

function CampusLocations() {
    const [data, setData] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios({
            url: "https://navgurukul.github.io/tarabai-shinde/data/campuses.json",
        })
            .then((res) => {
                setData(
                    Object.keys(res.data).reduce((prev, next) => {
                        return { ...prev, [res.data[next].Name]: res.data[next] };
                    }, {})
                );
            });
    }, []);



    if (data === null) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="container Programme Locations"  style={{ width: "100%", border: "1px solid red" }} >
            <h5 className="title-text">Programme Locations</h5>
            <div class="row" >
                {Object.keys(data).map((campusName) => {
                    const campus = data[campusName];
                    if (campus.Name && campus.Address) {
                        return (
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body" className="location-text">
                                        <h5 class="card-title">{campus.Name}</h5>
                                        <p class="card-text"><span style={{ fontWeight: "bold" }}>Address: </span>{campus.Address}</p>
                                        <p className="card-text"><span style={{ fontWeight: "bold" }}>Email: </span>{campus.Contact}</p>
                                        <img
                                            src={require("./assets/instagram.png").default}
                                            alt="Background Image"
                                        ></img>
                                    </div>
                                </div>

                            </div>
                        );
                    }
                })}
            </div>
        </div>

    );
}
export default CampusLocations;

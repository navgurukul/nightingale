// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// function OurCampusLocation() {
//     const [data, setData] = useState(null);
//     const history = useHistory();

//     useEffect(() => {
//         axios({
//             url: "https://navgurukul.github.io/tarabai-shinde/data/campuses.json",
//         })
//             .then((res) => {
//                 setData(
//                     Object.keys(res.data).reduce((prev, next) => {
//                         return { ...prev, [res.data[next].Name]: res.data[next] };
//                     }, {})
//                 );
//             });
//     }, []);
//     if (data === null) {
//         return (
//             <div className="container">
//                 <h1>Loading...</h1>
//             </div>
//         );
//     }
//     return (
//         <div className="container campus-location-container">
//             <h5 className="text-center mian-heading">Programme Locations</h5>
//             <div className="row">
//                 {Object.keys(data).map((campusName, index) => {
//                     const campus = data[campusName];
//                     if (campus.Name && campus.Address) {
//                         return (
//                             <div key={campusName} className="col-lg-6 col-sm-12 col-md-12 mb-4 location-data-card">
//                                 <div className="container-information">
//                                     <h5 className="ProgramTitle">{campus.Name}</h5>
//                                     <p className="programContent"><span className="ProgramAddressTitle">Address : </span>{campus.Address}</p>
//                                     <p className="programContent"> <span className="ProgramAddressTitle">Email : </span>{campus.Contact}</p>
//                                     <img
//                                         src={require("../assets/instagram.png").default}
//                                         alt=""
//                                         className="instagram-img"
//                                     />
//                                 </div>
//                             </div>
//                         );
//                     } else {
//                         return null;
//                     }
//                 })}
//             </div>
//         </div>

//     );
// }

// export default OurCampusLocation;




// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./style.css";
// // import { useHistory } from "react-router-dom";
// // function OurCampusLocation() {
// //     const [data, setData] = useState(null);
// //     const history = useHistory();

// //     useEffect(() => {
// //         axios({
// //             url: "https://navgurukul.github.io/tarabai-shinde/data/campuses.json",
// //         })
// //             .then((res) => {
// //                 setData(
// //                     Object.keys(res.data).reduce((prev, next) => {
// //                         return { ...prev, [res.data[next].Name]: res.data[next] };
// //                     }, {})
// //                 );
// //             });
// //     }, []);
// //     if (data === null) {
// //         return (
// //             <div className="container">
// //                 <h1>Loading...</h1>
// //             </div>
// //         );
// //     }

// //     return (
// //         <>
// //             <section className=" align-items-center">
// //                 <h3 className="text-center" style={{ marginBottom: "16px" }}>
// //                     <span className="BackColor">Programme Locations</span>
// //                 </h3>
// //                 <div className="container-fluid" style={{ width: "75%" }}>
// //                     <div className="row">
// //                         {Object.keys(data).map((campusName) => {
// //                             const campus = data[campusName];
// //                             if (campus.Name && campus.Address) {
// //                                 return (

// //                                     <div className="col-md-6 mar-3 col-12 campus-card mb-1 md-3 bg-white  px-4 position-relative" >
// //                                         <div >
// //                                             <div className="campus-title-design ">
// //                                                 <h5 className="card-title cmapus-fontfamily" style={{fontSize:"24px"}}>{campus.Name}</h5>
// //                                                 {campus.Name === "Jashpur Campus " &&
// //                                                     <span className="chip-status mb-2">
// //                                                         Newly Opened</span>
// //                                                 }
// //                                             </div>
// //                                             <span className="li-points">
// //                                                 <span className="fw-bold ">Address : </span>{campus.Address}
// //                                             </span>
// //                                             <div className="mt-3">
// //                                             </div>
// //                                             <span className="li-points">
// //                                                 <span className="fw-bold ">Email : </span>{campus.Contact}
// //                                             </span>
// //                                         </div>
// //                                         <div className="mt-3">
// //                                         </div>
// //                                         <img
// //                                             src={require("../assets/instagram.png").default}
// //                                             alt=""
// //                                             style={{ width: "32px" }}
// //                                         />
// //                                     </div>
// //                                 );
// //                             }

// //                         })
// //                         }

// //                     </div>
// //                 </div>
// //             </section>
// //         </>
// //     );
// // }

// // export default OurCampusLocation;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import "../../Global.css";
import { useHistory } from "react-router-dom";

function OurCampusLocation() {
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
        <>
            <div className="partners-data w-100 mb-0  md-5 d-flex align-items-center flex-column">
                <h3 className="mb-3 section-head">Programme Locations</h3>
                <div className="all-partners w-75 d-flex flex-column">
                    <div className="all-partners-row d-flex justify-content-around w-100 my-1">
                        <div class="container-fluid overflow-hidden">
                            <div class="row">
                                {Object.keys(data).map((campusName) => {
                                    const campus = data[campusName];
                                    if (campus.Name && campus.Address) {
                                        return (

                                            <div class="col-sm-12 col-lg-6 col-md-12" style={{ marginBottom: "14px"}}>
                                                <div class="p-3">
                                                    <div >
                                                        <div className="campus-title-design ">
                                                            <h5 className="card-title cmapus-fontfamily" style={{fontSize:"20px"}}>{campus.Name}</h5>
                                                            {campus.Name === "Jashpur Campus " &&
                                                                <span className="chip-status mb-2">
                                                                    Newly Opened</span>
                                                            }
                                                        </div>
                                                        <span className="li-points">
                                                            <span className="fw-bold ">Address : </span>{" "}
                                                            {campus.Address}
                                                        </span>
                                                        <div className="mt-3"></div>
                                                        <span className="li-points">
                                                            <span className="fw-bold ">Email : </span>{" "}
                                                            {campus.Contact}
                                                        </span>
                                                    </div>

                                                    <div className="mt-3"></div>
                                                    <img
                                                        src={require("../assets/instagram.png").default}
                                                        alt=""
                                                        style={{ width: "32px" }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OurCampusLocation;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function CampusLocation() {
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
            <div className="container campus-location-container">
                <h5 className="text-center Programme-Locations">Programme Locations</h5>
                <div className="row">
                    {Object.keys(data).map((campusName) => {
                        const campus = data[campusName];
                        if (campus.Name && campus.Address) {
                            return (
                                <div class="col-sm-6">
                                    <div className="card">
                                        <div >
                                            <div className="campus-title-design ">
                                                <h5 className="cmapus-fontfamily">{campus.Name}</h5>
                                                {campus.Name === "Jashpur Campus " &&
                                                    <span className="chip-status mb-2">
                                                        Newly Opened</span>
                                                }
                                            </div>
                                            <span className="cmapus-fontfamily">{campus.Address}</span>
                                            <p className="">{campus.Contact}</p>
                                            <img
                                                src={require("./assets/instagram.png").default}
                                                className="instagram-icon"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}
export default CampusLocation;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// // import ProgrammeLocations from "../ProgrammeLocations";
// import SchoolofBusiness from "../SchoolBusiness";
// function CampusLocation() {
//     const [data, setData] = useState(null);
//     const [filteredData, setFilteredData] = useState(null); // State to hold filtered data
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

//     // Filter campuses based on the School of Programming
//     useEffect(() => {
//         if (data !== null) {
//             const filteredCampuses = Object.values(data).filter(campus => {
//                 return campus.Programming === "School of Programming";
//             });
//             setFilteredData(filteredCampuses);
//         }
//     }, [data]);

//     if (filteredData === null) {
//         return (
//             <div className="container">
//                 <h1>Loading...</h1>
//             </div>
//         );
//     }

//     return (
//         <div className="container" style={{ marginTop: "60px" }}>
//             <h5 className="text-center Programme-Locations">Programme Locations</h5>
//             <SchoolofBusiness data={filteredData} /> 
//         </div>
//     );
// }

// export default CampusLocation;

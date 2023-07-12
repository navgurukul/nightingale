import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import campusImg1 from "./assets/campus_1.png";
import campusImg2 from "./assets/campus_2.png";
import Campus_data from "./data";
import Modal from "./components/Modal";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CampusPages() {
  const [clickedImg, setClickedImg] = useState(null);
  const [campus, setCampus] = useState("Pune Campus");
  const [data, setData] = useState(Campus_data[campus]);
  const [imgCount, setImgCount] = useState(0);
  const [isLoading, SetIsLoading] = useState(true);
  const handleClick = (item) => {
    setClickedImg(item);
  };
  useEffect(() => {
    axios({
      url: `https://navgurukul.github.io/tarabai-shinde/data/campuses.json`,
    }).then((res) => {
      setData(
        Object.keys(res.data).reduce((prev, next) => {
          return { ...prev, [res.data[next].Name]: res.data[next] };
        }, {})
      );
    });
  }, [campus]);
  useEffect(() => {
    if (
      data &&
      data[campus] &&
      Array.isArray(data[campus].Photos) &&
      imgCount === data[campus].Photos.length
    ) {
      SetIsLoading(false);
    }
  }, [imgCount]);

  return (
    <div className="campus-page d-flex flex-column justify-content-center">
      <div className="campus-description mb-3 d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-3 mt-4">Our Campuses</h3>
        <div className="container d-flex justify-content-center align-items-center mt-3">
          <div className="d-flex col-12 col-md-6 justify-content-around mb-3 pb-0 pb-md-3 scrolling-wrapper">
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Pune Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Pune Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Pune
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Bangalore Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Bangalore Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Bengaluru
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Sarjapur Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Sarjapur Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Sarjapur
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Tripura Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Tripura Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Tripura
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Dharmshala Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Dharmshala Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Dharamshala
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Delhi Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Delhi Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Delhi
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Amravati Campus");
                setImgCount(0);
                SetIsLoading(true);
              }}
              style={
                campus === "Amravati Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Amravati
            </span>      
                    
          </div>
        </div>

        {data && data[campus] && (
          <div className="container d-flex-column d-md-flex">
            <div className="col-12 col-md-5 d-flex flex-column">
              <h4 className="mb-3 campus-name">{data[campus].Name}</h4>
              <div className="mb-3 campus-manager">
                <span className="fw-bold">Campus Manager : </span>
                <img src={data[campus].Avatar} className="mx-2" />
                {data[campus]["Campus Manager"]}
              </div>
              <div className="mb-3 campus-address">
                <span className="fw-bold">Address : </span>
                {data[campus].Address}
              </div>
              <div className="mb-3 campus-capacity">
                <span className="fw-bold">Student Capacity : </span>
                {data[campus]["Student Capacity"]}
              </div>

              <div className="mb-3 campus-contact">
                <span className="fw-bold">Contact : </span>
                {data[campus].Contact}
              </div>
            </div>
            <div className="col-12 col-md-7 px-md-0">
              <iframe
                src={data[campus].Map}
                style={{ border: 0, borderRadius: "8px" }}
                className="campus_map"
                loading="none"
              />
            </div>
          </div>
        )}
      </div>
      {/* <div className="container">
        <hr className="campus-dividerLine" />
      </div> */}
      {data && data[campus] && (
        <div className="campus-gallary mt-3 pb-3 mb-3">
          <div className="container">
            <div className="row pb-3">
              {isLoading ? (
                Array.isArray(data[campus].Photos) ? (
                  data[campus].Photos.map((photo) => {
                    return (
                      <div className=" col-12 my-3 my-md-3 col-md-6">
                        <div className="campus_skeleton-img"></div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
              {Array.isArray(data[campus].Photos) ? (
                data[campus].Photos.map((photo) => {
                  return (
                    <div
                      className={`${
                        !isLoading ? "" : "d-none"
                      } col-12 my-3 my-md-3 col-md-6 image_wrapper`}
                    >
                      <img
                        effect="blur"
                        className="campus_shortImg ph-picture "
                        src={photo}
                        onClick={() => {
                          handleClick(photo);
                        }}
                        height="100%"
                        style={{ height: "100%", width: "100%" }}
                        onLoad={() => {
                          setImgCount((count) => {
                            return count + 1;
                          });
                        }}
                      />
                      <BsArrowsAngleExpand className="expand_arrow" />
                    </div>
                  );
                })
              ) : (
                <div className="col-12 my-3 my-md-3 col-md-6 image_wrapper">
                  <img
                    effect="blur"
                    className="campus_shortImg ph-picture"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    src={data[campus].Photos ? data[campus].Photos : campusImg1}
                    onClick={() => {
                      handleClick(
                        data[campus].Photos ? data[campus].Photos : campusImg1
                      );
                    }}
                  />
                  <BsArrowsAngleExpand className="expand_arrow" />
                </div>
              )}
            </div>
            {clickedImg && (
              <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusPages;

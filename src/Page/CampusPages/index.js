import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import campusImg1 from "./assets/campus_1.png";
import campusImg2 from "./assets/campus_2.png";
import Campus_data from "./data";
import Modal from "./components/Modal";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";



const getcampusNameFromUrl = () => {
  let campusName;
  if (window.location.pathname.includes("campus")) {
    campusName = window.location.pathname.split("/").pop();
  }
  return campusName;
};

function CampusPages() {
  const campusName = getcampusNameFromUrl()
  const campus= `${campusName} Campus`
  const [clickedImg, setClickedImg] = useState(null);
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
  
 const logo=  data &&
    data[campus] &&
    data[campus].logo?.map((logo) => {
      return logo
  }) 

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
    <div className="campus-page d-flex flex-column justify-content-center mb-6">
      <div className="campus-description mt-6 mb-3 d-flex flex-column justify-content-center align-items-center">
      
        {data && data[campus] && (
          <div>
          <div className="container d-flex-column d-md-flex ">
            <div className="col-12 col-md-5 mb-3 d-flex flex-column">
            <span className="mb-3 our-campus">
            <a href="/campus" className="campus-link">Our Campuses </a>/ {campus}</span>
              <h4 className="mb-3 campus-name">{data[campus].Name}</h4>
              <div className="mb-3 campus-address">
                <span className="fw-bold">Address : </span>
                {data[campus].Address}
              </div>
              <div className="mb-3 campus-capacity">
                <span className="fw-bold">Student Capacity : </span>
                {data[campus]["Student Capacity"]}
              </div>

              <div className="mb-3 campus-contact">
                <span className="fw-bold">Email : </span>
                {data[campus].Contact}
              </div>
              <div className="instgramid">
              <a href={(data[campus].Instagram_Id)} target="_blank">
                <img
                  src="/instagram.png" 
                  alt="Instagram"
                  height="32"
                  width="32"
                  />
                  </a>
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
          {data[campus].Programming!==null && 
          data[campus]["Graphic Design"]!==null ?
          <div className="container w-80 mt-6 ">
              <h5 className="left-mar-1">Available Courses</h5>
              <div className="d-flex-column d-flex mt-4">
                  <div className="col-6 mb-3 d-flex flex-column">
                    <div className=" d-flex mb-3">
                      <img src={logo[0]} className="mr-2 mb-3" height="32px " width="32px"/>
                      <h6 >Programming</h6>
                    </div>
                    <p>       
                    {data[campus].Programming}
                  </p>
                  </div>
                  
              <div className="col-6  mb-3 d-flex flex-column">
              <div className=" d-flex mb-3">
                <img src={logo[1]} className="mx-2" height="32px " width="32px"/>
                    <h6 className="mr-0">Graphic Design</h6>
                  </div>
                  <p>       
                  {data[campus]["Graphic Design"]}
                </p>

              </div>
          
              </div>
            <div className="d-flex-column d-flex">
              <div className="col-6 mb-3 d-flex flex-column">
                <div className=" d-flex mb-3">
                  <img src={logo[2]} className="mr-2" height="32px " width="32px"/>
                  <h6>Management</h6>
                </div>
                <p>       
                {data[campus].Management}
              </p>
              </div>
              
          <div className="col-6  mb-3 d-flex flex-column">
          <div className=" d-flex mb-3">
            <img src={logo[3]} className="mr-2" height="32px " width="32px"/>
                <h6>Finance</h6>
              </div>
              <p>       
              {data[campus].Finance}
            </p>

          </div>
      
      </div>
      <div className="d-flex-column d-flex">
              <div className="col-6 mb-3 d-flex flex-column">
                <div className=" d-flex mb-3">
                  <img src={logo[4]} className="mr-2" height="32px " width="32px" />
                  <h6>Education</h6>
                </div>
                <p>       
                {data[campus].Education}
              </p>
              </div>
            </div>
            </div>
            :<>
              {null}
            </>
          }
          </div>

        )}
        
        
      </div>
      {data && data[campus] && (
        <div className="campus-gallary mt-3 pb-3 mb-3">
        
          <div className="container w-70">
          <h5 className="left-mar mb-3">Explore the Campus Life</h5>
          
          {data[campus].Video &&
          <>
          <h6 className="mt-3 left-mar">Video</h6>
          <div className="row">
            <div className="col-md-6 col-12 left-mar-1">
            {Array.isArray(data[campus].Video) ? (
                  data[campus].Video.map((video)=>(
              <video controls height="303px" width="100%">
                <source src={video} type="video/mp4" />
              </video>
                  
      ))):
           <video controls height="303px" width="100%" >
                <source src={data[campus].Video} type="video/mp4" />
              </video>}
              </div>
            </div>
          </>
          }
            <h6 className="mt-4 left-mar">Pictures</h6>
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
                      } col-12 my-3 my-md-3 col-md-6 image_wrapper `}
                    >
                      <img
                        effect="blur"
                        className="campus_shortImg ph-picture left-mar-1"
                        src={photo}
                        onClick={() => {
                          handleClick(photo);
                        }}
                        style={{ height: "303px", width: "100%" }}
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
                <div className="col-12 my-3 my-md-3 col-md-6 image_wrapper left-mar">
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
          {data[campus]["Who can join? "]!==null &&
          <div className="container w-70 mt-5 mb-3 ">
            <h5 className="mb-4 left-mar">Who can join? </h5>
              <ul className="joinCampus left-mar" >
              {data[campus]["Who can join? "].split("|").map((item, index) => {
                return <li key={index} className="left-mar-1">{item}</li>;
              })}
              </ul>
          </div>
          }
          {data[campus]["Joining Process"] &&
          <div className="container w-70 mt-5 ">
          <div className="left-mar">
              <h5 className="mb-4 ">
                Joining Process
              </h5>
              <h6 >If Applying for Programming, Management, Finance or Education Courses</h6>
              {data[campus]["Joining Process"].split("|").slice(1).map((item) => {
                return  <p >{item}</p>
              })}
              <h6 className="mt-3 mb-3 ">Are you ready to join us?</h6>
              <button
            className="btn btn-primary text-white w-20 my-0 fs-sm-1.2 mb-3  regular-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://admissions.navgurukul.org/partnerLanding/breakthrough", "_blank");
            }}
          >
            Take Navgurukul Admission Test
          </button>
          <h6 className="mt-3 mb-3">If Applying for Graphic Design Course</h6>
          <p>{data[campus]["If Applying for Graphic Design Course"]}</p>
              <h6 className="mt-3 mb-3">Are you ready to join us?</h6>
              <button
            className="btn btn-primary text-white w-20 my-0 fs-sm-1.2 mb-3  regular-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/8hHAv5pJCv5T4FTx6", "_blank");
            }}
          >
            Take Graphic Design Admission Test
          </button>
            </div>
          </div>
          }
          </div>
      )}
    </div>
  );
}

export default CampusPages; 

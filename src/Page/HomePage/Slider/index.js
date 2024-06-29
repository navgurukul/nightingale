import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";

  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left
        ? "partners-carousal-arrow--left"
        : "partners-carousal-arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path style={{ border: "1px solid red" }} d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

function Slider() {
  const [mediaData, setMediaData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 740px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1120px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    axios({
      url: `https://navgurukul.github.io/tarabai-shinde/data/media.json`,
    }).then((res) => {
      setMediaData(res.data);
    });
  }, []);

  if (!Object.keys(mediaData).length) return <></>;

  return (
    <>
      <div className="container-fluid" style={{ padding: "40px", background: "#F7F7F7" }}>
        <h3 className="text-center media-font ">
          In the Media
        </h3>
        <div className="slider partner-slider container mar-3">
          <>
            <div className="navigation-wrapper ">
              <div ref={sliderRef} className="keen-slider">
                <div className="partners-carousal-cards ">
                  {Object.keys(mediaData).map((item) => {
                    return (
                      <div>
                        <div className="keen-slider__slide number-slide d-flex align-items-start col-md-3">
                          <div className="" >
                            <img
                              className="w-100"
                              src={mediaData[item].Logo}
                              alt={mediaData[item].Name.substring(
                                0,
                                mediaData[item].Name.indexOf(" ")
                              )}
                            />
                            <div className="partition-carousal-content-name" style={{ marginTop: "16px" }}>
                              <div className="mb-3 " color="white" >
                                <p className="para body1 font">{mediaData[item].Name}</p>
                              </div>
                              <p color="white"> {mediaData[item].Content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />
                  <Arrow
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
            {loaded && instanceRef.current && (
              <div className="dots">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                ))}
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}
export default Slider;

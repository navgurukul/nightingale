import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

function Slider() {
  const [media, setMedia] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios({
      url: `https://navgurukul.github.io/tarabai-shinde/data/media.json`,
    }).then((res) => {
      setMedia(res.data);
    });
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: 3, // Show 3 slides per view
        spacing: 15, // Space between slides
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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

  if (!Object.keys(media).length) return <></>;

  return (
    <div className="media-slider slider">
      <>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {Object.keys(media).map((item, idx) => (
              <div key={idx} className="keen-slider__slide number-slide">
                <div className="card">
                  <img
                    src={media[item].Logo}
                    alt={media[item].Name}
                    className="card-img-top"
                  />
                  <div className="card-body1">
                    <p className="card-text body1 font">{media[item].Description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />
              <Arrow
                right
                onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots mb-5">
            {[...Array(Math.ceil(Object.keys(media).length / 3)).keys()].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx * 3);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            ))}
          </div>
        )}
      </>
    </div>
  );
}

export default Slider;

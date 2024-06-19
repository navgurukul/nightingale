import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css"
import { data } from "./data"
function Arrow(props) {
    const { onClick, left, disabled } = props;

    const leftIconPath = "M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6 1.41 1.41z";
    const rightIconPath = "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z";


    return (
        <>
            <svg
                style={{ border: "1px solid red" }}
                onClick={onClick}
                className={`arrow ${left ? "supporter-carousal-arrow--left" : "supporter-carousal-arrow--right"} ${disabled}`}
                xmlns="http://www.w3.org/3000/svg"
                viewBox="0 0 24 24"
            >
                <path style={{ border: "1px solid red" }} d={left ? leftIconPath : rightIconPath} />
            </svg>
        </>
    );
}
function SocialMedia() {
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
                    }, 3000);
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
    return (
        <div className="container-fluid" style={{ background: "var(--Grey-Faded, #F7F7F7)", padding: "40px"}}>
            <h3 className="text-center media-font">
                In the Media
            </h3>
            <div className="slider mar-2 container" style={{ marginTop: "40px" }}>
                <div className="navigation-wrapper"
                >
                    <div ref={sliderRef} className="keen-slider"

                    >
                        <div className="supporter-carousal-cards"

                        >
                            {data.map((item, index) => {
                                return (
                                    <div
                                        key={index}

                                        className="keen-slider__slide number-slide d-flex align-items-center col-lg-6 col-md-6 col-sm-12 card-media"
                                    >
                                        <div class="card-group">
                                            <div class="">
                                                <img src={item.mediaImg} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="media-content-card" style={{ height: "120px", marginTop: "16px" }}>{item.content}</p>
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
                                right
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
                    <div className="dots ">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button

                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SocialMedia;







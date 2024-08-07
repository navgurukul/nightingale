import React from 'react';
import "./style.css";
function BackgroundImg({ backgroundData }) {
    return (
        <>
            {backgroundData.map((data, index) => (
                <div
                    key={index}
                    className="col-12"
                    style={{
                        backgroundImage: `url(${data.urlImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '50vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-sm-10 col-md-9 col-lg-8 mx-auto mt-5 ' style={{ color: data.color}}>
                                <h2 style={{ color: data.color }}>
                                    <span>{data.title}</span>
                                </h2>
                                <div className='container-of-text'>
                                    <p className='body1' style={{ color: data.color, lineHeight: "30px" }}>{data.text}</p>
                                    <p className="Subtitle1 " style={{ whiteSpace: "pre-wrap" }}>{data.text2}</p>
                                </div>
                                {data.buttonText && (
                                    <a href="https://admissions.navgurukul.org/" target="_blank" rel="noopener noreferrer">
                                        <button type="button"
                                            className="btn regular-btn mt-1"
                                            style={{ height: "48px", width: "189px" }}
                                        >{data.buttonText}</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}
export default BackgroundImg;

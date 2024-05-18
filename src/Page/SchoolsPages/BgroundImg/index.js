import React from 'react';

function BackgroundImg({ backgroundData }) {

    return (

        <>
            {backgroundData.map((data, index) => (
                <div
                    key={index}
                    className="col-sm-12 col-lg-12 col-md-12"
                    style={{
                        backgroundImage: `url(${data.urlImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '50vh',
                        display: 'flex',
                        justifyContent: 'top',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-6 col-md-10 col-lg-9 col-xs-12' style={{ margin: "auto", marginTop: "80px", color: data.color }}>
                                <h2 style={{ marginBottom: "16px", color: data.color }}>
                                    <span className="BackColor" style={{ color: data.color }}>{data.title}</span>
                                </h2>
                                <span className="li-points">
                                    {data.text.split(',').map((item, index) => (
                                        <span style={{ fontSize: "18px" }} key={index}>{item}<br /></span>
                                    ))}
                                </span>
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


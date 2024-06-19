import React, { useState } from 'react';
import { data } from './data';
import './style.css';

function AlumniStories() {
    const [currentVideoId, setCurrentVideoId] = useState(null);
    const handlePlayButtonClick = (id) => {
        setCurrentVideoId(id);
    };

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
                {data.map((item) => (
                    <div key={item.id} className="col-md-4 mb-3 mb-sm-0">
                        <div className="bg-image">
                            {currentVideoId !== item.id ? (
                                <div onClick={() => handlePlayButtonClick(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M24 4C12.96 4 3.99997 12.96 3.99997 24C3.99997 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM20 33V15L32 24L20 33Z" fill="white" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="video-container">
                                    <iframe
                                        className="bg-video"
                                        src={item.video}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded Video"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                        <p className="card-text mb-3 content-text" style={{ marginTop: "16px" }}>
                            {item.name}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlumniStories;





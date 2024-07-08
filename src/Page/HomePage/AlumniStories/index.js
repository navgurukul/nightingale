import React, { useState } from 'react';
import { data } from './data'; 
import './style.css';
import playBtn from '../assets/playicon.png';

function AlumniStories() {
    const [currentVideoId, setCurrentVideoId] = useState(null);

    const handlePlayButtonClick = (id) => {
        setCurrentVideoId(id);
    };

    return (
        <div className="container mb-4">
            <div className="row  g-0">
                {data.map((item) => (
                    <div key={item.id} className="col-12 col-md-6 col-lg-4  mb-4">
                        <div className="bg-image-container">
                            {currentVideoId !== item.id ? (
                                <div className="bg-image" onClick={() => handlePlayButtonClick(item.id)}>
                                    <img src={playBtn} alt="Play Icon" className="sm-play-button" />
                                </div>
                            ) : (
                                <div className="video-container">
                                    <iframe
                                        src={item.video + "?autoplay=1"}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={item.name}
                                    ></iframe>
                                </div>
                            )}
                        </div>
                        <p className="body1 spacing">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlumniStories;






// import React, { useState } from 'react';
// import { data } from './data';
// import './style.css';
// import playBtn from '../assets/playicon.png'; 

// function AlumniStories() {
//     const [currentVideoId, setCurrentVideoId] = useState(null);
//     const handlePlayButtonClick = (id) => {
//         setCurrentVideoId(id);
//     };

//     return (
//         <div className="container mb-4" >
//             <div className="row mt-3">
//                 {data.map((item) => (
//                     <div key={item.id} className="col-md-4 mb-3 mb-sm-0">
//                         <div className="bg-image">
//                             {currentVideoId !== item.id ? (
//                                 <div onClick={() => handlePlayButtonClick(item.id)}>
//                                    <img src={playBtn} alt="Play Icon" className="sm-play-button" />
//                                 </div>
//                             ) : (
//                                 <div className="video-container">
//                                     <iframe
//                                         className="bg-video"
//                                         src={item.video + "?autoplay=1"}
//                                         frameBorder="0"
//                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                         allowFullScreen
//                                         title="Embedded Video"
//                                     ></iframe>
//                                 </div>
//                             )}
//                         </div>
//                         <p className=" mb-3 font body1 content-text mt-3">
//                             {item.name}
//                         </p>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AlumniStories;

// src/AlumniStories.js
// import React, { useState } from 'react';
// import { data } from './data'; // Ensure this file contains your data with `id`, `name`, `image`, and `video` properties
// import './style.css';
// import playBtn from '../assets/playicon.png';

// function AlumniStories() {
//     const [currentVideoId, setCurrentVideoId] = useState(null);

//     const handlePlayButtonClick = (id) => {
//         setCurrentVideoId(id);
//     };

//     return (
//         <div className="container mb-4">
//             <div className="row mt-3">
//                 {data.map((item) => (
//                     <div key={item.id} className="col-md-4 mb-3">
//                         {currentVideoId !== item.id ? (
//                             <div
//                                 className="bg-image-container"
//                                 onClick={() => handlePlayButtonClick(item.id)}
//                             >
//                                 <div
//                                     className="bg-image"
                                  
//                                 >
//                                     <img src={playBtn} alt="Play Icon" className="play-button" />
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="video-container top-marging">
//                                 <iframe
//                                     src={item.video + "?autoplay=1"}
//                                     frameBorder="0"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                     title={item.name}
//                                 ></iframe>
//                             </div>
//                         )}
//                         <p className="content-text">{item.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AlumniStories;

import React, { useState } from 'react';
import { data } from './data'; // Ensure this file contains your data with `id`, `name`, `image`, and `video` properties
import './style.css';
import playBtn from '../assets/playicon.png';

function AlumniStories() {
    const [currentVideoId, setCurrentVideoId] = useState(null);

    const handlePlayButtonClick = (id) => {
        setCurrentVideoId(id);
    };

    return (
        <div className="container mb-4">
            <div className="row mt-3">
                {data.map((item) => (
                    <div key={item.id} className="col-md-4 mb-3">
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
                        <p className="body1 ">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlumniStories;






import React from 'react';
import './timeline.css';

const Timeline = () => {
    return (
        <div className="container my-5 d-block d-lg-none">
         
            <div className="timeline1">
                <div className="timeline-item1" >
                    <div className="timeline-dot2 red-dot"></div>
                    <div className="timeline-content1"></div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3 red-dot"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Students from marginalized communities are reached through mobilization.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Students take part in a basic class 10th level admission test & culture round.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Shortlisted students undergo residential education for 18 months where they develop technical & soft skills.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Students develop their portfolio and become job-ready with the help of the in-house placement team.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Students are placed into companies in relevant roles or prepared for a specific role.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Alumni stay connected and continue their learning through various programs.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot3 red-dot"></div>
                    <div className="timeline-content1">
                        <p className='section-para body1 w-100'>Community engagement is promoted for sustainable growth.</p>
                    </div>
                </div>
                <div className="timeline-item1">
                    <div className="timeline-dot1 red-dot"></div>
                </div>
            </div>
        </div>
    );
};
export default Timeline;

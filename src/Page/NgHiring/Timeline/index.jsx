import React from 'react';
import './styles.css';

const timelineEvents = [
  "Students from marginalized communities are reached through mobilization",
  "Students take part in basic class 10th  level admission test & culture round",
  "Shortlisted students  undergo residential education for 18 months they develop technical & soft skills",
  "Students develop their portfolio and become job ready with the help of in-house placement team",
  "Students are placed into companies in relevant roles or prepared  for a specific role"
];

const Timeline = () => {
  return (
    <div className="container">
        <h3 className="heading-line mb-3 p-3">
            Timeline of growth
        </h3>
        <div className="row text-center timeline-row">
            {timelineEvents.map((event, index) => (
            <div className="col" key={index}>
                <div className="timeline-item">
                {event}
                </div>
                <div className="timeline-dot"></div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Timeline;

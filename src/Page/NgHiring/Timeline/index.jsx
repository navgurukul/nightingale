// import React from 'react';
// import './styles.css';

// const timelineEvents = [
//   "Students from marginalized communities are reached through mobilization",
//   "Students take part in basic class 10th  level admission test & culture round",
//   "Shortlisted students  undergo residential education for 18 months they develop technical & soft skills",
//   "Students develop their portfolio and become job ready with the help of in-house placement team",
//   "Students are placed into companies in relevant roles or prepared  for a specific role"
// ];

// const Timeline = () => {
//   return (
//     <section className="d-flex flex-column align-items-center our-initiatives">
//       <div className="container">
//         <h3 className="heading-line media-font text-center mb-5 my-0">
//           Timeline of Student Growth
//         </h3>
//         <div className="row d-flex align-items-center justify-content-center">
//           <div className="col-lg-5 col-md-12 col-sm-12 custom-padding-left">
//             {timelineEvents.map((event, index) => (
//               index % 2 === 0 && (

//                 <div key={index} className="mt-lg-5 mt-3 text-lg-center text-left"> 
//                   <p className="section-para body1 w-100 py-lg-4 py-2 px-lg-5 px-sm-4 px-2"> 
//                     {event}
//                   </p>
//                 </div>
//               )
//             ))}
//           </div>

//           <div className="d-none d-lg-block timeline-container">
//             <div className="timeline-line"></div>
//             {Array.from({ length: 7 }).map((_, index) => {
//               const baseSpace = 109;
//               const topPosition = index * baseSpace;

//               return (
//                 <div
//                   key={index}
//                   className="timeline-marker"
//                   style={{ top: `${topPosition}px` }}
//                 ></div>
//               );
//             })}
//           </div>

//           <div className="col-lg-5 col-md-12 col-sm-12 custom-padding-right">
//             {timelineEvents.map((event, index) => (
//               index % 2 !== 0 && (
//                 <div key={index} className="mt-lg-5 mt-3 text-lg-center text-left"> 
//                   <p className="section-para body1 w-100 py-lg-4 py-2 px-lg-5 px-sm-4 px-2"> 
//                     {event}
//                   </p>
//                 </div>
//               )
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// };
// export default Timeline;









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
    <section className="d-flex flex-column align-items-center our-initiatives">
      <div className="container">
        <h3 className="heading-line media-font text-center mb-5 my-0">
          Timeline of Student Growth
        </h3>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-5 col-md-12 col-sm-12 custom-padding-left">
            {timelineEvents.map((event, index) => (
              index % 2 === 0 && (

                <div key={index} className="mt-lg-5 mt-3 text-lg-center text-left">
                  <p className="section-para body1 w-100 py-lg-4 py-2 px-lg-5 px-sm-4 px-2">
                    {event}
                  </p>
                </div>
              )
            ))}
          </div>


          <div className="d-none d-lg-block timeline-container">
            <div className="timeline-line"></div>
            {Array.from({ length: 7 }).map((_, index) => { // Change length to 5 to match your events
              const baseSpace = 109;
              const topPosition = index * baseSpace;

              return (
                <div
                  key={index}
                  className="timeline-marker"
                  style={{
                    top: `${topPosition}px`,
                    backgroundColor: index === 0 || index === 6 ? 'red' : 'rgb(101, 101, 101)' // Set color conditionally
                  }}
                ></div>
              );
            })}
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 custom-padding-right">
            {timelineEvents.map((event, index) => (
              index % 2 !== 0 && (
                <div key={index} className="mt-lg-5 mt-3 text-lg-center text-left">
                  <p className="section-para body1 w-100 py-lg-4 py-2 px-lg-5 px-sm-4 px-5">
                    {event}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};
export default Timeline;











































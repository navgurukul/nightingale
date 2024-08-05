import React from 'react';
import "./styles.css";
import myImage from './assets/image.png';
import data from './Data';

const NgHiring = () => {
  return (
    <>
      <section className=" d-flex flex-column align-items-center our-initiatives">
        <div className="container mt-4">
          <div className="row gy-4 mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="textlink">
                <h3 className="section-head mb-4">You are our last piece in this puzzle of Diversity, Equality, and Inclusion.</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="textlink">
                <p className='section-para body1  w-100'>For more than 8 years, NavGurukul Foundation
                  for Social Welfare has been committed to providing pathways to aspiration careers to
                  students from marginalized communities.
                  Now, we want your help to bridge the gap where skills meet opportunity</p>
              </div>
              <div className='row p-2 justify-content-center' >
                <button
                  type="button"
                  class="btn fw-bold  regular-btn align-self-center px-4 p-2"
                  style={{ width: "360px" }}
                >
                  Hire from Us
                </button>
              </div>
              <div className='row p-2 justify-content-center'>
                <button
                  type="button"
                  class="btn fw-bold  regular-btn align-self-center px-4 "
                  style={{ width: "360px" }}
                >
                  Become knowledge partner
                </button>
              </div>
              <div className='row p-2 justify-content-center'>
                <button
                  type="button"
                  class="btn fw-bold  regular-btn align-self-center px-4 "
                  style={{ width: "360px" }}
                >
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className=" d-flex flex-column align-items-center our-initiatives">
        <div className="container mt-4">
          <div className="row gy-4 mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="textlink">
                <img src={myImage} className="women-image" alt="Placeholder Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="textlink">
                <p className='section-para body1 w-100'>Join forces with NavGurukul to unlock a reservoir of untapped potential. Our rigorously trained tech graduates possess
                  <span className='link'> skills, talent, and adaptability;</span>
                  they bring unique perspectives that
                  <span className='link'> enrich your workforce and foster innovation.</span>
                  With our partnership, you're not just filling a role but embracing diversity and driving meaningful change for a
                  <span className='link'> future where everyone has a seat at the table regardless of their background</span>
                </p>
                <button
                  type="button"
                  class="btn mb-5  fw-bold py-2 regular-btn align-self-center px-4 py-2"
                  style={{ width: "360px" }}
                >
                  Download Placement Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section >

      <div>
        {data.map((item, index) => (
          <div key={index} className="position-relative">
            <img className='banner-img' src={item.img} alt="Hire From Us" />
            <h2 className="hire-heading">{item.text}</h2>
            <section className="d-flex flex-column align-items-center our-initiatives">
              <div className="container">
                <div className="textlink">
                  <p className="section-para body1 w-100 p-3 mb-1">{item.para}</p>
                  <ul>
                    <div className="section-para body1 w-100 p-3">
                      <p className="section-para body1 w-100 mb-1">{item.hadding}</p>
                      <div className="container section-para body1 w-100 p-3">
                        {Object.keys(item.list)
                          .filter(key => key.startsWith('highlighttext'))
                          .map((highlightKey, idx) => {
                            const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
                            return (
                              <li key={idx} className='section-para body1 w-100 ml-3'>
                                <span className='link'>{item.list[highlightKey]}</span>
                                <span>{item.list[detailKey]}</span>
                              </li>
                            );
                          })}
                        <div className="d-flex justify-content-center w-100 mt-4">
                          <button
                            type="button"
                            className="btn fw-bold regular-btn align-self-center px-4 p-2"
                            style={{ width: "360px" }}
                          >
                            {item.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default NgHiring;






// import { userInfo } from './Data';
// import "./styles.css";
// const NgHiring = () => {
//   return (
//     <>



//       <div className='main_container'>
//         <section className=" d-flex flex-column align-items-center our-initiatives">
//           <div className="container mt-4">

//             <div className="container">
//               <div className="row">
//                 {userInfo.map((item, index) => (
//                   <div key={index} className="col col-12 col-md-6 col-lg-4 mb-4" >

//                     <div className="three_card_column"  >
//                       <img className='img' src={item.img} alt="no img" />
//                       <h2 className="section-para body1 w-100 p-2 w-50 d-flex justify-content-center fw-bold" style={{ fontWeight: 'bold' }}>{item.heading}</h2>
//                       <p className="section-para body1 w-100 p-2 w-50 d-flex justify-content-center ">{item.paragraph}</p>
                    
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section >

//       </div>
//     </>
//   )
// }
// export default NgHiring;
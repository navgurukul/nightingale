

import card1img from '../assets/imgcard3.png'
import card2img from '../assets/cardtwo.png'
import card3img from '../assets/cardthird.png'


import "./styles.css";
const NgHiring = () => {

  const userInfo = [
    {
      img: card1img,
      paragraph: "Creating more equitable employment pathways | Macquarie Group Foundation 2023 Annual Review",

    },
    {
      img: card2img,
      paragraph: "Breaking Stereotypes, One Girl At A Time, NavGurukul Is Ensuring We Have More Girls In Tech!",
    },
    {
      img: card3img,
      paragraph: "How a gurukul for coders is changing lives",

    },

  ];

  return (
    <>
      <div className='main_container'>
        <section className=" d-flex flex-column align-items-center our-initiatives">
          <div className="container mt-4">
            <div className="d-flex justify-content-center mt-3 mb-3">
              <h3 className="media-font">Testimonials</h3>
            </div>
            <div className="container">
              <div className="row">
                {userInfo.map((item, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4 mb-4" >
                    <div className="three_card_column"  >
                      <img className='img' src={item.img} alt="no img" />
                      <h2 className="section-para body1 w-100 w-50 d-flex justify-content-center fw-bold mt-2" style={{ fontWeight: 'bold' }}>{item.heading}</h2>
                      <p className="section-para body1 w-100 p-1"> {item.paragraph}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section >
      </div>
    </>
  )
}
export default NgHiring;

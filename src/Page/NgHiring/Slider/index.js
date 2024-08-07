import "./styles.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const Slider = () => {

  const userInfo = [
    {
      img: card1,
      heading: "NavGurukul Student",
      paragraph: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      img: card2,
      heading: "NavGurukul Student",
      paragraph: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      img: card3,
      heading: "HR & recruiters",
      paragraph: "Small excerpt/ Feedback",
    },
  ]
  return (

  <div className='main_container'>
    <section className=" d-flex flex-column align-items-center our-initiatives">
      <div className="container mt-4">
        <h3 className=" media-font  mb-3 ml-4">
          Testimonials
        </h3>
        <div className="container">
          <div className="row">
            {userInfo.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4" >
                <div className="three_card_column"  >
                  <img className='img' src={item.img} alt="no img" />
                  <h2 className="section-para body1 w-100 w-50 d-flex justify-content-center fw-bold m-3" style={{ fontWeight: 'bold' }}>{item.heading}</h2>
                  <p className="section-para body1 w-100  w-50 d-flex justify-content-center  text-center p-1">{item.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>

  )
}
export default Slider;

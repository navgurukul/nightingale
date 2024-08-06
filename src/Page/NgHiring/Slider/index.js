import "./styles.css";
import card1img from "../assets/card1.png"
import card2img from "../assets/card2.png"
import card3img from "../assets/card3.png"

const Slider = () => {

  const userInfo = [
    {
      img: card1img,
      heading: "NavGurukul Student",
      paragraph: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      img: card2img,
      heading: "NavGurukul Student",
      paragraph: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      img: card3img,
      heading: "HR & recruiters",
      paragraph: "Small excerpt/ Feedback",
    },
  ];

  return (

  <div className='main_container'>
    <section className=" d-flex flex-column align-items-center our-initiatives">
      <div className="container mt-4">
        <h3 className=" media-font ">
          Testimonials
        </h3>
        <div className="container">
          <div className="row">
            {userInfo.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4" >
                <div className="three_card_column"  >
                  <img className='img' src={item.img} alt="no img" />
                  <h2 className="section-para body1 w-100 w-50 d-flex justify-content-center fw-bold" style={{ fontWeight: 'bold' }}>{item.heading}</h2>
                  <p className="section-para body1 w-100  w-50 d-flex justify-content-center  text-center">{item.paragraph}</p>
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
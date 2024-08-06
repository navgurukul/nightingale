import "./styles.css";
import girls from "../assets/girls.png"
import girlsgroup from "../assets/girlsgroup.png"
import usinglaptop from "../assets/usinglaptop.png"


const Slider = () => {
  
  const userInfo = [
    {
      img: girls,
      heading: "NavGurukul Student",
      paragraph: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      img: girlsgroup,
      heading: "NavGurukul Student",
      paragraph: "Excerpt, Blogs, Portfolio, Learning experiences",
    },
    {
      img: usinglaptop,
      heading: "HR & recruiters",
      paragraph: "Small excerpt/ Feedback",
    },
  ];

  return (
  <div className='main_container'>
    <section className=" d-flex flex-column align-items-center our-initiatives">
      <div className="container mt-4">
        <h3 className=" media-font  mb-3 p-3">
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

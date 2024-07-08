import React from 'react';
import "./style.css";
import logo1 from '../assets/logo1.png'; // Sample logo 1
import logo2 from '../assets/logo2.png'; // Sample logo 2
import logo3 from '../assets/logo3.png'; // Sample logo 3
import logo4 from '../assets/logo4.png';
import { FiExternalLink } from 'react-icons/fi';

function Digitallnitiatives() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* <div className="col-md-4 ">
          <img src={logo1} alt="Logo 1" className="img-fluid"  />
          <h5>Samyarth</h5>
          <p  className='para'>Get essential services for your business directly through Women-led tech-driven cooperative.</p>
          <a href="https://samyarth.org" target="_blank" className='linkcolor' >
            Visit Website <FiExternalLink className="ml-2" />
          </a>
        </div> */}

        <div className="col-md-4 ">
          <img src={logo2} alt="Logo 2" className="img-fluid"  />
          <h5>Zuvy</h5>
          <p  className='para body1 font'>Get started on tech education with affordable degree programs</p>
          <a href="https://zuvy.org/" target="_blank" className='linkcolor'>
            Visit Website <FiExternalLink className="ml-2" />
          </a>
        </div>

        <div className="col-md-4 ">
          <img src={logo3} alt="Logo 3" className="img-fluid" />
          <h5>Meraki</h5>
          <p className='para  para1 body1 font'>Get started with programming in Python, English and Typing at the comfort of your home and for free</p>
          <a href="https://www.merakilearn.org" target="_blank" className='linkcolor'>
            Visit Website <FiExternalLink className="ml-2" />
          </a>
        </div>

         <div className="col-md-4  ">
          <img src={logo4} alt="Logo 4" className="img-fluid" />
          <h5>Code India Fellowship</h5>
          <p  className='para1 body1 font '>Nurture programming skills in the next generation of India’s youth with your expertise.</p>
          <a href="https://www.codeindiafellowship.org" target="_blank" className='linkcolor'>
            Visit Website <FiExternalLink className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Digitallnitiatives;

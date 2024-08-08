import React, { useState } from 'react';
import "./styles.css";
import myImage from './assets/image.png';
import data from './Data';
import Timeline from './Timeline';
import OurAlumni from './Ouralumni';
import Slider from './Slider';
import Ourrecruiters from './Ourrecruiters';


const NgHiring = () => {
  
  const [formType, setFormType] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    downloadEmail: '',
    purpose: ''
  });

  const handleOpenForm = (type) => {
    console.log("Opening form for type:", type);
    setFormType(type);
  };

  const handleCloseForm = () => {
    setFormType('');
    setFormData({
      fullName: '',
      email: '',
      number: '',
      downloadEmail: '',
      purpose: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      fullName: formData.fullName,
      workEmail: formData.email,
      number: formData.number,
      purpose: formType,
      downloadEmail: formType === 'Download Placement Brief' ? formData.downloadEmail : ''
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz3lL0Jmk0KPoujPJJSBnb00aMYjqSU6O0QJ_laR51rMIxeTA08WfRMUlEaPosfiS14/exec', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
        mode: "no-cors",
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      handleCloseForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form: ' + error.message);
    }
  };

  return (
    <>
      <section className="d-flex flex-column align-items-center our-initiatives">
        <div className="container mt-4">
          <div className="row gy-4 mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="p-3">
                <h3 className="fontsize mb-4">You are our last piece in this puzzle of Diversity, Equality, and Inclusion.</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="p-3">
                <p className="section-para body1 w-100">For more than 8 years, NavGurukul Foundation
                  for Social Welfare has been committed to providing pathways to aspiration careers to
                  students from marginalized communities.
                  Now, we want your help to bridge the gap where skills meet opportunity</p>
              </div>
              <div className='row p-2 justify-content-center'>
                <button
                  type="button"
                  className="btn fw-bold regular-btn align-self-center px-4"
                  style={{ width: "360px" }}
                  onClick={() => handleOpenForm('Hire from Us')}
                >
                  Hire from Us
                </button>
              </div>
              <div className='row p-2 justify-content-center'>
                <button
                  type="button"
                  className="btn fw-bold regular-btn align-self-center px-4"
                  style={{ width: "360px" }}
                  onClick={() => handleOpenForm('Become knowledge partner')}
                >
                  Become knowledge partner
                </button>
              </div>
              <div className='row p-2 justify-content-center'>
                <button
                  type="button"
                  className="btn fw-bold regular-btn align-self-center px-4"
                  style={{ width: "360px" }}
                  onClick={() => handleOpenForm('Volunteer')}
                >
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="d-flex flex-column align-items-center our-initiatives">

        <div className="container mt-4">
          <div className="row gy-4 mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <div className="p-3">
                <img src={myImage} className="women-image p-1" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="p-3">
                <p className="section-para body1 w-100 p-1">
                  Join forces with NavGurukul to unlock a reservoir of untapped potential. Our rigorously trained tech graduates possess
                  <span className="link">skills, talent, and adaptability;</span> they bring unique perspectives that
                  <span className="link">enrich your workforce and foster innovation.</span> With our partnership, you're not just filling a role but embracing diversity and driving meaningful change for a
                  <span className="link">future where everyone has a seat at the table regardless of their background</span>
                </p>
                <button
                  type="button"
                  className="btn mb-5 fw-bold py-2 regular-btn align-self-center px-4 py-2 m-3"
                  style={{ width: "360px" }}
                  onClick={() => handleOpenForm('Download Placement Brief')}
                >
                  Download Placement Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Timeline />
      <OurAlumni />
      <Slider />
      <Ourrecruiters handleOpenForm={handleOpenForm} />
      <div>
        {data.map((item, index) => (
          <div key={item.id} className="position-relative">
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
                              <li key={highlightKey} className='section-para body1 w-100 ml-3'>
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
                            onClick={() => handleOpenForm(item.text)}
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

      {formType && (
        <div role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription"
          className="modal" style={{ display: 'block' }} onClick={handleCloseForm}>
          <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()} tabIndex="0" >

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{formType}</h5>
                <button type="button" className="close" onClick={handleCloseForm}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName" >Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" >Work Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number" >Number</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {formType === 'Download Placement Brief' ? (
                    <div className="form-group">
                      <label htmlFor="downloadEmail" >Download on email</label>
                      <input
                        type="email"
                        name="downloadEmail"
                        className="form-control"
                        value={formData.downloadEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ) : (
                    <div className="form-group">
                      <label>Purpose</label>
                      <select
                        name="purpose"
                        className="form-control"
                        style={{ height: '60px' }}
                        value={formData.purpose}
                        onChange={handleChange}
                      >
                        <option value="Hire from Us">Hire from Us</option>
                        <option value="Become knowledge partner">Become knowledge partner</option>
                        <option value="Volunteer">Volunteer</option>
                      </select>
                    </div>
                  )}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>Close</button>
                    <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showToast && (
        <div class="toast align-items-center fade show success" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-content">
            <div class="content-body d-flex align-items-center">
              <div class="icon me-4">
                <i class="fi fi-rr-badge-check d-flex"></i>
              </div>
              <div className="d-flex align-items-center">
                <span className="fw-bold">Your data has been submitted successfully.</span>
                <button type="button" className="close d-flex align-items-center ms-2 ml-3" onClick={() => setShowToast(false)} aria-label="Close">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NgHiring;


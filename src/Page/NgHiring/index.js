import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import data from './Data';
import "./styles.css";
import hire from './assets/hire.png';
import Timeline from './Timeline';
import OurAlumni from './Ouralumni';
import Slider from './Slider';
import Ourrecruiters from './Ourrecruiters';

const NgHiring = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [formType, setFormType] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    purpose: ''
  });

  const handleOpenForm = (type) => {
    setFormType(type);
    if (type === 'Hire from Us') {
      setFormData((prevData) => ({
        ...prevData,
        purpose: 'Hire from Us'
      }));
    }
    if (type === "Become knowledge partner") {
      setFormData((prevData) => ({
        ...prevData,
        purpose: "Become knowledge partner"
      }))
    }
    if (type === "Volunteer") {
      setFormData((prevData) => ({
        ...prevData,
        purpose: "Volunteer"
      }))
    }
    if (type === "Download Placement Brief") {
      setFormData((prevData) => ({
        ...prevData,
        purpose: "Download Placement Brief"
      }))
    }
  };

  const handleCloseForm = () => {
    setFormType('');
    setFormData({
      fullName: '',
      email: '',
      number: '',
      purpose: ''
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData({
        ...formData,
        purpose: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) {
      formErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.length < 3) {
      formErrors.fullName = 'Full Name must be at least 3 characters long';
    } else if (/\d/.test(formData.fullName)) {
      formErrors.fullName = 'Full Name should not contain numbers';
    }
    if (!formData.email) {
      formErrors.email = 'Work Email is required';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }
    if (!formData.number) {
      formErrors.number = 'Number is required';
    } else if (!/^\d+$/.test(formData.number)) {
      formErrors.number = 'Number must contain only digits';
    } else if (formData.number.length !== 10) {
      formErrors.number = 'Number must be exactly 10 digits';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const dataToSend = {
      fullName: formData.fullName,
      workEmail: formData.email,
      number: formData.number,
      purpose: formData.purpose,
    };
    try {
      await fetch('https://script.google.com/macros/s/AKfycbw8bNmhSHg1adJmc9mqcqjvbnWg6NSyGP4uUn-JorWcWWy6cHt8h4gn-VSjiI1-WVF-sQ/exec', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
        mode: "no-cors",
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000);
      handleCloseForm();
      setTimeout(() => {
        history.push("/thankyou");
        setTimeout(() => {
          history.push("/hiring");
        }, 2000);
      }, 1500);
    } catch (error) {
      alert('Failed to submit form: ' + error.message);
    } finally {
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-12 py-3 pr-0 pr-lg-5 column-height">
              <div className="paragrapg-box">
                <h5 className="media-font mt-4 p-2 text-lg-start">
                  You are our last piece in this puzzle of Diversity, Equality, and Inclusion.
                </h5>
                <p className="section-para body1 w-100 text-lg-start pr-0 pr-lg-5" style={{ marginTop: '10px' }}>
                  For more than 8 years, NavGurukul Foundation for Social Welfare has been committed to providing pathways to aspiration careers to students from marginalized communities. Now, we want your help to bridge the gap where skills meet opportunity.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 py-3 pr-0 pr-lg-5 column-height">
              <div className='formcontainer'>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h4 className="mb-3">Connect With Our Team</h4>
                    <label htmlFor="purpose" className="textspacing fw-bold">I would like</label>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="purpose"
                        id="purposeHireFromUs"
                        value="Hire from Us"
                        checked={formData.purpose === 'Hire from Us'}
                        onChange={handleChange}
                      />
                      <label className="section-para body1" htmlFor="purposeHireFromUs">Hire from Us</label>
                    </div>

                    <div className="form-check d-inline-flex align-items-center me-3">
                      <input
                        type="radio"
                        name="purpose"
                        id="purposeBecomeKnowledgePartner"
                        value="Become knowledge partner"
                        checked={formData.purpose === 'Become knowledge partner'}
                        onChange={handleChange}
                      />
                      <label className="section-para body1 ms-2" htmlFor="purposeBecomeKnowledgePartner">Become knowledge partner</label>
                    </div>

                    <div className="form-check d-inline-flex align-items-center">
                      <input
                        type="radio"
                        name="purpose"
                        id="purposeVolunteer"
                        value="Volunteer"
                        checked={formData.purpose === 'Volunteer'}
                        onChange={handleChange}
                      />
                      <label className="section-para body1 ms-2" htmlFor="purposeVolunteer">Volunteer</label>
                    </div>

                    {errors.purpose && <div className="error_message">{errors.purpose}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder='Name'
                      className="form-control1"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <div className='error_message'>{errors.fullName}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder='Email'
                      className="form-control1"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error_message">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder='Number'
                      id="number"
                      className="form-control1"
                      value={formData.number}
                      onChange={(e) => {
                        const filteredValue = e.target.value.replace(/[^0-9]/g, '');
                        setFormData({
                          ...formData,
                          number: filteredValue
                        });
                      }}
                      maxLength="10"
                    />
                    {errors.number && <div className="error_message">{errors.number}</div>}
                  </div>

                  <div className="form-group" style={{ width: "100%" }}>
                    <button
                      type="submit"
                      className="btn regular-btn"
                      style={{ width: "100%", height: "48px", border: "none", color: "#fff" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div >
        </div >
      </div >

      <section className="d-flex flex-column align-items-center our-initiatives" >
        <div className="container">
          <h3 className="media-font px-3 mt-3 text-center">Hire from Us</h3>
          <img className="banner-img mt-4 mb-4" src={hire} alt="Hire From Us" />
          <div>
            <p className="section-para body1 w-100">
              Through harnessing the power of education, we bridge the learning gap of students from marginalized communities to emerge as skilled, resilient, and job-ready professionals, proficient in the latest technologies and soft skills. By partnering with us, your organization can enrich its workforce diversity and drive meaningful social impact, effortlessly meeting your Diversity, Equity, and Inclusion (DEI) goals.
            </p>
            <p className="section-para body1 w-100">
              By hiring from us, you are achieving:
            </p>
            <div className="section-para body1 w-100">
              <ul className="px-3">
                <li>
                  <span className="link">Handpicked Tech Talent:</span> Pre-screened candidates to save you time.
                </li>
                <li>
                  <span className="link">Zero Hiring Fees:</span> Fully funded by our generous donors.
                </li>
                <li>
                  <span className="link">High Retention Candidates:</span> Quality talent within the budget.
                </li>
                <li>
                  <span className="link">Diverse Talent Pool:</span> Our students are from different regions of India, ready to enhance your workforce diversity and business capabilities.
                </li>
                <li>
                  <span className="link">Job-Ready Talent:</span> Our students undergo rigorous training in both technical and soft skills, preparing them for the complexities of modern work environments.
                </li>
                <li>
                  <span className="link">Positive Social Impact:</span> Fulfill your corporate social responsibility goals by hiring candidates who are part of a movement to bridge India's education and employment gap.
                </li>
              </ul>
            </div>
            <div className='row mb-2'>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center align-items-center my-md-2 my-sm-2 my-xs-2">
                <button
                  type="button"
                  className="btn fw-bold regular-btn"
                  style={{ width: "360px" }}
                  onClick={() => handleOpenForm("Hire from Us")}>
                  Hire from Us
                </button>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center align-items-center my-md-2 my-sm-2 my-xs-2'>
                <button
                  type="button"
                  className="btn fw-bold regular-btn1"
                  style={{
                    width: "360px",
                    backgroundColor: "transparent",
                    border: "2px solid red",
                    color: "red",
                  }}
                  onClick={() => handleOpenForm('Download Placement Brief')}>
                  Download Placement Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        {data.map((item, index) => (
          <div key={item.id}>
            <section className="d-flex flex-column align-items-center our-initiatives">
              <div className="container">
                <h3 className="media-font text-center">{item.text}</h3>
                <img className='banner-img mt-3' src={item.img} alt="Hire From Us" />
                <p className="section-para body1 w-100 mt-3">{item.para}</p>
                <p className="section-para body1 w-100">{item.hadding}</p>
                <ul>
                  <div className="section-para body1 w-100">
                    <div className="container section-para body1 w-100">
                      {Object.keys(item.list)
                        .filter(key => key.startsWith('highlighttext'))
                        .map((highlightKey, idx) => {
                          const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
                          return (
                            <li key={highlightKey} className='section-para body1 w-100 px-3'>
                              <span className='link'>{item.list[highlightKey]}</span>
                              <span>{item.list[detailKey]}</span>
                            </li>
                          );
                        })}
                      <div className="d-flex w-100 justify-content-center">
                        <button
                          type="button"
                          className="btn fw-bold regular-btn align-self-center mt-3"
                          style={{ width: "360px" }}
                          onClick={() => handleOpenForm(item.button)}
                        >
                          {item.button}
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </section>
          </div>
        ))}
      </div>
      <Timeline />
      <OurAlumni />
      <Slider />
      <Ourrecruiters handleOpenForm={handleOpenForm} />
      {
        formType && (
          <div
            className="modal"
            style={{ display: 'block' }}
            onClick={handleCloseForm}>
            <div
              className="modal-dialog"
              style={{ maxWidth: '90%', margin: 'auto', width: '448px' ,gap:"16px",borderRadius:"8px"}}
              onClick={(e) => e.stopPropagation()}>
              <div className="modal-content p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="modal-title mb-0 mt-3 px-3">{formType}</h5>
                  <button
                    type="button"
                    className="close mt-3"
                    onClick={handleCloseForm}
                    style={{ border: 'none', background: 'none', fontSize: '1.5rem' }}>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit} className="w-100">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Name"
                        className="form-control1 mb-2"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                      />
                      {errors.fullName && <div className="error_message">{errors.fullName}</div>}
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form-control1 mb-2"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                      />
                      {errors.email && <div className="error_message">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="Number"
                        className="form-control1 mb-2"
                        value={formData.number}
                        onChange={(e) => {
                          const filteredValue = e.target.value.replace(/[^0-9]/g, '');
                          setFormData({
                            ...formData,
                            number: filteredValue
                          });
                        }}
                        maxLength="10"
                        style={{ width: '100%' }} />
                      {errors.number && <div className="error_message">{errors.number}</div>}
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn regular-btn w-100"
                        style={{ height: "48px" }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        showToast && (
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
        )
      }
    </>
  );
};
export default NgHiring;
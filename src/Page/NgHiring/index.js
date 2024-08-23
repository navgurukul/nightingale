
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./styles.css";
import Timeline from './Timeline';
import OurAlumni from './Ouralumni';
import Slider from './Slider';
import Ourrecruiters from './Ourrecruiters';
import Puzzlesecssion from './Puzzlesecssion';
import HiringImg from './HiringImg';
import Downlodeplacment from './Downlodeplacment';

const NgHiring = () => {

  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
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
      purpose: ''
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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

    if (!formData.number) { formErrors.number = 'Number is required'; }
    else if (!/^\d+$/.test(formData.number)) { formErrors.number = 'Number must contain only digits'; }
    else if (formData.number.length !== 10) { formErrors.number = 'Number must be exactly 10 digits'; }

    if (formType !== 'Download Placement Brief' && !formData.purpose) formErrors.purpose = 'Purpose is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const dataToSend = {
      fullName: formData.fullName,
      workEmail: formData.email,
      number: formData.number,
      purpose: formType,
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
        setLoading(false);
        history.push("/thankyou");

        setTimeout(() => {
          history.push("/hiring");
        }, 2000);

      }, 1500);


    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form: ' + error.message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Puzzlesecssion handleOpenForm={handleOpenForm} />
      <Downlodeplacment handleOpenForm={handleOpenForm} />
      <Timeline />
      <OurAlumni />
      <Slider />
      <Ourrecruiters handleOpenForm={handleOpenForm} />
      <HiringImg andleOpenForm={handleOpenForm} />

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
                    <label htmlFor="fullName" className='textspacing'>Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <div className='error_message'>{errors.fullName}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="textspacing">Work Email</label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error_message">{errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="number" className="textspacing">Number</label>

                    <input
                      type="text"
                      name="number"
                      id="number"
                      className="form-control"
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

                  {formType !== 'Download Placement Brief' && (
                    <div className="form-group">
                      <label>Purpose</label>
                      <select
                        name="purpose"
                        id="purpose"
                        className="form-control custom-select"
                        style={{ height: '60px', paddingRight: '40px' }}
                        value={formData.purpose}
                        onChange={handleChange}
                      >
                        <option>Select from Dropdown</option>
                        <option value="Hire from Us">Hire from Us</option>
                        <option value="Become knowledge partner">Become knowledge partner</option>
                        <option value="Volunteer">Volunteer</option>
                      </select>
                      {errors.purpose && <div className='error_message'>{errors.purpose}</div>}
                    </div>
                  )}

                  <div className="modal-footer d-flex justify-content-end align-items-center">

                    {loading && (
                      <div className="d-flex align-items-center">
                        <div className="spinner-border me-2 custom-spinner" role="status">
                          <i className="fas fa-spinner fa-spin"></i>
                        </div>
                      </div>
                    )}

                    <div className="button-container d-flex">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseForm}
                        style={{ marginRight: '10px' }}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-success ms-2">
                        Submit
                      </button>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div >
        </div >
      )}

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

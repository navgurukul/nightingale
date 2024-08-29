
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import "./styles.css";
// import myImage from './assets/image.png';
// import data from './Data';
// import Timeline from './Timeline';
// import OurAlumni from './Ouralumni';
// import Slider from './Slider';
// import Ourrecruiters from './Ourrecruiters';
// import Button from './Button';

// const NgHiring = () => {

//   const history = useHistory();

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [formType, setFormType] = useState('');
//   const [showToast, setShowToast] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     number: '',
//     purpose: ''
//   });

//   const handleOpenForm = (type) => {
//     console.log("Opening form for type:", type);
//     setFormType(type);
//   };

//   const handleCloseForm = () => {
//     setFormType('');
//     setFormData({
//       fullName: '',
//       email: '',
//       number: '',
//       purpose: ''
//     });
//     setErrors({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };


//   const validateForm = () => {
//     let formErrors = {};

//     if (!formData.fullName) {
//       formErrors.fullName = 'Full Name is required';
//     } else if (formData.fullName.length < 3) {
//       formErrors.fullName = 'Full Name must be at least 3 characters long';
//     } else if (/\d/.test(formData.fullName)) {
//       formErrors.fullName = 'Full Name should not contain numbers';
//     }

//     if (!formData.email) {
//       formErrors.email = 'Work Email is required';
//     } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
//       formErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.number) { formErrors.number = 'Number is required'; }
//     else if (!/^\d+$/.test(formData.number)) { formErrors.number = 'Number must contain only digits'; }
//     else if (formData.number.length !== 10) { formErrors.number = 'Number must be exactly 10 digits'; }

//     if (formType !== 'Download Placement Brief' && !formData.purpose) formErrors.purpose = 'Purpose is required';
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);


//     if (!validateForm()) {
//       setLoading(false);
//       return;
//     }

//     const dataToSend = {
//       fullName: formData.fullName,
//       workEmail: formData.email,
//       number: formData.number,
//       purpose: formType,
//     };

//     try {
//       await fetch('https://script.google.com/macros/s/AKfycbw8bNmhSHg1adJmc9mqcqjvbnWg6NSyGP4uUn-JorWcWWy6cHt8h4gn-VSjiI1-WVF-sQ/exec', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//         mode: "no-cors",
//       });
//       setShowToast(true);
//       setTimeout(() => setShowToast(false), 1000);
//       handleCloseForm();

//       setTimeout(() => {
//         setLoading(false);
//         history.push("/thankyou");

//         setTimeout(() => {
//           history.push("/hiring");
//         }, 2000);

//       }, 1500);


//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to submit form: ' + error.message);
//     }
//     finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section className="d-flex flex-column align-items-center our-initiatives">
//         <div className="container">
//           <div className="row gy-4">
//             <div className="col-lg-6 col-md-6 col-sm-12">
//               <div>
//                 <h3 className="media-font">
//                   You are our last piece in this puzzle of Diversity, Equality, and Inclusion.
//                 </h3>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-12">
//               <div>
//                 <p className="section-para body1 w-100">
//                   For more than 8 years, NavGurukul Foundation for Social Welfare has been committed
//                   to providing pathways to aspiration careers to students from marginalized communities.
//                   Now, we want your help to bridge the gap where skills meet opportunity.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="row mt-3">
//               <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
//                 <Button
//                   label="Hire from Us"
//                   onClick={() => handleOpenForm('Hire from Us')}
//                 />
//               </div>
//               <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
//                 <Button
//                   label="Become knowledge partner"
//                   onClick={() => handleOpenForm('Become knowledge partner')}
//                 />
//               </div>
//               <div className="col-lg-4 col-md-4 col-sm-12">
//                 <Button
//                   label="Volunteer"
//                   onClick={() => handleOpenForm('Volunteer')}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="d-flex flex-column align-items-center our-initiatives">
//         <div className="container">
//           <div className="row gy-4 ">
//             <div className="col-lg-6 col-md-6 col-sm-12 mb-1 mb-lg-0">
//               <div className="p-2 ">
//                 <img src={myImage} className="women-image p-1" alt="Image" />
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-12">
//               <div className="p-2 ">
//                 <p className="section-para body1 w-100 p-1">
//                   Join forces with NavGurukul to unlock a reservoir of untapped potential. Our rigorously trained tech graduates possess
//                   <span className="link">skills, talent, and adaptability;</span> they bring unique perspectives that
//                   <span className="link">enrich your workforce and foster innovation.</span> With our partnership, you're not just filling a role but embracing diversity and driving meaningful change for a
//                   <span className="link">future where everyone has a seat at the table regardless of their background</span>
//                 </p>
//                 <div className="d-flex justify-content-center">
//                   <button
//                     type="button"
//                     className="btn mb-5 fw-bold py-2 regular-btn align-self-center px-4"
//                     style={{ width: "360px" }}
//                     onClick={() => handleOpenForm('Download Placement Brief')}
//                   >
//                     Download Placement Brief
//                   </button>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Timeline />
//       <OurAlumni />
//       <Slider />
//       <Ourrecruiters handleOpenForm={handleOpenForm} />

//       <div>
//         {data.map((item, index) => (
//           <div key={item.id} className="position-relative">
//             <h3 className="text-center media-font mb-4">{item.text}</h3>
//             <img className='banner-img' src={item.img} alt="Hire From Us" />
//             <section className="d-flex flex-column align-items-center our-initiatives">
//               <div className="container">
//                 <div className="textlink">
//                   <p className="section-para body1 w-100 p-3 mb-1">{item.para}</p>
//                   <ul>
//                     <div className="section-para body1 w-100 p-3">
//                       <p className="section-para body1 w-100 mb-1">{item.hadding}</p>
//                       <div className="container section-para body1 w-100 p-3">
//                         {Object.keys(item.list)
//                           .filter(key => key.startsWith('highlighttext'))
//                           .map((highlightKey, idx) => {
//                             const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
//                             return (
//                               <li key={highlightKey} className='section-para body1 w-100 ml-3'>
//                                 <span className='link'>{item.list[highlightKey]}</span>
//                                 <span>{item.list[detailKey]}</span>
//                               </li>
//                             );
//                           })}
//                         <div className="d-flex justify-content-center w-100 mt-4">
//                           <button
//                             type="button"
//                             className="btn fw-bold regular-btn align-self-center px-4 p-2"
//                             style={{ width: "360px" }}
//                             onClick={() => handleOpenForm(item.text)}
//                           >
//                             {item.button}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         ))}
//       </div>

//       {formType && (
//         <div role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription"
//           className="modal" style={{ display: 'block' }} onClick={handleCloseForm}>
//           <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()} tabIndex="0" >
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{formType}</h5>
//                 <button type="button" className="close" onClick={handleCloseForm}>
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="fullName" className='textspacing'>Name</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       id="fullName"
//                       className="form-control"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                     />
//                     {errors.fullName && <div className='error_message'>{errors.fullName}</div>}
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="email" className="textspacing">Work Email</label>

//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="form-control"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                     {errors.email && <div className="error_message">{errors.email}</div>}
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="number" className="textspacing">Number</label>

//                     <input
//                       type="text"
//                       name="number"
//                       id="number"
//                       className="form-control"
//                       value={formData.number}
//                       onChange={(e) => {
//                         const filteredValue = e.target.value.replace(/[^0-9]/g, '');
//                         setFormData({
//                           ...formData,
//                           number: filteredValue
//                         });
//                       }}
//                       maxLength="10"
//                     />
//                     {errors.number && <div className="error_message">{errors.number}</div>}

//                   </div>

//                   {formType !== 'Download Placement Brief' && (
//                     <div className="form-group">
//                       <label>Purpose</label>
//                       <select
//                         name="purpose"
//                         id="purpose"
//                         className="form-control custom-select"
//                         style={{ height: '60px', paddingRight: '40px' }}
//                         value={formData.purpose}
//                         onChange={handleChange}
//                       >
//                         <option>Select from Dropdown</option>
//                         <option value="Hire from Us">Hire from Us</option>
//                         <option value="Become knowledge partner">Become knowledge partner</option>
//                         <option value="Volunteer">Volunteer</option>
//                       </select>
//                       {errors.purpose && <div className='error_message'>{errors.purpose}</div>}
//                     </div>
//                   )}

//                   <div className="modal-footer d-flex justify-content-end align-items-center">

//                     {loading && (
//                       <div className="d-flex align-items-center">
//                         <div className="spinner-border me-2 custom-spinner" role="status">
//                           <i className="fas fa-spinner fa-spin"></i>
//                         </div>
//                       </div>
//                     )}

//                     <div className="button-container d-flex">
//                       <button
//                         type="button"
//                         className="btn btn-secondary"
//                         onClick={handleCloseForm}
//                         style={{ marginRight: '10px' }}
//                       >
//                         Close
//                       </button>
//                       <button type="submit" className="btn btn-success ms-2">
//                         Submit
//                       </button>

//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div >
//         </div >
//       )}

//       {
//         showToast && (
//           <div class="toast align-items-center fade show success" role="alert" aria-live="assertive" aria-atomic="true">
//             <div class="toast-content">
//               <div class="content-body d-flex align-items-center">
//                 <div class="icon me-4">
//                   <i class="fi fi-rr-badge-check d-flex"></i>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <span className="fw-bold">Your data has been submitted successfully.</span>
//                   <button type="button" className="close d-flex align-items-center ms-2 ml-3" onClick={() => setShowToast(false)} aria-label="Close">
//                     <i className="fa fa-times"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     </>
//   );
// };

// export default NgHiring;























import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./styles.css";
import myImage from './assets/image.png';
import data from './Data';
import Timeline from './Timeline';
import OurAlumni from './Ouralumni';
import Slider from './Slider';
import Ourrecruiters from './Ourrecruiters';
import Button from './Button';

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
      <section className="d-flex flex-column align-items-center our-initiatives">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <h3 className="media-font">
                  You are our last piece in this puzzle of Diversity, Equality, and Inclusion.
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p className="section-para body1 w-100">
                  For more than 8 years, NavGurukul Foundation for Social Welfare has been committed
                  to providing pathways to aspiration careers to students from marginalized communities.
                  Now, we want your help to bridge the gap where skills meet opportunity.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-3">
              <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                <Button
                  label="Hire from Us"
                  onClick={() => handleOpenForm('Hire from Us')}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                <Button
                  label="Become knowledge partner"
                  onClick={() => handleOpenForm('Become knowledge partner')}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Button
                  label="Volunteer"
                  onClick={() => handleOpenForm('Volunteer')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex flex-column align-items-center our-initiatives">
        <div className="container">
          <div className="row gy-4 ">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-1 mb-lg-0">
              <div className="p-2 ">
                <img src={myImage} className="women-image p-1" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="p-2 ">
                <p className="section-para body1 w-100 p-1">
                  Join forces with NavGurukul to unlock a reservoir of untapped potential. Our rigorously trained tech graduates possess
                  <span className="link">skills, talent, and adaptability;</span> they bring unique perspectives that
                  <span className="link">enrich your workforce and foster innovation.</span> With our partnership, you're not just filling a role but embracing diversity and driving meaningful change for a
                  <span className="link">future where everyone has a seat at the table regardless of their background</span>
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn mb-5 fw-bold py-2 regular-btn align-self-center px-4"
                    style={{ width: "360px" }}
                    onClick={() => handleOpenForm('Download Placement Brief')}
                  >
                    Download Placement Brief
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <OurAlumni />
      <Slider />
      <Ourrecruiters handleOpenForm={handleOpenForm} />
 
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





      
{/* 
      <div>
        {data.map((item, index) => (
          <div key={item.id} className="position-relative">
            <section className="d-flex flex-column align-items-center our-initiatives" >
              <div className="container" >
                <div className="row gy-4 ">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-1 mb-lg-0">
                    <div className="p-3 ">
                      <h3 className="media-font">{item.text}</h3>
                      <p className="section-para body1 w-100 mb-1">{item.para}</p>
                      <ul>
                        <div className="section-para body1 w-100 ">
                          <p className="section-para body1 w-100 mb-1">{item.hadding}</p>
                          <div className="container section-para body1 w-100 ">
                            {Object.keys(item.list)
                              .filter(key => key.startsWith('highlighttext'))
                              .map((highlightKey, idx) => {
                                const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
                                return (
                                  <li key={highlightKey} className='section-para body1 w-100'>
                                    <span className='link'>{item.list[highlightKey]}</span>
                                    <span>{item.list[detailKey]}</span>
                                  </li>
                                );
                              })}
                            <div className="d-flex w-100 mt-4">
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
                  <div className="col-lg-6 col-md-6 col-sm-12" >
                    <div className="p-2  mt-2">

                      <img className='banner-img mt-3 pt-5' src={item.img} alt="Hire From Us" />

                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        ))}
      </div>  */}


      
      

    </>
  );
};

export default NgHiring;










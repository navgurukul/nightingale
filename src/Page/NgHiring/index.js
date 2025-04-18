
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import data from './Data';
// import "./styles.css";
// import HireFromUs from './Hireformus';
// import Timeline from './Timeline';
// import OurAlumni from './Ouralumni';
// import Ourrecruiters from './Ourrecruiters';
// import Newtime from './Newtimeline'
// import Secssionfst from './Fstsecssion/Secssionfst'

// const NgHiring = () => {
//   const history = useHistory();
//   const [errors, setErrors] = useState({});
//   const [formType, setFormType] = useState('');
//   const [showToast, setShowToast] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     number: '',
//     purpose: ''
//   });

//   const handleOpenForm = (type) => {
//     setFormType(type);
//     if (type === 'Hire from Us') {
//       setFormData((prevData) => ({
//         ...prevData,
//         purpose: 'Hire from Us'
//       }));
//     }
//     if (type === "Become knowledge partner") {
//       setFormData((prevData) => ({
//         ...prevData,
//         purpose: "Become knowledge partner"
//       }))
//     }
//     if (type === "Volunteer") {
//       setFormData((prevData) => ({
//         ...prevData,
//         purpose: "Volunteer"
//       }))
//     }
//     if (type === "Download Placement Brief") {
//       setFormData((prevData) => ({
//         ...prevData,
//         purpose: "Download Placement Brief"
//       }))
//     }
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
//     const { name, value, type } = e.target;
//     if (type === "radio") {
//       setFormData({
//         ...formData,
//         purpose: value
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
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
//     if (!formData.number) {
//       formErrors.number = 'Number is required';
//     } else if (!/^\d+$/.test(formData.number)) {
//       formErrors.number = 'Number must contain only digits';
//     } else if (formData.number.length !== 10) {
//       formErrors.number = 'Number must be exactly 10 digits';
//     }
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }
//     const dataToSend = {
//       fullName: formData.fullName,
//       workEmail: formData.email,
//       number: formData.number,
//       purpose: formData.purpose,
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
//         history.push("/thankyou");
//         setTimeout(() => {
//           history.push("/hiring");
//         }, 2000);
//       }, 1500);
//     } catch (error) {
//       alert('Failed to submit form: ' + error.message);
//     } finally {
//     }
//   };

//   return (
//     <>
//       <Secssionfst
//         handleOpenForm={handleOpenForm}
//         handleSubmit={handleSubmit}
//         formData={formData}
//         handleChange={handleChange}
//         errors={errors}
//         setFormData={setFormData}
//       />
//       <HireFromUs handleOpenForm={handleOpenForm} />

//       <div>
//         {data.map((item, index) => (
//           <div key={item.id}>
//             <section className="container mt-5">
//               <div className="row d-flex">
//                 <div className="col-lg-6 col-md-12 d-flex ">
//                   <img
//                     src={item.img}
//                     alt="No IMG"
//                     style={{ maxWidth: '100%', height: 'auto' }}

//                   />
//                 </div>

//                 <div className="col-lg-6 col-md-12">
//                   <h5 className="heddinghireformus media-font">{item.text}</h5>
//                   <p className="section-para body1 w-100 mt-3">{item.para}</p>
//                   <p className="section-para body1 w-100">{item.hadding}</p>

//                   <ul className="px-2">
//                     <div className="section-para body1 w-100">
//                       <div className="section-para body1 w-100">
//                         {Object.keys(item.list)
//                           .filter(key => key.startsWith('highlighttext'))
//                           .map((highlightKey, idx) => {
//                             const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
//                             return (
//                               <li key={highlightKey} className="section-para body1">
//                                 <span className="">{item.list[highlightKey]}</span>
//                               </li>
//                             );
//                           })}

//                       </div>
//                     </div>
//                   </ul>

//                   <div className="d-flex flex-column mb-2 mb-lg-0 ml-lg-2 align-items-lg-start align-items-center">
//                     <button
//                       type="button"
//                       className="btn fw-bold regular-btn mb-2"
//                       style={{ width: "280px" }}
//                       onClick={() => handleOpenForm(item.button)}
//                     >
//                       {item.button}
//                     </button>
//                   </div>


//                 </div>
//               </div>
//             </section>
//           </div>
//         ))}
//       </div>

//       <Timeline />
//       <Newtime />
//       <OurAlumni />
//       <Ourrecruiters handleOpenForm={handleOpenForm} />



//       {formType && (
//         <>
//           <div className="modal modal-overlay" style={{ display: 'block' }} onClick={handleCloseForm}>
//             <div
//               className="modal-dialog"
//               style={{
//                 maxWidth: '90%',
//                 margin: 'auto',
//                 width: '448px',
//                 gap: '16px',
//                 borderRadius: '8px',
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="modal-content p-3">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h5 className="modal-title mb-0 mt-3 px-3">{formType}</h5>
//                   <button
//                     type="button"
//                     className="close mt-3 px-4"
//                     onClick={handleCloseForm}
//                     style={{ border: 'none', background: 'none', fontSize: '1.5rem' }}
//                     aria-label="Close"
//                   >
//                     &times;
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <form onSubmit={handleSubmit} className="w-100">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="fullName"
//                         id="fullName"
//                         placeholder="Name"
//                         className="form-control1 mb-2"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         style={{ width: '100%' }}
//                       />
//                       {errors.fullName && <div className="error_message">{errors.fullName}</div>}
//                     </div>

//                     <div className="form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="Email"
//                         className="form-control1 mb-2"
//                         value={formData.email}
//                         onChange={handleChange}
//                         style={{ width: '100%' }}
//                       />
//                       {errors.email && <div className="error_message">{errors.email}</div>}
//                     </div>

//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="number"
//                         id="number"
//                         placeholder="Number"
//                         className="form-control1 mb-2"
//                         value={formData.number}
//                         onChange={(e) => {
//                           const filteredValue = e.target.value.replace(/[^0-9]/g, '');
//                           setFormData({ ...formData, number: filteredValue });
//                         }}
//                         maxLength="10"
//                         style={{ width: '100%' }}
//                       />
//                       {errors.number && <div className="error_message">{errors.number}</div>}
//                     </div>
//                     <div className="form-group">
//                       <button type="submit" className="btn regular-btn w-100" style={{ height: "48px" }}>
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//     </>
//   );
// };
// export default NgHiring;






import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import data from './Data';
import "./styles.css";
import HireFromUs from './Hireformus';
import Timeline from './Timeline';
import OurAlumni from './Ouralumni';
import Ourrecruiters from './Ourrecruiters';
import Newtime from './Newtimeline'
import Secssionfst from './Fstsecssion/Secssionfst'

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
      <Secssionfst
        handleOpenForm={handleOpenForm}
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        errors={errors}
        setFormData={setFormData}
      />
      <HireFromUs handleOpenForm={handleOpenForm} />

      <div>
        {data.map((item, index) => (
          <div key={item.id}>
            <section className="container mt-5">
              <div className="row d-flex">
                <div className="col-lg-6 col-md-12 d-flex ">
                  <img
                    src={item.img}
                    alt="No IMG"
                    style={{ maxWidth: '100%', height: 'auto' }}

                  />
                </div>

                <div className="col-lg-6 col-md-12">
                  <h5 className="heddinghireformus media-font">{item.text}</h5>
                  <p className="section-para body1 w-100 mt-3">{item.para}</p>
                  <p className="section-para body1 w-100">{item.hadding}</p>

                  <ul className="px-2">
                    <div className="section-para body1 w-100">
                      <div className="section-para body1 w-100">
                        {Object.keys(item.list)
                          .filter(key => key.startsWith('highlighttext'))
                          .map((highlightKey, idx) => {
                            const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
                            return (
                              <li key={highlightKey} className="section-para body1">
                                <span className="">{item.list[highlightKey]}</span>
                              </li>
                            );
                          })}

                      </div>
                    </div>
                  </ul>

                  <div className="d-flex flex-column mb-2 mb-lg-0 ml-lg-2 align-items-lg-start align-items-center">
                    <button
                      type="button"
                      className="btn fw-bold regular-btn mb-2"
                      style={{ width: "280px" }}
                      onClick={() => handleOpenForm(item.button)}
                    >
                      {item.button}
                    </button>
                  </div>


                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      <Timeline />
      <Newtime />
      <OurAlumni />
      <Ourrecruiters handleOpenForm={handleOpenForm} />



      {formType && (
        <>
          <div className="modal modal-overlay" style={{ display: 'block' }} onClick={handleCloseForm}>
            <div
              className="modal-dialog"
              style={{
                maxWidth: '90%',
                margin: 'auto',
                width: '448px',
                gap: '16px',
                borderRadius: '8px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="modal-title mb-0 mt-3 px-3">{formType}</h5>
                  <button
                    type="button"
                    className="close mt-3 px-4"
                    onClick={handleCloseForm}
                    style={{ border: 'none', background: 'none', fontSize: '1.5rem' }}
                    aria-label="Close"
                  >
                    &times;
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
                          setFormData({ ...formData, number: filteredValue });
                        }}
                        maxLength="10"
                        style={{ width: '100%' }}
                      />
                      {errors.number && <div className="error_message">{errors.number}</div>}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn regular-btn w-100" style={{ height: "48px" }}>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  );
};
export default NgHiring;
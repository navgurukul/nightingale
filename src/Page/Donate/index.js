import React, { useState } from 'react';
import './styles.css'
import "../../Global.css";
import IndianDonate from './IndianDonate';
import ForeignDonate from './ForeignDonate';

const Donate = () => {

    const [selectedCitizenship, setSelectedCitizenship] = useState('Indian');

    const handleCitizenshipChange = (citizenship) => {
      setSelectedCitizenship(citizenship);
    };
  

    const details = [
        { label: 'UPI ID', info: 'navgurukulf@kotak' },
        { label: 'Name', info: 'Navgurukul Foundation for Social Welfare' },
        { label: 'Account Number', info: '0512251778' },
        { label: 'IFSC Code', info: 'KKBK0004260' },
      ];
    const details1 =[
        { label: 'Name', info: 'Navgurukul Foundation for Social Welfare' },
        { label: 'FCRA Account Number', info: '39891190304' },
        { label: 'IFSC Code', info: 'SBIN0000691' },
        { label: 'Swift Code', info: 'SBININBB104' },
    
      ]
    const donationOptions = [
        { amount: 100, link: 'https://app.lotuspay.com/merchant/plan/AL0092PDFN2KYC' },
        { amount: 500, link: 'https://app.lotuspay.com/merchant/plan/AL00681BQGXHMI' },
        { amount: 1000, link: 'https://app.lotuspay.com/merchant/plan/AL0074EBKKW2EI' },
        { amount: 2500, link: 'https://app.lotuspay.com/merchant/plan/AL0022DKW1KZGD' },
        { amount: 5000, link: 'https://app.lotuspay.com/merchant/plan/AL0042NG8XJV3P' },
        { amount: 10000, link: 'https://app.lotuspay.com/merchant/plan/AL0012PAC9ZPYV' },
      ];
    return(
        <main className='d-flex justify-content-center align-items-center mt-5'>
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <div className='donate align-items-center'>
                    <h3 className='text-center'>Donate to Help Us Support Education of Underprivileged Students</h3>
                    <img
                    src={require("./assets/Rectangle.png").default}
                    className="donate-img mt-4"
                    />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                        <div className="card " >
                            <div className=' m-3'>
                                <h4>
                                    Become a Supporter to Our Cause
                                </h4>
                                <p  className='mt-3 mb-3 section-para'>
                                We are grateful for your support. 
                                Any amount donated to NavGurukul will be
                                 eligible for tax exemption under 80G.
                                  Please reach out to 
                                 <a href='mailto:donate@navgurukul.org' style={{ color: '#EB5F42' }} className='fw-bold'> donate@navgurukul.org </a> if you have any questions before making the donation
                                </p>
                                <h5 className="section-head mb-3 "> Your Citizenship</h5>
                                <form>
                            <div className="form-check form-check-inline mr-4 " onClick={() => handleCitizenshipChange('Indian')}>
                                <input 
                                    className="form-check-input mr-2 hand-pointer"
                                    type="radio"
                                    name="citizenshipOptions"
                                    id="indianCitizen"
                                    value="Indian"
                                    checked={selectedCitizenship === 'Indian'}
                                    onChange={() => handleCitizenshipChange('Indian')}
                                />
                                <label className={`form-check-label hand-pointer ${selectedCitizenship === 'Indian' ? 'bold-text' : ''}`}
                                htmlFor="indianCitizen">Indian Citizen</label>
                            </div>
                            <div className="form-check form-check-inline " onClick={() => handleCitizenshipChange('Foreign')}>
                                <input 
                                    className="form-check-input mr-2 hand-pointer"
                                    type="radio"
                                    name="citizenshipOptions"
                                    id="foreignCitizen"
                                    value="Foreign"
                                    checked={selectedCitizenship === 'Foreign'}
                                    onChange={() => handleCitizenshipChange('Foreign')}
                                />
                                <label className={`form-check-label hand-pointer ${selectedCitizenship === 'Foreign' ? 'bold-text' : ''}`} htmlFor="foreignCitizen">Foreign Citizen</label>
                            </div>
                            </form>
                            <hr className="border-top border-gray-400 my-4" />
                            {selectedCitizenship === 'Indian' ? 
                                <IndianDonate
                                details={details}
                                /> 
                                : <ForeignDonate
                                details={details1}
                                />
                            }

                            </div>
                            </div>
                            </div>
                        <div className='col-lg-5 section-para'>
                            <div className='card p-3'> 
                            <h4>
                            How do these donations help us?
                            </h4>
                            <p  className='mt-3 mb-3'>
                            We use the donations to fund the operations for our physical campuses across the country. Funds are used to organize admission drives, get equipment for studies, do promotions. This is how we have used the donations in the last year:
                            </p>
                            <ul className='ml-4 mt-2'>
                                <li>
                                    Point 1
                                </li>
                                <li>
                                    Point 2
                                </li>
                                <li>
                                    Point 3
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
    </main>
    )
    

};
export default Donate;
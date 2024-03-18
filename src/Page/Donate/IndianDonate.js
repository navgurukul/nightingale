import React, { useState } from 'react';
import './styles.css'
import "../../Global.css";

const Donate = () => {
  const details = [
    { label: 'UPI ID', info: 'navgurukulf@kotak' },
    { label: 'Name', info: 'Navgurukul Foundation for Social Welfare' },
    { label: 'Account Number', info: '0512251778' },
    { label: 'IFSC Code', info: 'KKBK0004260' },
  ];

  const [selectedTransaction, setSelectedTransaction] = useState('Payment_Gateway');

  const handleTransactionMethod = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const [selectedOption, setSelectedOption] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(0);

  const selectOption = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleButtonClick = (amount, link) => {
    setSelectedAmount(amount);
    window.open(link, '_blank');
  };
  const handleProceedBtnClick = (link) => {
    window.open(link, '_blank');
  
  };
  const donationOptions = [
    { amount: 100, link: 'https://app.lotuspay.com/merchant/plan/AL0092PDFN2KYC' },
    { amount: 500, link: 'https://app.lotuspay.com/merchant/plan/AL00681BQGXHMI' },
    { amount: 1000, link: 'https://app.lotuspay.com/merchant/plan/AL0074EBKKW2EI' },
    { amount: 2500, link: 'https://app.lotuspay.com/merchant/plan/AL0022DKW1KZGD' },
    { amount: 5000, link: 'https://app.lotuspay.com/merchant/plan/AL0042NG8XJV3P' },
    { amount: 10000, link: 'https://app.lotuspay.com/merchant/plan/AL0012PAC9ZPYV' },
  ];

  return (
    
    <main className='mt-4'>
      <form>
      <h5 className="section-head mb-3 ">Payment Modes</h5>
        <div className="form-check form-check-inline " onClick={() => handleTransactionMethod('Payment_Gateway')}>
          <input 
            className="form-check-input mr-2 hand-pointer"
            type="radio"
            name="transactionOptions"
            id="PaymentGateway"
            value="Payment_Gateway"
            checked={selectedTransaction === 'Payment_Gateway'}
            onChange={() => handleTransactionMethod('Payment_Gateway')}
          />
          <label className={`form-check-label hand-pointer ${selectedTransaction === 'Payment_Gateway' ? 'bold-text' : ''}`}
           htmlFor="Payment_Gateway">Payment Gateway</label>
        </div>
        <div className="form-check form-check-inline " onClick={() => handleTransactionMethod('Bank_Transfer')}>
          <input 
            className="form-check-input mr-2 hand-pointer"
            type="radio"
            name="transactionOptions"
            id="BankTransfer"
            value="Bank_Transfer"
            checked={selectedTransaction === 'Bank_Transfer'}
            onChange={() => handleTransactionMethod('Bank_Transfer')}
          />
          <label className={`form-check-label hand-pointer ${selectedTransaction === 'Bank_Transfer' ? 'bold-text' : ''}`} htmlFor="BankTransfer">Bank Transfer</label>
        </div>
      </form>
      {selectedTransaction === 'Payment_Gateway' &&
      <div className="row mt-4 " >
        <div className="col-lg-12 p-0">
          <h5 className="section-head mb-4">Donate via Payment Gateway</h5>
          <div className="d-flex">
            <div className="col-lg-3 col-sm-6 p-0">
              <div
                onClick={() => selectOption('monthly')}
                className={selectedOption === 'monthly' ? 'section-head mb-4 hand-pointer text-center' : 'section-para  mb-4  hand-pointer text-center'}
                style={
                  selectedOption === 'monthly'
                  ? {
                      borderBottom: "3px solid #f05f40",
                      fontWeight: "bold",
                    }
                  : {}
              }
              >
               <p>Monthly</p> 
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                onClick={() => selectOption('oneTime')}
                className={selectedOption === 'oneTime' ? 'section-head  mb-4 hand-pointer text-center' : 'section-para  mb-4  hand-pointer text-center'}
                style={
                  selectedOption === 'oneTime'
                  ? {
                      borderBottom: "3px solid #f05f40",
                      fontWeight: "bold",
                    }
                  : {}
              }
              >
                <p>One Time</p>
              </div>
            </div>
          </div>
          
        <div id="monthlyContent" style={{ display: selectedOption === 'monthly' ? 'block' : 'none' }} >
            <div className="row mb-2 d-flex justify-content-between px-0 "> 
                {donationOptions.map(({ amount, link }) => (
                    <div className="d-flex flex-wrap justify-content-between px-1 ">
                        <button
                            type="button"
                            className={selectedAmount === amount ? "btn section-para regular-btn" : "btn dashed-btn mb-4"}
                            style={{ width: "auto", height: '50px' }}
                            onClick={() => handleButtonClick(amount, link)}
                        >
                            ₹ {amount}
                        </button>
                    </div>
                ))}
            </div>
          </div>   
            </div>
            <div id="oneTimeContent" style={{ display: selectedOption === 'oneTime' ? 'block' : 'none' }}>
              <p className="mb-4">Quick and easy way to support us</p>
              <button
                type="button"
                className="btn section-para regular-btn w-100"
                style={{ height: '50px', marginBottom:"16px" }}  
                onClick={() => handleProceedBtnClick("https://www.instamojo.com/@navgurukul/")}
              >
                Proceed to Donate
              </button>
             
          </div>
          <p className="text ">
            Please Note: Transactions are fulfilled via Lotuspay and a 2% transaction charge will be levied for using our payment gateway
        </p>
          </div>
          
      }
      {selectedTransaction === 'Bank_Transfer' &&
       <div>
            <h5 className="section-head mb-4  mt-4 ">Donate via Bank Transfer</h5>
            {details.map((item, index) => (
            <div key={index} className="row ">
                <div className="col-md-12 p-0 ">
                <p className=' info fw-bold '>{item.label}</p>
                <div className=" section-para ">
                    <p className='info'>{item.info}</p>
                </div>
                </div>
            </div>
            ))}
            <p className=' info fw-bold mt-3 '>Transaction ID (This will help us identify your donation)</p>
            <form >
                <div className="mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder='Transaction ID'
                    id="myInput"
                    // value={inputValue}
                    // onChange={handleInputChange}
                    style={{ height: '50px' ,borderRadius:'8px'}}
                    />
                </div>
                <button
                type="button"
                className="btn section-para regular-btn w-50"
                style={{ height: '50px', marginBottom:"16px" }}  
                onClick={() => handleProceedBtnClick("https://www.instamojo.com/@navgurukul/")}
              >
                Proceed to Donate
              </button>
              <p className="text " >You will receive a confirmation email upon completing the donation</p>
                <div className="mt-3">
                    {/* {submissionStatus && <p className="text-muted">{submissionStatus}</p>} */}
                </div>
            </form>
        </div>
       }
       
    </main>
  );
};

export default Donate;




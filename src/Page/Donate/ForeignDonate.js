import React, { useEffect } from "react";
import { useState  } from "react";
import axios from "axios";
import { Dropdown, Button } from 'react-bootstrap';

const countriesData = [
    { country: 'USA', currency: 'US Dollar', currencyIcon: '$', flag: ':us:' },
    { country: 'EU', currency: 'Euro', currencyIcon: '€', flag: ':flag-eu:' },
    { country: 'JP', currency: 'Japanese Yen', currencyIcon: '¥', flag: ':jp:' },
    // Add more countries as needed
  ];
const ForeignDonate = () =>{
    const [selectedOption, setSelectedOption] = useState('monthly');
    const [data, setData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        donate: '',
        taxIdentification: '',
        card:'',
        expiry_date:"",
        cvv:''
      });

      const [selectedTransaction, setSelectedTransaction] = useState('Payment_Gateway');

    const handleTransactionMethod = (transaction) => {
            setSelectedTransaction(transaction);
  };

  
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleFormSubmit = (e) => {
         axios.post('https://sheetdb.io/api/v1/kjndihc8y5at9',data)
         .then((res)=>{
           setData({
            name: '',
            address: '',
            email: '',
            phone: '',
            donate: '',
            taxIdentification: '',
            card: '',
            expiry_date: '',
            cvv:''
        });
           
         })
         .catch((err)=>{
           console.log(err)
         })
     };
     
      
      


     useEffect(()=>{
        axios.get("https://sheetdb.io/api/v1/kjndihc8y5at9")
        .then((res)=>{
            console.log(res.data,"res")
        }
        )
     })
     const nweA = [1, 2, 5, 10, 20, 100];
     const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountrySelect = (countryData) => {
        setSelectedCountry(countryData);
      };


    const selectOption = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
      };
    return (
        <main>
            <h6>Donation Amount</h6>
           
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
            <div className="col-lg-3 col-sm-6 p-0">
              <div
                onClick={() => selectOption('annually')}
                className={selectedOption === 'annually' ? 'section-head mb-4 hand-pointer text-center' : 'section-para  mb-4  hand-pointer text-center'}
                style={
                  selectedOption === 'annually'
                  ? {
                      borderBottom: "3px solid #f05f40",
                      fontWeight: "bold",
                    }
                  : {}
              }
              >
               <p>Annually</p> 
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
          <div className="mt-3">
            <p>Selected Currency</p>
            <div>
            <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="currency-dropdown">
          {selectedCountry ? (
            <>
              <span role="img" aria-label={selectedCountry.country}>{selectedCountry.flag}</span>{' '}
              {selectedCountry.currency}
            </>
          ) : (
            'Select Currency'
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {countriesData.map((countryData, index) => (
            <Dropdown.Item key={index} onClick={() => handleCountrySelect(countryData)}>
              <span role="img" aria-label={countryData.country}>{countryData.flag}</span>{' '}
              {countryData.currency}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {selectedCountry && (
        <Button variant="secondary">
          {selectedCountry.currencyIcon} {selectedCountry.currency}
        </Button>
      )}
    </div>
        </div>
          </div>
          <hr className="border-top border-gray-400 my-4" />
          <div className="mt-3">
              <h6>Your Information</h6>
              <form onSubmit={handleFormSubmit}>
           
              <input 
              type="text" name="name" 
              value={data.name} 
              onChange={handleInputChange}
              placeholder="your name"
              className="input-data mr-3 p-2"
               />
            <input type="text" name="phone" 
              value={data.phone} 
              onChange={handleInputChange} 
              placeholder="Contact Number"
              className="input-data ml-3 p-2"
              
              />
            
            <br />
            <br />

              <input type="text" 
              name="email" 
              value={data.email} 
              onChange={handleInputChange}  
              placeholder="Email"
              className="input-data mr-3 p-2"/>
            
            
            
              <input 
              type="text" 
              name="donate" 
              value={data.donate} 
              onChange={handleInputChange}
              placeholder="Reason for donation (Optional)"
              className="input-data ml-3 p-2"
               />
            
            <br />
            <br/>
            <input type="text" 
              name="address" value={data.address} 
              onChange={handleInputChange} 
              placeholder="Address"
              className="input-address pl-3 pt-2 pb-5"
              />

            <br/>
            <br/>
            <input
            type="text"
            name="taxIdentification"
            value={data.taxIdentification}
            onChange={handleInputChange}
            placeholder="Tax Identification Number or Passport Number"
            className="input-address p-2"
            />
            <br/>
            <br/>
            <hr className="border-top border-gray-400 my-4" />
            
          </form>
          <form>
      <h5 className="section-head mb-3 ">Payment Modes</h5>
        <div className="form-check form-check-inline " onClick={() => handleTransactionMethod('Payment_Gateway')}>
          <input 
            className="form-check-input mr-2 hand-pointer"
            type="radio"
            name="transactionOptions"
            id="Card"
            value="Card"
            checked={selectedTransaction === 'Payment_Gateway'}
            onChange={() => handleTransactionMethod('Payment_Gateway')}
          />
          <label className={`form-check-label hand-pointer ${selectedTransaction === 'Payment_Gateway' ? 'bold-text' : ''}`}
           htmlFor="Payment_Gateway">Card (Debit/Credit)</label>
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
        <p>Chosen Monthly Donation Amount</p>
        <form>
        <input 
              type="text" name="card" 
              value={data.card} 
              onChange={handleInputChange}
              placeholder="Card Number"
              className="input-data mr-3 p-2"
               />
            <input type="text" name="expiry_date" 
              value={data.expiry_date} 
              onChange={handleInputChange} 
              placeholder="Expiry Date"
              className="input-data ml-3 p-2"
              
              />
              <br/>
              <br/>
            <input type="text" name="cvv" 
              value={data.cvv} 
              onChange={handleInputChange} 
              placeholder="CVV"
              className="input-data p-2"
              
              />
              <br/>
              <br/>
               <button
                type="button"
                className="btn section-para regular-btn w-50"
                style={{ height: '50px', marginBottom:"16px" }}  
                onClick={handleFormSubmit}
              >
                Proceed to Donate
              </button>
        </form>
        </div>
            

        </main>
    )
}
export default ForeignDonate;
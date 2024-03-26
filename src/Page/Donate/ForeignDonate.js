import React, { useEffect } from "react";
import { useState  } from "react";
import axios from "axios";


const ForeignDonate = ({details}) =>{
  const [selectedOption, setSelectedOption] = useState('monthly');
  const [data, setData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        donate: '',
        taxIdentification: '',
        card:'',
        expiry_date:'',
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
      axios.post('https://sheetdb.io/api/v1/y9728dhx54jz6',data)
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
    const recipientEmail = data.email; // Assuming email is stored in data.email
    const subject = 'Thank You for Your Donation';
    const body = `Dear ${data.name},\n\nThank you for your generous donation! We appreciate your support.\n\nBest regards,\nYour Organization`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
      })
      .catch((err)=>{
        console.log(err)
      })
  };
     

    //  useEffect(()=>{
    //     axios.get("https://sheetdb.io/api/v1/y9728dhx54jz6")
    //     .then((res)=>{
    //         console.log(res.data,"res")
    //     }
    //     )
    //  })
  const amount = [10, 20, 50, 100, 200, 1000];
  const [countries, setCountries] = useState([]);
  const [donationAmount,setDonationAmount] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState();

    
  useEffect(() => {
      const fetchCountries = async () => {
          try {
              const response = await axios.get('https://restcountries.com/v3.1/all');
              const countryData = response.data;
              setCountries(countryData);
          } catch (error) {
              console.error('Error fetching countries:', error);
          }
      };

      fetchCountries();
  }, []);


  const countryData = countries.map(country => {
      // Function to get currency name
    const getCurrencyName = () => {
      const currencyData= country.currencies;
        for (const currencyCode in currencyData) {
            return(currencyData[currencyCode].symbol );
            
        }
        return "Unknown"; // Default if currency name is not found
    };

    const getCurrencyCode = () => {
      const currencyData= country.currencies;
        for (const currencyCode in currencyData) {
            return(Object.keys(currencyData));
            
        }
        return "Unknown"; // Default if currency name is not found
    }
  
      return {
          name: country.name.common,
          flag: country.flag,
          currency: getCurrencyName(),
          code: getCurrencyCode()
      };
  });


  const handleChange = (event) => {
      setSelectedCountry(event.target.value);
      
  };

  const selectOption = (option) => {
      setSelectedOption(option === selectedOption ? null : option);
    };

  const currentDate = new Date().toISOString().split('T')[0];


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
            <select value={selectedCountry} onChange={handleChange} className="form-control">
            
            {countryData.map((country, index) => (
                <option key={index} value={country.currency}>
                  {country.flag}{"  "}
                    {country.code} 
                    
                </option>
            ))}
        </select>
        <div id="monthlyContent"
         style={{ 
          // display: selectedOption === 'monthly' ? 'block' : 'none'
         
           }} 
           className="mt-3"
           >
            <div className="row mb-2 d-flex px-0 "> 
                {amount.map((amount ) => (
                    <div className="d-flex flex-wrap mr-4 ">
                        <button
                            type="button"
                            className={"btn dashed-btn mb-4"}
                            style={{ width: "auto", height: '50px',  
                            background:donationAmount === amount && '#f05f40',
                            color:donationAmount === amount && '#fff'  
                          }}

                          
                            // onClick={() => handleButtonClick(amount, link)}
                            onClick={() => setDonationAmount(amount)}
                        >
                            {selectedCountry} {amount}
                        </button>
                    </div>
                ))}
            </div>
          </div>   
     
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
              className="input-data mr-3 p-2 mb-4"
               />
            <input type="text" name="phone" 
              value={data.phone} 
              onChange={handleInputChange} 
              placeholder="Contact Number"
              className="input-data ml-3 p-2 mb-4"
          
              />
            
           

              <input type="text" 
              name="email" 
              value={data.email} 
              onChange={handleInputChange}  
              placeholder="Email"
              className="input-data mr-3 p-2 mb-4"/>
            
            
            
              <input 
              type="text" 
              name="donate" 
              value={data.donate} 
              onChange={handleInputChange}
              placeholder="Reason for donation (Optional)"
              className="input-data ml-3 p-2 mb-4"
               />
            
           
            <input type="text" 
              name="address" value={data.address} 
              onChange={handleInputChange} 
              placeholder="Address"
              className="input-address pl-3 pt-2 pb-5 mb-4"
              />

           
            <input
            type="text"
            name="taxIdentification"
            value={data.taxIdentification}
            onChange={handleInputChange}
            placeholder="Tax Identification Number or Passport Number"
            className="input-address p-2 mb-4"
            />
           
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
        <p className="mt-3 section-para">Chosen Monthly Donation Amount</p>
        <p className="font-weight-400 font-size-24">{selectedCountry} {donationAmount}</p>

        {selectedTransaction==="Payment_Gateway" ?
        <form>
        <input 
              type="text" name="card" 
              value={data.card} 
              onChange={handleInputChange}
              placeholder="Card Number"
              className="input-data mr-3 p-2 mb-4"
               />
            <input 
              type="text" 
              name="expiry_date" 
              value={data.expiry_date || currentDate} // If expiryDate is not set, use the current date
              onChange={handleInputChange} 
              placeholder="Expiry Date"
              className="input-data ml-3 p-2 mb-4"
            />
             
            <input type="text" name="cvv" 
              // value={data.cvv} 
              onChange={handleInputChange} 
              placeholder="CVV"
              className="input-data p-2 mb-4"
              
              />
              
               
        </form>
        :
         
          <div>
          <p className="section-para mb-4  mt-4 ">Please trasnfer the amount to the
           below bank account and share the transaction ID to complete the donation</p>
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
            </div>

          }
          <button
                type="button"
                className="btn section-para regular-btn w-50"
                style={{ height: '50px', marginBottom:"16px" }}  
                onClick={handleFormSubmit}
              >
                Proceed to Donate
          </button>
          <p className="text">You will receive a confirmation email upon completing the donation</p>
        </div>
            

        </main>
    )
}
export default ForeignDonate;
import React from "react";
import "./styles.css";
import middleImg from "./assets/midImg.png";

function Donate() {
  return (
    <main className="donate-page d-flex flex-column justify-content-center align-items-center">
      <div className="page-content w-100 d-flex flex-column justify-content-center align-items-center">
        <section className="donate-page-section">
          <h2 className="section-donate-title">Donate to NavGurukul</h2>
          <hr className="main-hr mt-2" />
          <div className="d-flex account-details  justify-content-center align-items-center">
            <div className="d-flex flex-column text-left fw-semiBold">
              <span>UPI ID</span>
              <span>Name</span>
              <span>Account Number</span>
              <span>IFSC Code</span>
            </div>
            <div className=" d-flex flex-column text-left pl-2 pl-md-4 ">
              <span>navgurukulf@kotak</span>
              <span>Navgurukul Foundation for Social Welfare</span>
              <span>0512251778</span>
              <span>KKBK0004260</span>
            </div>
          </div>
          <hr className="w-30 partition-line" style={{ color: "#cdcdcd" }}></hr>

          <div className="donatation-payment mt-5 d-flex justify-content-center align-items-center w-100">
            <p className="w-100">
              You can also directly pay (2% charge but quick) using our payment
              gateway
            </p>
          </div>
          {/* <button type="button" class="btn btn-primary button-colour"> */}
          <button type="button" class="donate-page-button ng-labs-btn">
            Donate to Navgurukul
          </button>
          <div className="donate-content mt-5 d-flex justify-content-center align-items-center w-100">
            <p className="w-75 mt-5">
              You may also pledge a <b> monthly donation </b> to us. Any pledged
              amount is a huge support for us. Just having you by our side fills
              us with gratitude & an energy to do better.
            </p>
          </div>
          <div className="container  donate-button-container">
            <div className="row">
              <div class="col-md col-sm-12">
                <button type="button" class="btn btn-primary donate-button">
                  ₹ 101 / month
                </button>
                <button type="button" class="btn btn-primary donate-button">
                  ₹ 501 per month
                </button>
                <button type="button" class="btn btn-primary donate-button">
                  ₹ 1001 per month
                </button>
                <button type="button" class="btn btn-primary donate-button">
                  ₹ 2501 per month
                </button>
                <button type="button" class="btn btn-primary donate-button">
                  ₹ 5001 per month
                </button>
                <button type="button" class="btn btn-primary donate-button">
                  ₹ 10001 per month
                </button>
              </div>
            </div>
          </div>
          <div className="about-donation w-100 d-flex flex-column justify-content-center align-items-center">
            <p>
              Any amount donated to NavGurukul will be eligible/ not eligible
              for tax exemption under 80CCC.
            </p>
          </div>
        </section>
        <section className="donate-page-section donate-page-image-section w-100">
          <h2 className="mt-5 mb-3">Your Donations Create Impact</h2>
          <hr className="main-hr mt-2" />
          <img className="middleImg" src={middleImg}></img>
          <div className="donation-impact-data w-100 d-flex justify-content-around my-5">
            <span>
              <h3>160+</h3>
              <p>Software Development Jobs</p>
            </span>
            <span>
              <h3>4000+</h3>
              <p>Online Students</p>
            </span>
          </div>
          <div className="donation-impact-data donation-impact-data-2 w-100 d-flex justify-content-around my-5">
            <span>
              <h3>5</h3>
              <p>States across India</p>
            </span>
          </div>
          {/* <div className="donate-bg">
            <h2 className="donate-title">Your Donations Create Impact</h2>
            <div className="donate-underliner"></div>
            <img
              src={require("./assets/Ellipse.png").default}
              className="Ellipse"
            />
            <img
              src={require("./assets/bg_2.png").default}
              className="donate-bg2"
            />
            <div className="jobs">
              <p className="number">160+</p>
              <p>Software Development Jobs</p>
            </div>
            <div className="online-students">
              <p className="number">4000+</p>
              <p>Online Students</p>
            </div>
            <div className="states">
              <p className="number">5</p>
              <p>States across India</p>
            </div>
          </div> */}
          {/* <div>
            <div className="donate-bg-image">
              <h2 className="donate-title">Your Donations Create Impact</h2>
              <div className="donate-underliner"></div>
              <img
                src={require("./assets/Ellipse.png").default}
                className="Ellipse"
              />
              <img
                src={require("./assets/bg_2.png").default}
                className="donate-bg2"
              />
              <div className="jobs">
                <p className="number">160+</p>
                <p>Software Development Jobs</p>
              </div>
              <div className="online-students">
                <p className="number">4000+</p>
                <p>Online Students</p>
              </div>
              <div className="states">
                <p className="number">5</p>
                <p>States across India</p>
              </div>
              {/* </div> */}
          {/* </div>
            <div className="bg-color"></div>
            <img
              src={require("./assets/bg.png").default}
              className="donate-bg w-100"
            /> */}
          {/* </div> */}
        </section>
        <section className="donate-page-section">
          <h2 className="section-donate-title">
            Are you a corporation and taken an interest in what we do?
          </h2>
          {/* <button type="button" class="btn btn-primary button-colour"> */}
          <button type="button" class="ng-labs-btn contact-button">
            Contact Us for CSR Enquiries
          </button>
        </section>
      </div>
    </main>
  );
}

export default Donate;

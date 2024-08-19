import React from "react";
import trick from './assets/trick.png'

const Thankyou = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center our-initiatives">
                <div className="container container-thankyoupage mb-5 mt-3">
                    <h3 className="text-center media-font large-font mt-3 bounce-in-text">Thank you!</h3>
                    <p className="section-para body1 mb-2 text-center bounce-in-text">Thank you for visiting Navgurukul.</p>
                    <div className="parent-container">
                        <img className="correctimg bounce-in-text mt-3 mb-5" src={trick} alt="no img" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Thankyou;
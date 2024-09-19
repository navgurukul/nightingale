import './secssionfst.css';
const Secssionfst = ({ handleSubmit, formData, handleChange, errors, setFormData }) => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 column-height">
                        <div className="mainbox mt-lg-5 mt-0">
                            <h5 className="media-font1">
                                You are our last piece in this puzzle of Diversity, Equality, and Inclusion.
                            </h5>

                            <p className="section-para body1">
                                For more than 8 years, NavGurukul Foundation for Social Welfare has been committed to providing pathways to aspiration careers to students from marginalized communities. Now, we want your help to bridge the gap where skills meet opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 py-3 column-height d-flex justify-content-lg-end justify-content-center align-items-center"
                        style={{ height: "100%", padding: "0" }}
                    >


                        <div className='formcontainer w-100'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <h4 className="mb-3">Connect With Our Team</h4>
                                    <label htmlFor="purpose" className="textspacing fw-bold">I would like to</label>
                                    <div className='radio-input' style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="radio"
                                            name="purpose"
                                            id="purposeHireFromUs"
                                            value="Hire from Us"
                                            checked={formData.purpose === 'Hire from Us'}
                                            onChange={handleChange}
                                        />
                                        <label className="section-para body1" htmlFor="purposeHireFromUs">Hire from NavGurukul</label>
                                    </div>

                                    <div className='radio-input' style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="radio"
                                            name="purpose"
                                            id="BecomeKnowledgePartner"
                                            value="BecomeKnowledgePartner"
                                            checked={formData.purpose === 'BecomeKnowledgePartner'}
                                            onChange={handleChange}
                                        />
                                        <label className="section-para body1" htmlFor="BecomeKnowledgePartner">Become Knowledge Partner</label>
                                    </div>

                                    <div className='radio-input' style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="radio"
                                            name="purpose"
                                            id="Volunteer"
                                            value="Volunteer"
                                            checked={formData.purpose === 'Volunteer'}
                                            onChange={handleChange}
                                        />
                                        <label className="section-para body1" htmlFor="Volunteer">Volunteer</label>
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
                </div>
            </div>
        </div >
    );
};

export default Secssionfst;



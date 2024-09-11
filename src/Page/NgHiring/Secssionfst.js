const Secssionfst = ({ handleOpenForm, handleSubmit, formData, handleChange, errors, setFormData }) => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 col-md-12 py-3 pr-0 pr-lg-5 column-height">
                        <div className="paragrapg-box">
                            <h5 className="media-font mt-4 text-lg-start p-3">
                                You are our last piece in this puzzle of Diversity, Equality, and Inclusion.
                            </h5>
                            <p className="section-para body1 w-100 text-lg-start pr-0 pr-lg-5 ">
                                For more than 8 years, NavGurukul Foundation for Social Welfare has been committed to providing pathways to aspiration careers to students from marginalized communities. Now, we want your help to bridge the gap where skills meet opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 py-3 pr-0 pr-lg-5 column-height d-flex d-lg-flex justify-content-center justify-content-lg-start">
                        <div className='formcontainer w-100'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <h4 className="mb-3">Connect With Our Team</h4>
                                    <label htmlFor="purpose" className="textspacing fw-bold">I would like</label>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            name="purpose"
                                            id="purposeHireFromUs"
                                            value="Hire from Us"
                                            checked={formData.purpose === 'Hire from Us'}
                                            onChange={handleChange}
                                        />
                                        <label className="section-para body1" htmlFor="purposeHireFromUs">Hire from Us</label>
                                    </div>

                                    <div className="form-check d-inline-flex align-items-center me-3">
                                        <input
                                            type="radio"
                                            name="purpose"
                                            id="purposeBecomeKnowledgePartner"
                                            value="Become knowledge partner"
                                            checked={formData.purpose === 'Become knowledge partner'}
                                            onChange={handleChange}
                                        />
                                        <label className="section-para body1 ms-2" htmlFor="purposeBecomeKnowledgePartner">Become knowledge partner</label>
                                    </div>

                                    <div className="form-check d-inline-flex align-items-center">
                                        <input
                                            type="radio"
                                            name="purpose"
                                            id="purposeVolunteer"
                                            value="Volunteer"
                                            checked={formData.purpose === 'Volunteer'}
                                            onChange={handleChange}
                                        />
                                        <label className="section-para body1 ms-2" htmlFor="purposeVolunteer">Volunteer</label>
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
                </div >
            </div >
        </div >
    );
};

export default Secssionfst;

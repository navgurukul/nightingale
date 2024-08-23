
import Button from './Button';
const Puzzlesecssion = ({handleOpenForm}) => {
    return (
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
    )
}

export default Puzzlesecssion;

import React,{useState} from 'react';
import data from './Data';

const HiringImg = () => {

    const [formType, setFormType] = useState('');
    const handleOpenForm = (type) => {
        console.log("Opening form for type:", type);
        setFormType(type);
    };

    return (
        <div>
            {data.map((item, index) => (
                <div key={item.id} className="position-relative">
                    <h3 className="text-center media-font mb-4">{item.text}</h3>
                    <img className='banner-img' src={item.img} alt="no image" />
                    <section className="d-flex flex-column align-items-center our-initiatives">
                        <div className="container">
                            <div className="textlink">
                                <p className="section-para body1 w-100 p-3 mb-1">{item.para}</p>
                                <ul>
                                    <div className="section-para body1 w-100 p-3">
                                        <p className="section-para body1 w-100 mb-1">{item.hadding}</p>
                                        <div className="container section-para body1 w-100 p-3">
                                            {Object.keys(item.list)
                                                .filter(key => key.startsWith('highlighttext'))
                                                .map((highlightKey, idx) => {
                                                    const detailKey = Object.keys(item.list).filter(key => !key.startsWith('highlighttext'))[idx];
                                                    return (
                                                        <li key={highlightKey} className='section-para body1 w-100 ml-3'>
                                                            <span className='link'>{item.list[highlightKey]}</span>
                                                            <span>{item.list[detailKey]}</span>
                                                        </li>
                                                    );
                                                })}
                                            <div className="d-flex justify-content-center w-100 mt-4">
                                                <button
                                                    type="button"
                                                    className="btn fw-bold regular-btn align-self-center px-4 p-2"
                                                    style={{ width: "360px" }}
                                                    onClick={() => handleOpenForm(item.text)}
                                                >
                                                    {item.button}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}
export default HiringImg;
import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css'

const PageNotFound= ()=>{
    return(
        <div className='pageNotFoundContainer'>
        <h3> 404 Page Not Found.</h3>
        <p><NavLink to="/">Go to the Home page</NavLink></p>
        
        </div>
    )
}
export default PageNotFound
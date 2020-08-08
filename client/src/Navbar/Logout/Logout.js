import React from 'react';
import './Logout.css';
import logoutPic from '../../assets/logout.svg';

const Logout = (props) => {

    return(
        
        <div>
            <img onClick={() => props.clearToken()} id="logout" className="logout" src={logoutPic} alt="powerbutton"/>
        </div>
    )
};

export default Logout;
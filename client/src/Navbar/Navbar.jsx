import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import Logout from './Logout/Logout'

const Navbar = (props) => {
    console.log('Navbar:', props)
    return (
        <div>
            <nav>
                <img id="logo" src={logo} alt="list buddy logo"/>
                
                <Logout clearToken={props.clearToken}/>
            </nav>
        </div>
    )
}

export default Navbar;





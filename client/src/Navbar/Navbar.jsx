import React from 'react';
import './Navbar.css';
import logo from '../assets/logo2.png';
import Logout from './Logout/Logout'

const Navbar = (props) => {
    console.log('Navbar:', props)
    return (
        <div class="container">
            <nav className='navbar navbar-expland-sm bg-secondary navbar-dark fixed-top'>
                <img id="logo" src={logo} alt="list buddy logo"/>
                
                <Logout clearToken={props.clearToken}/>
            </nav>
        </div>
    )
}

export default Navbar;





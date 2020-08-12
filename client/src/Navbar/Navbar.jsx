
// import './Navbar.css';
import Typography from "@material-ui/core/Typography";
import logo from '../assets/logo.png';
import Logout from './Logout/Logout';
import React, { Component, useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export class Navbar extends Component {

    render( ) {
        return (
            <div class="container">
               <nav className='navbar navbar-expland-sm bg-secondary navbar-dark fixed-top'>
                   <a href="#home" class="navbar-brand">
                       {/* <img src="assets/logo.png"></img> */}

                   <h2>List Buddy</h2>

                   </a>
                   
    
      <ul style= "list-style: none;">
     <li> Home  About Contact Us </li>
      
      </ul>
      </nav>
      </div>
 

        )
    }
}



export default Navbar;


// const Navbar = (props) => {
//     console.log('Navbar:', props)
//     return (
//         <div>
//             <nav>
//                 <img id="logo" src={logo} alt="list buddy logo"/>
                
//                 <Logout clearToken={props.clearToken}/>
//             </nav>
//         </div>
//     )
// }







// import './Navbar.css';
import Typography from "@material-ui/core/Typography";
import logo from '../assets/logo.png';
import Logout from './Logout/Logout';
import React, { Component, useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export class Navbar extends Component {

    render( ) {
        return (
            <nav className='navbar navbar-expland-sm bg-warning navbar-dark fixed-top'>
      <Typography style={{ padding: 2
     }} variant="h4"> List Buddy
      </Typography>

    </nav>
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






import React, { Component, useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export class Navbar extends Component {
    static defaultProps = {
   
    }
    render( ) {
        return (
            <nav className= 'navbar bg-warning'>
                <h1> 
                     List Buddy
                </h1>
            </nav>
        )
    }
}


export default Navbar

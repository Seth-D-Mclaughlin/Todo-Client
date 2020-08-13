import logo from '../assets/logo.png'
import React, { Component, useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import './Navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <div class='container'>
        <nav className='navbar navbar-expland-sm bg-secondary navbar-dark fixed-top'>
          <a class='navbar-brand' img-src='assets.logo.png'>
            <h2>
              <p class='text-warning'> List Buddy</p>
            </h2>
          </a>
          <ul class='list-unstyled '>
            <li>LogOut</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar





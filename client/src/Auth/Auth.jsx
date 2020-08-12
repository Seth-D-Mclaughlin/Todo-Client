import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';// we can delete this import and the original .jsx (yes I'm sure we don't need the .jsx)
import Login from './Login'; // we can delete this import and the original .jsx (yes I'm sure we don't need the .jsx)

const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);
  
    const title = () => {
        return login ? 'Login' : 'Signup'
    }
  
    const loginToggle = (event) => {
        event.preventDefault();
  
        setLogin(!login); // login is set to true on line 11 but since we want "signup" as default we use bang here
        
        setEmail(''); // this resets the fileds in case they clicked something
        setPassword('');
    
    }
  
    const signupFields = () => !login ?
        (
            <div>
                <label htmlFor="firstName">First Name:</label>
                <br/>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br/>
            </div>
        ) : null;
  
        const handleSubmit = (e) => {
          e.preventDefault();
          //Build URL based off login position (true/false)
        const url = login ? 'http://localhost:3001/user/login' :
        'http://localhost:3001/user/create'
  
        const bodyObj = login ? {
            user:{
              email: email,
              password: password
      } }: {
          user:{
              firstName: firstName,
              email: email,
              password: password
      }} 
  
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(bodyObj),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(json => props.updateToken(json.sessionToken))
  }
  
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                <br/>
                {signupFields()}
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</button> 
                <br/>
                <button type="submit">Submit</button>
  
            </form>
        </div>
    )
  }
  
  export default Auth;
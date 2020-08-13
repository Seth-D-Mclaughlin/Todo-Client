import React, { useEffect, useState } from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, Row, Col} from 'reactstrap';

const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);
  
    const title = ( ) => {
        return login ? 'Login' : 'Signup'
    }
  
    const loginToggle = (event) => {
        event.preventDefault( );
  
        setLogin(!login); // login is set to true on line 11 but since we want "signup" as default we use bang here
        
        setEmail(''); // this resets the fileds in case they clicked something
        setPassword('');
    
    }
  
    const signupFields = ( ) => !login ?
        (
            <div>
                {/* <label htmlFor="firstName">First Name:</label> */}
                <br/>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br/>
            </div>
        ) : null;
  
        const handleSubmit = (e) => {
          e.preventDefault( );
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
      .then(res => res.json( ))
      .then(json => props.updateToken(json.sessionToken))
  }
  
    return(
        <div class='login' mb-5>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-6'>
              <div class='card bg-info text-center card-form'>
                <div class='card-body'>          
                <form onSubmit={handleSubmit}>
                <h1>{title( )}</h1>
                <br/>
                {signupFields( )}
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" placeholder="Email"  id='email' value={email} onChange={(e) => setEmail(e.target.value)}>
                  </input>
                </div>
                <div class='form-group'>                 
                  <input type="password" class="form-control form-control-lg" placeholder="Password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} >
                  </input>
                </div>
                <br/>
                <br/>
                <button type="submit" class="btn btn-outline-dark btn-block" >Login</button>
                <br/>
                <button onClick={loginToggle} class="btn btn-outline-dark btn-block">{login ? 'Signup' : 'Login'}</button> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

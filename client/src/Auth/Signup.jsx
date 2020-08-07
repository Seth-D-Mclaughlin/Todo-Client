import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div>
      <h1>Sign Up</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/> 
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
           
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  )
}

export default Signup;
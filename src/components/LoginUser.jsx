

import { useState } from 'react';
import { loginUser } from '../service/api';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyContainer = styled(FormGroup)`
   width: 50%;
  margin: 5% auto 0 auto;

  div {
    margin-top: 20px;
  }

  #Text-Header {
    margin-left: 35%;
  }

  #TextBox-Border {
    border: 1px solid black;
  }
`;


let LoginUser = () => {
  let [user, setUser] = useState({
    username: '',
    password: ''
  });
  let navigate = useNavigate();

  let onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleLogin = async () => {
    try {
      let response = await loginUser(user);
      if (response.status === 200) {
        navigate('/all'); // Redirect to the AllUsers page upon successful login
      } else {
        // Handle login error
        console.log('Login failed. Invalid credentials.');
      }
    } catch (error) {
      console.log('Error while calling login API', error);
    }
  };

  return (
    <MyContainer>
      <div id="Text-Header">
        <Typography variant="h4">Login</Typography>
      </div>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={onValueChange} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input type="password" onChange={onValueChange} name="password" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </FormControl>
    </MyContainer>
  );
};

export default LoginUser;











import { useState } from 'react';
import { addUser } from '../service/api';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

let MyContainer = styled(FormGroup)`
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




let AddUser = () => {
  let [user, setUser] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
  });
  let navigate = useNavigate();

  let onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleAddUser = async () => {
    try {
     
      let response = await addUser(user);
      if (response.status === 201) {
        navigate('/login'); 
      } else {
      
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error while calling addUser API', error);
    }
  };

  return (
    <MyContainer>
      <div id="Text-Header">
        <Typography variant="h4">Add User</Typography>
      </div>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={onValueChange} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input type="password" onChange={onValueChange} name="password" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input type="email" onChange={onValueChange} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onValueChange} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={handleAddUser}>
          Register
        </Button>
      </FormControl>
    </MyContainer>
  );
};



export default AddUser;


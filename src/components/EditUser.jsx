

// import { useState, useEffect } from 'react';
// import { editUser, getUser } from '../service/api';
// import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';


import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, FormControl, InputLabel, Input, Button, styled } from '@mui/material';
import { getUser, editUser } from '../service/api';


const MyContainer = styled(FormControl)`
width: 50%;
margin: 5% auto 0 25%;



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

const EditUser = () => {
    const [user, setUser] = useState({
      name: '',
      username: '',
      email: '',
      phone: ''
    });
  
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      loadUserDetails();
  
      // Cleanup function to reset the state when the component is unmounted
      return () => {
        setUser({
          name: '',
          username: '',
          email: '',
          phone: ''
        });
      };
    }, []);
  
    const loadUserDetails = async () => {
      try {
        const response = await getUser(id);
        setUser(response.data);
      } catch (error) {
        console.log('Error while loading user details', error);
      }
    };
  
    const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const editUserDetails = async () => {
      try {
        await editUser(id, user);
        navigate('/all'); // Redirect to the AllUser component
      } catch (error) {
        console.log('Error while editing user', error);
      }
    };
  
    return (
      <MyContainer>
        <div id="Text-Header">
          <Typography variant="h4">Edit User</Typography>
        </div>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} name="name" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input
            onChange={onValueChange}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" value={user.email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={onValueChange} name="phone" value={user.phone} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={editUserDetails}>
            Edit User
          </Button>
        </FormControl>
      </MyContainer>
    );
  };
  
  export default EditUser;
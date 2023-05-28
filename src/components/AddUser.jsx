

import { useState } from 'react';
import { addUser } from '../service/api';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

let MyContainer = styled(FormGroup)`

width: 50%;
margin:5% auto 0 auto;
div {
  margin-top: 20px;
}

#Text-Header {

    margin-left: 35%;
}
#TextBox-Border {

    border: 1px solid black;
}
`

let myValue = {

    name: '',
    username: '',
    email: '',
    phone: ''
}



let AddUser = () => {

    let [user, setUser] = useState(myValue);

    let navigate = useNavigate();

    let onValueChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });


    }

    let addUserDetails = async () => {

        await addUser(user);

        navigate('/all');

    }

    return (

        <MyContainer>
            <div id="Text-Header">
                <Typography variant='h4'>Add User</Typography>
            </div>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>

        </MyContainer>
    )



}

export default AddUser;


import { useState, useEffect } from 'react';
import { editUser, getUser } from '../service/api';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';



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



let EditUser = () => {

    let [user, setUser] = useState(myValue);

    let navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {

        loadUserDetails();

    }, []);

    let loadUserDetails = async () => {

        let response = await getUser(id);
        setUser(response.data);

    }


    let onValueChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });


    }

    let editUserDetails = async () => {

        await editUser(user, id);

        navigate('/all');

    }



    return (

        <MyContainer>
            <div id="Text-Header">
                <Typography variant='h4'>Edit User</Typography>
            </div>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>

        </MyContainer>
    )



}

export default EditUser;
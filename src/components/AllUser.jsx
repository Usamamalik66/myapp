import { Table, TableBody, TableCell, TableRow, TableHead, styled, Button } from "@mui/material";

import { getUsers, deleteUser } from "../service/api";

import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';


let StyledTable = styled(Table)`

   width: 90%;
   margin: 50px auto 0 auto ;

`

let THead = styled(TableRow)`

background: #000000;

& > th {

    color: #fff;
    font-size:18px;
}
`

let TBody = styled(TableRow)`
  & > td {

    font-size: 15px;
  }

`


let AllUsers = () => {

    let [users, setUsers] = useState([])

    useEffect(() => {

        getAllUsers();

    }, [])

    let getAllUsers = async () => {

        let response = await getUsers();

        setUsers(response.data);

    }

    let deleteUserDetails = async (id) => {

        await deleteUser(id);
        getAllUsers();

    }
    return (

        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>


                </THead>
            </TableHead>
            <TableBody>
                {

                    users.map(user => (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;
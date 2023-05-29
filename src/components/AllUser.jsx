



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { useLocation } from 'react-router-dom'; // Import useLocation


let StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

let THead = styled(TableRow)`
  background: #000000;

  & > th {
    color: #fff;
    font-size: 18px;
  }
`;

let TBody = styled(TableRow)`
  & > td {
    font-size: 15px;
  }
`;

let AllUser = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation(); // Use useLocation hook

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (location.state) {
      const updatedUser = location.state;
      updateUserData(updatedUser);
    }
  }, [location.state]);

  let getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log('Error while fetching users', error);
    }
  };

  let updateUserData = (updatedUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        if (user._id === updatedUser._id) {
          return { ...user, ...updatedUser }; // Merge the updated fields into the existing user object
        }
        return user;
      });
      return updatedUsers;
    });
  };

  let deleteUserDetails = async (id) => {
    try {
      await deleteUser(id);
      getAllUsers();
    } catch (error) {
      console.log('Error while deleting user', error);
    }
  };

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
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;




import axios from 'axios';

let baseURL = 'http://localhost:8000';

export let addUser = async (user) => {
  try {
    return await axios.post(`${baseURL}/add`, user);
  } catch (error) {
    console.log('Error while calling addUser API', error);
  }
};

export let getUsers = async () => {
  try {
    return await axios.get(`${baseURL}/all`);
  } catch (error) {
    console.log('Error while calling getUsers API', error);
  }
};

export let getUser = async (id) => {
  try {
    return await axios.get(`${baseURL}/${id}`);
  } catch (error) {
    console.log('Error while calling getUser API', error);
  }
};

export let editUser = async (id, user) => {
  try {
    return await axios.put(`${baseURL}/${id}`, user);
  } catch (error) {
    console.log('Error while calling editUser API', error);
  }
};

export let deleteUser = async (id) => {
  try {
    return await axios.delete(`${baseURL}/${id}`);
  } catch (error) {
    console.log('Error while calling deleteUser API', error);
  }
};

export let loginUser = async (user) => {
  try {
    return await axios.post(`${baseURL}/login`, user);
  } catch (error) {
    console.log('Error while calling loginUser API', error);
  }
};

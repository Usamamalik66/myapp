

import axios from 'axios';


let URL = 'http://localhost:8000';

export let addUser = async (data) => {

    try {

        return await axios.post(`${URL}/add`, data);

    } catch (error) {

        console.log('error while calling add User API', error);
    }
}

export let getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {

        console.log('Error while calling getUsers API', error)

    }
}

export let getUser = async (id) => {

    try {
        return await axios.get(`${URL}/ ${id}`)

    } catch (error) {
        console.log('Error while calling getUser api', error);
    }
}

export let editUser = async (user, id) => {

    try {
        return await axios.put(`${URL}/ ${id}`, user)

    } catch (error) {
        console.log('Error while calling editUser api', error);
    }
}

export let deleteUser = async (id) => {

    try {
        return await axios.delete(`${URL}/ ${id}`)

    } catch (error) {
        console.log('Error while calling deleteUser api', error);
    }
}
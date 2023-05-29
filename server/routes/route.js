

import express from 'express';

import { addUser, getUsers, getUser, editUser, deleteUser, loginUser } from '../controller/user-controller.js';


let router = express.Router();

router.post('/add', addUser);
router.post('/login', loginUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;  
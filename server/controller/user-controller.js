

import User from '../model/user-model.js'

export let addUser = async (request, response) => {

    let user = request.body;

    let newUser = new User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {

        response.status(409).json({ message: error.message });

    }
}

export let getUsers = async (request, response) => {

    try {

        let users = await User.find({});
        response.status(200).json(users);

    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export let getUser = async (request, response) => {

    try {

        //  let user = await User.find({_id: request.params.id});
        let user = await User.findById(request.params.id);
        response.status(200).json(user);

    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export let editUser = async (request, response) => {

    let user = request.body;

    let editUser = new User(user);

    try {

        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);

    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export let deleteUser = async (request, response) => {

    try {

        await User.deleteOne({ _id: request.params.id });

        response.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


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
    const { id } = request.params;
    const user = request.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
      response.status(200).json(updatedUser);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
  
  
export let deleteUser = async (request, response) => {

    try {

        await User.deleteOne({ _id: request.params.id });

        response.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export let loginUser = async (request, response) => {
    let { username, password } = request.body;
  
    try {
      let user = await User.findOne({ username });
  
      if (user) {
        if (user.password === password) {
          response.status(200).json({ message: 'Login successful' });
        } else {
          response.status(401).json({ message: 'Invalid password' });
        }
      } else {
        response.status(401).json({ message: 'Invalid username' });
      }
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  };
  
  



  
  
  
  
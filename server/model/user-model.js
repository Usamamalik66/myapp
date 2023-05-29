

import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';


let userSchema = mongoose.Schema({

  name: String,
  username: String,
  password: String,
  email: String,
  phone: String
})


autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, 'user');


let User = mongoose.model('User', userSchema);


export default User;
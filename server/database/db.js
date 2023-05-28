import mongoose from 'mongoose';


let Connection = async () => {

    let URL = 'mongodb+srv://user:user123@crud-app.scd6gen.mongodb.net/?retryWrites=true&w=majority';

    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected sucessfully')
    } catch (error) {

        console.log('Error while connecting with the Database', error);

    }
}

export default Connection;
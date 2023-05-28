

import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

import cors from 'cors';

import Connection from './database/db.js';

let app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

let PORT = 8000;



let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Database is running on PORT ${PORT}`));



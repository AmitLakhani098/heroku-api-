import express from 'express';
import bodyParser from 'body-parser';
import  '../src/database/conn.js'; 
import studentRoute from '../src/routes/student.js';
import dotenv from "dotenv";


dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const app = express();


const PORT =  process.env.PORT || 5000;

app.use(bodyParser.json());
// app.use(json());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(studentRoute);

app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`);
});
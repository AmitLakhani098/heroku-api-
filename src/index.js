import express from 'express';
import bodyParser from 'body-parser';
import  '../src/database/conn.js'; 
import studentRoute from '../src/routes/student.js';

const app = express();

const PORT =  5000;

app.use(bodyParser.json());
// app.use(json());

app.use(express.json());
app.use(studentRoute);

app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`);
});
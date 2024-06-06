import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import indexRoute from './routes/index.js';

dotenv.config();
const app = express();

//Middleware JSON
app.use(bodyParser.json());

//MongoDb Connection
const uri = process.env.CONNECTION;
mongoose.connect(uri)
.then( () => {
    const dbName = mongoose.connection.name;
    const hostName = mongoose.connection.host;
    console.log(`|| Database Connected || \n|| HostName:${hostName} ||\n|| Database Name: ${dbName} ||`);
});

//Routes
app.use('/api',indexRoute);

//Express Server
const port = process.env.PORT;
app.listen(port,
    console.log(`Server Running On Port ${port}`)
);

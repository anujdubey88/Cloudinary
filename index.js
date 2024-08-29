import express from 'express'
import cloudRouter from './Routes/fileUpload.js'
import {cloudConnect} from './config/cloudConnect.js'
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
});

cloudConnect();
const app = express()
const PORT = 4000;


app.use('/upload',cloudRouter)

app.listen(PORT, () =>(
  console.log(`Server is running on port ${PORT}`)
));

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/user');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

mongoose.connect('mongodb://localhost:27017/phishing').then(() => {
    console.log("connection established");
}).catch(err => {
    console.log(err);
})


app.use(cors({
    origin: "*"
}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/user', userRouter)

app.listen(8080, () => {
    console.log('server listening on port 8080');
})
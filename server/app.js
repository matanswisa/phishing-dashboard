
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/user');
const phishingRouter = require('./routes/phishing');
const path = require('path');



const { sendMail } = require('./services/mailer')

dotenv.config();

mongoose.connect('mongodb://localhost:27017/phishing').then(() => {
    console.log("connection established");
}).catch(err => {
    console.log(err);
})

sendMail().then(() => {
    console.log('sent mail');
}).catch(err => {
    console.log(err);
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes
app.use('/api/user', userRouter)
app.use('/api/', phishingRouter)

app.listen(8080, () => {
    console.log('server listening on port 8080');
})
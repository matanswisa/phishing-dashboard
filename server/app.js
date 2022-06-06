
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('server listening on port 8080');
})
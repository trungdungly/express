const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/form.html");
});

app.post('/result', (req, res) => {

    res.send(`Welcome ${req.body.name} and your age is ${req.body.age}`);
});

app.listen(3000);


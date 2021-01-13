const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv/config');


//middleware
app.use(cors());
app.use(bodyParser.json());

//spartan route
const spartanRoute = require('./routes/spartans');
app.use('/spartans', spartanRoute);

//routes
app.get('/', function(request, response) {
    response.send('UNSC Database');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to UNSC Database!')
);


app.listen(5000);
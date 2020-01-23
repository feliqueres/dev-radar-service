const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


// query param: request.query
// path param: request.params
// body: request.body

const app = express();

mongoose.connect('mongodb+srv://admin:Rgj6YJhyomtfpnpp@cluster0-aogyt.mongodb.net/semana-omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json())
app.use(routes);


app.listen(3333);
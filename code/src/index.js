const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

// query param: request.query
// path param: request.params
// body: request.body

const app = express();

// set the URL string connection
mongoose.connect(
  "",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333);

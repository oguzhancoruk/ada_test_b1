const express = require("express");
const mongoose = require('mongoose');
var router = require("./routes/userRoutes");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


const app = express();

mongoose.connect('mongodb+srv://coruk61:karizma61@cluster0.svxec3r.mongodb.net/ada-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("db connecty"));

const port = 9000
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/users', router);
app.get("/", (req, res) => {
  res.send("hello world");
})

app.listen(port, () => {
  console.log(`example app listtening on port ${port}`)
})
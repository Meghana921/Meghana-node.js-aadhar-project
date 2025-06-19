const pool = require("./db")
pool.connect;

const express = require('express');
const app = express();
const aadhar_routes = require("./routes/route");
const setupCronJobs = require('./routes/cronService');

setupCronJobs();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/',aadhar_routes);


app.listen(3000)
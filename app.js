const express = require('express');
const route  = require('./src/routes/api');
const app = express();
const boydParser = require('body-parser');
const morgan = require('morgan');
const path = require('path')

// security middleware 
const helmet = require('helmet');
const xss =require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const cors =require('cors');
const ratelimit = require('express-rate-limit');

// database 
const mongoose = require('mongoose');

// security middleware impliment 
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

// body parser 
app.use(boydParser.json());
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(morgan('dev'))

// ratelimit
const ratelimiter = ratelimit({
    windowMs : 15 * 60 * 1000,
    msx : 20
})

// database connection =========

mongoose.connect("mongodb+srv://mszaman:mszaman@cluster0.k61kwgo.mongodb.net/test")
.then(
    console.log("Connected")
)
.catch((err) => {
    console.log("Error", err)
})


// frondend tagging =============
// app.use(express.static('./client/dist'));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + ('./client/dist/index.html')))
// })

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});


// router use ==================
app.use('/api/v1', route)

module.exports = app;

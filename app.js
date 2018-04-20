const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();
mongoose.connect(process.env.mongoDB);

// Check if MongoDB connection is OK
mongoose.connection.on('error', () => {
    console.log("Can't connect to the MongoDB Database.");
    process.exit();
});

/**
 * GET API. Returns product data in JSON format.
 */
app.get('/product', (req, res) => {
    Product.findById(process.env.productID, (error, data) => {
        if(error) res.json(null);

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.json(data);
    });
});

app.listen(5000, console.log('Server is listening on port 5000'));
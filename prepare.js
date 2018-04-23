/**
 * Check MongoDB connection.
 * Check Shopify API connection.
 * Save/Update Shopify product into the MongoDB.
 */

const dotenv = require('dotenv').config();
const Shopify  = require('shopify-api-node');
const mongoose = require('mongoose');
const Product = require('./models/product');

// Check MongoDB connection.

mongoose.connect(process.env.mongoDB);

mongoose.connection.on('error', () => {
    console.log("Can't connect to the MongoDB Database.");
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log('Check 1. MongoDB connection is OK.');
    prepare();
});


/**
 * Tries to get Shopify product data.
 * If data exists, tries to save it in the MongoDB.
 *
 * todo: check if image_src exists; create a fallback
 */
async function prepare() {
    let product = await getShopifyProductData();

    if(product === null) {
        console.log(`Can't get product with "${process.env.productID}" ID.`);
        console.log("Either product with this ID doesn't exist OR there is an issue with .env settings file.");
        process.exit();
    }

    console.log('Check 2. Shopify API connection is OK.');

    try {
        saveProduct({
            id: product.id,
            title: product.title,
            body_html: product.body_html,
            image_src: product.images[0].src, // Grab only the first image
            price: product.variants[0].price // Grab only the first price
        });
    } catch (e) {
        console.log("Can't update product within MongoDB.");
        process.exit();
    }
}

/**
 * Save/update product data in MongoDB.
 *
 * @param {object} productData
 */
function saveProduct(productData) {
    Product.findByIdAndUpdate(
        productData.id, // Product ID

        productData, // Product Data

        { upsert: true, new: true }, // Create product if doesn't exist

        (err, result) => {
            if(err) throw error;

            console.log(`Done! Product with ${productData.id} was successfully saved.`);
            process.exit();
        });
}

/**
 * Get Shopify product data by ID specified in .env file.
 *
 * @returns null|object Object with Shopify product data. On error null will be returned.
 */
function getShopifyProductData() {
    const shopify = new Shopify ({
        shopName: process.env.shopName,
        apiKey: process.env.apiKey,
        password: process.env.password
    });

    try {
        return shopify.product.get(process.env.productID);
    } catch (e) {
        return null; // No data
    }
}
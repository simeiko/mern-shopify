const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Define product schema.
 */
const productSchema = new Schema({
    id: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    body_html: {
        required: true,
        type: String
    },
    image_src: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    created_at: Date,
    updated_at: Date
});

/**
 * Add the dates on save ( updated_at & created_at )
 */
productSchema.pre('save', next => {
    let currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at) this.created_at = currentDate;

    next();
});


module.exports = mongoose.model('Product', productSchema); // Export module
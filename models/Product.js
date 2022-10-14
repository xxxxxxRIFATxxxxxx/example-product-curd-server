// Dependencies
const mongoose = require('mongoose');

// Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 255,
        trim: true
    },

    price: {
        type: Number,
        default: 0,
        trim: true
    },

    description: {
        type: String,
        maxlength: 255,
        trim: true
    },

    images: [String]
},

    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

// Export
module.exports = Product;
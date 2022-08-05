const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title must be required!"],
        minlength: [3, "Title must be at leat 3 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Must include a price"],
        min: [1, "Price must be at least 2 characters!"]
    },
    description: {
        type: String,
        required: [true, "Must include a description!"],
        min: [5, " Description must be at least 5 characters!"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

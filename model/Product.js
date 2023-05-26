const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  pricePerMonth: {
    type: Number,
    required: true,
  },
  paused: {
    type: Boolean,
    default: false,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;

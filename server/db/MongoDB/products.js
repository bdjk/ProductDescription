const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  brand: String,
  product_name: String,
  product_price: String,
  product_rating: mongoose.Schema.Types.Decimal128,
  product_loves: Number,
  product_img: String
});

let Product = mongoose.model('Product', productSchema);

new Product();
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 }, // Optional: Discount on the product
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String }], // URLs of the product images
  stock: { type: Number, required: true, default: 0 }, // Product stock count
  rating: { type: Number, default: 0 }, // Rating out of 5
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  tags: [{ type: String }], // Example: 'Personalized', 'Gift for Him', etc.
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

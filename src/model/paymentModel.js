const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  paymentAmount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  transactionId: { type: String, unique: true }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;

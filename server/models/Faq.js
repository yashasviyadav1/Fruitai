// models/faq.js
const mongoose = require('mongoose');

// Define the FAQ schema
const faqSchema = new mongoose.Schema({
  fruit: {
    type: String,
    required: true
  },
  image: {
    type: String,  // URL for the image
    default: 'https://i.ibb.co/SRwr9RS/jamie-street-tb5-A-QTI6xg-unsplash.jpg'
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

// Create and export the model
const Faq = mongoose.model('Faq', faqSchema);
module.exports = Faq;
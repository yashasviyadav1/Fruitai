const express = require('express');
const router = express.Router();

const Faq = require('../models/Faq.js');


// GET /faqs: Fetch all FAQs
router.get('/faqs', async (req, res) => {
    try {
      const faqs = await Faq.find();
      res.json(faqs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
  
// POST /faqs: Create a new FAQ
router.post('/faqs', async (req, res) => {
  const { fruit, image, question, answer } = req.body;

  const newFaq = new Faq({
    fruit,
    image,   // Include the image URL
    question,
    answer
  });

  try {
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// GET /faqs/:id: Fetch a single FAQ by ID
router.get('/faqs/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).send('FAQ not found');
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /faqs/:id: Update an FAQ by ID
router.put('/faqs/:id', async (req, res) => {
  const { fruit, image, question, answer } = req.body;

  try {
    const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, {
      fruit,
      image,  // Include the image URL in the update
      question,
      answer
    }, { new: true });

    if (!updatedFaq) return res.status(404).send('FAQ not found');
    res.json(updatedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /faqs/:id: Delete an FAQ by ID
router.delete('/faqs/:id', async (req, res) => {
    try {
      const deletedFaq = await Faq.findByIdAndDelete(req.params.id);
      if (!deletedFaq) return res.status(404).send('FAQ not found');
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});   


module.exports = router;
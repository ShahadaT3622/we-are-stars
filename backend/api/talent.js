const express = require('express');
const router = express.Router();
const Talent = require('../models/talent');

// Create a new talent profile
router.post('/create', async (req, res) => {
  try {
    const talent = new Talent(req.body);
    await talent.save();
    res.status(201).send(talent);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all talents
router.get('/', async (req, res) => {
  try {
    const talents = await Talent.find({});
    res.send(talents);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

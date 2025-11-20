const express = require('express');
const router = express.Router();
const AddressModel = require('../Models/address');

router.post('/save', async (req, res) => {
  try {
    const newAddress = new AddressModel(req.body);
    await newAddress.save();
    res.status(201).json({ message: "Address saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const addresses = await AddressModel.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

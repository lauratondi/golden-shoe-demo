const express = require('express');
const router = express.Router();
let Axios = require('axios');
const Product = require('../../models/Product');

// @route GET api/women
router.get('/', async (req, res) => {
  try {
    const product = await Product.find();
    console.log('connetcing to women');
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

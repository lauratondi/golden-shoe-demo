const express = require('express');
const router = express.Router();
let Axios = require('axios');
const Product = require('../../models/Product');

// @route GET TEST
// router.get('/', (req, res) => res.send('Products route'));

// @route GET api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    console.log('connetcing to product');
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// @route GET api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log('Single product fetched');
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

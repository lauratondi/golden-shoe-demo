const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// @route GET TEST
// router.get('/', (req, res) => res.send('Products route'));

// @route GET api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send('Sever error');
  }
});

module.exports = router;

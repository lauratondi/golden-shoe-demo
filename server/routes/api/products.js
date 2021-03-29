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

// router.get('/', function (req, res) {
//   console.log('fetching ');
//   Product.find(function (err, product) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(product);
//     }
//   });
// });

module.exports = router;

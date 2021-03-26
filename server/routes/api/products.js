const express = require('express');
const router = express.Router();

// @route GET api/products
router.get('/', (req, res) => res.send('Products route'));

module.exports = router;

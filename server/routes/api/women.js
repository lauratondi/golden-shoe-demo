const express = require('express');
const router = express.Router();

const Woman = require('../../models/Woman');

// @route GET api/women
router.get('/', async (req, res) => {
  try {
    const women = await Woman.find();
    console.log('connetcing to women');
    res.json(women);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// @route GET api/women/:id
router.get('/:id', async (req, res) => {
  try {
    const woman = await Woman.findById(req.params.id);
    console.log('Single woman fetched');
    res.json(woman);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

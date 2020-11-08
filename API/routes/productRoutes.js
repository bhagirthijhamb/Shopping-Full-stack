const express = require('express');
const router = express.Router();
const products = require('../data');

router.get('/', (req, res) => {
    res.json(products)
    // res.status(200).json({ products: products })
})

module.exports = router;
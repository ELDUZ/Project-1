var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var productModel = require('../models/productModel');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const product = await productModel.find({});
  res.status(201)
  res.json(product)
  
});

module.exports = router;

const path = require('path');
const express = require('express');

const productController=require('../controller/product');

const router = express.Router();

router.get('/add-product',productController.getAddProduct);
router.post('/add-product',productController.postAddproduct);

module.exports = router;


const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/insert-samples', productController.insertSamples);
router.get('/', productController.getAll);
router.get('/category/:category', productController.getByCategory);
router.get('/by-color/:color', productController.getByColor);

// POST route to create a new product
router.post('/', productController.createProduct);

module.exports = router;

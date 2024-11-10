const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/productos', productController.getProducts);
router.post('/productos', productController.createProduct);
router.put('/productos/:id', productController.updateProduct);
router.delete('/productos/:id', productController.deleteProduct);

module.exports = router;

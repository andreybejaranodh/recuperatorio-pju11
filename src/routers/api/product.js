const express = require('express');

const productController = require('../../controllers/api/productController');

const router = express.Router();
//esto es el issue 3 que tenia asignado pero lo realizo mi compañero 
//lo escribi para trabajar el issue 8

router.get('/', productController.index);
router.post('/', productController.create);

module.exports = router;
const express = require('express');

const productCategoryController = require('../../controllers/api/productCategoryController');

const router = express.Router();

//esto es el issue 3 que tenia asignado pero lo realizo mi compañero 
//lo escribi para trabajar el issue 8
router.get('/', productCategoryController.index);
router.post('/', productCategoryController.create);

module.exports = router;
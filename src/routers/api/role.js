const express = require('express');

const roleController = require('../../controllers/api/roleController');

const router = express.Router();

router.get('/', roleController.index);
router.post('/', roleController.create);

module.exports = router;
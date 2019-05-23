const express = require('express');
const router = express.Router();
const controller = require('../controllers/hero-controller');

router.post('/', controller.post);
router.get('/', controller.get)
router.get('/:name', controller.getByName)
router.put('/:id', controller.put);
router.delete('/:id', controller.del);

module.exports = router;
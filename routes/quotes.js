const express = require('express');

const router = express.Router();
const quotesController = require('../controllers/quotes');

/* quotes page. */
router.get('/', quotesController.viewAll);
router.post('/', quotesController.create);
router.put('/:id', quotesController.editById);
router.delete('/:id', quotesController.deleteById);

module.exports = router;

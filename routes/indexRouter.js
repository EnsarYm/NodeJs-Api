// CALL EXPRESS ROUTER
const express = require('express');
const router = express.Router();
// CALL INDEXCONTROLLER
const indexController = require('../controllers/indexController');
// ROUTES GET
router.get('/',indexController.getHomePage);
router.get('/:id',indexController.getPage);


// EXPORT ROUTER
module.exports = router;

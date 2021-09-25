// CALL EXPRESS ROUTER
const router = require('express').Router();
// CALL INDEXCONTROLLER
const indexController = require('../controllers/indexController');
// INSERT ROUTES
router.get('/',indexController.getHomePage);
router.get('/:id',indexController.getPage);


// EXPORT ROUTER
module.exports = router;

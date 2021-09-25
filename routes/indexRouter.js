// CALL EXPRESS ROUTER
const router = require('express').Router();
// CALL INDEXCONTROLLER
const indexController = require('../controllers/indexController');
const adminController = require('../controllers/adminController');
// ROUTES GET
router.get('/',indexController.getHomePage);
router.get('/:id',indexController.getPage);
// ROUTES POST
router.post('/admin/post/add', adminController.addPost);

// EXPORT ROUTER
module.exports = router;

// CALL EXPRESS ROUTER
const router = require('express').Router();
// CALL CONTROLLER

const adminController = require('../controllers/adminController');
// ROUTES POST
router.post('/post/add', adminController.addPost);

// EXPORT ROUTER
module.exports = router;

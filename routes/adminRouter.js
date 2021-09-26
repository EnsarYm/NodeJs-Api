// CALL EXPRESS ROUTER
const express = require('express');
const router = express.Router();

// CALL CONTROLLER

const adminController = require('../controllers/adminController');
//const adminHunter = require('../middleware/adminMiddleware');

// ROUTES POST
router.post('/post/add', adminController.addPost);


// EXPORT ROUTER
module.exports = router;

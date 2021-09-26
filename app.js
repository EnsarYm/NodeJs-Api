// CALL EXPRESS JS
const express = require('express');
const app = express();
// CALL DATABASE
const db = require('./database/db');
// Calling path
const path = require('path');
// IMPORTANT******
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// INSERT ROUTES
const indexRouter = require('./routes/indexRouter');
const adminRouter = require('./routes/adminRouter');
app.use('/',indexRouter);
app.use('/admin',adminRouter);


app.listen(3000, () => {
    console.log('Server Online');
})

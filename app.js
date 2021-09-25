// CALL EXPRESS JS
const express = require('express');
const app = express();
// CALL DATABASE
const db = require('./database/db');
// INSERT ROUTES
const indexRouter = require('./routes/indexRouter');
app.use('/',indexRouter);


app.listen(3000, () => {
    console.log('Server Online');
})

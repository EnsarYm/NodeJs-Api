// CALL MONGOOSE
const mongoose = require('mongoose');
// CONNECT TO DATABESE
mongoose.connect('mongodb://localhost/ApiDB', {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log("DB CONNECTION SUCCESS"))
.catch(err => console.log('DB ERROR ' + err))
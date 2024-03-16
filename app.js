const express = require('express');
const { router } = require('./routes/router');
const { dbConnection } = require('./config/dbConnect');
const { User } = require('./model/userModel');

const app = express();

app.use('/', router);

// User.sync();
User.sync({ force: true })
// User.sync({ alter: true })

app.listen(3000, async() => {
    console.log(`server is listen at port : 3000`);
   await dbConnection();
});


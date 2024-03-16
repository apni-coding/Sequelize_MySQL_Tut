const express = require('express');
const { router } = require('./routes/router');
const { dbConnection } = require('./config/dbConnect');

const app = express();

app.use('/', router);

app.listen(3000, () => {
    console.log(`server is listen at port : 3000`);
    dbConnection();
});


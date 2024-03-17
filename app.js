const express = require('express');
const { router } = require('./routes/router');
const { dbConnection, sequelize } = require('./config/dbConnect');
// const { User } = require('./model/userModel');
// const { UserDetails } = require('./model/userDetails');


const app = express();

app.use('/', router);

// User.sync();
// User.sync({ force: true })
// User.sync({ alter: true });
// UserDetails.sync({force: true});

 sequelize.sync({ force: true });

app.listen(3000, async() => {
    console.log(`server is listen at port : 3000`);
   await dbConnection();
});


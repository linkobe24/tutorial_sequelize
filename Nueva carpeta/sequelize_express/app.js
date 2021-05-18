const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');

//middleware
app.use(express.json());


//settings
const PORT = process.env.PORT || 3000;

//Routes
app.get('/', (req, res) =>{
    // User.create({
    //     name: "MJ",
    //     birthday: new Date(1999, 8, 28)
    // }).then(user => {
    //     res.json(user);
    // })
    User.findAll().then(users =>{
        res.json(users);
    })
})

//server
app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);

    //Connect to database
    //force true: DROP TABLES
    sequelize.sync({force: false}).then(() =>{
        console.log("Connected to database");
    }).catch(err =>{
        console.log(`An error has ocurred ${err}`);
    })
});
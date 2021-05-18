const express = require('express');
const app = express();
const sequelize = require('./database/db');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//settings
const PORT = process.env.PORT || 3000;

//Routes
app.get('/', (req, res) =>{
    res.json('hola mundo');
});

app.use('/api/posts', require('./routes/posts'));

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
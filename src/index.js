const express = require('express');
const bodyParser = require('body-parser');

const PORT =3000;
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () =>{
    //create the expresss server

    const app =express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api' , ApiRoutes);

    app.listen(PORT , async() =>{
        console.log(`server is started at ${PORT}`);
    });

}

setupAndStartServer();
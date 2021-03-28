const express = require('express');

//todo init express
const app = express();

//todo create your endpoints/route handlers
app.get('/',function (req,res){

    //todo Fetch from database
    // Load pages
    // Return JSON
    // Full access to request and response

    res.send('Hello World!');
})


//todo listen on a port
app.listen(5000);
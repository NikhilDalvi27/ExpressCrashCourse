//todo Bring in express
const express = require('express');
const path = require('path');
const logger = require('./Middleware/logger')


//todo initialize express
const app = express();

//todo Initialize body parser middleware
// to handle incoming json data
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



//todo The use of router...Members API Route
app.use('/api/members',require('./routes/api/members'));


//todo Init Middleware
// any time you make a request this middleware is going to run
// app.use(logger);



//todo add a Single Route
// app.get('/',(req,res)=>{
//      // res.send(`<h1>Hello World</h1>`);
//      res.sendFile(path.join(__dirname,'public','index.html'));
// })

//todo Instead of adding a single route you can use a static folder for multiple routes
// Note that USE method is to use the middleware
// Note that in Node CrashCourse we had to handle the contentType and Css Files OURSELVES
app.use(express.static(path.join(__dirname,'public')));



const PORT = process.env.PORT||5000;


//todo listen on a port
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})
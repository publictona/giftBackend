const express = require('express');
const app = express();
const PORT = 5000;
const route = require('./routes/routing.js')
const mongoose = require('mongoose')
const URL = "mongodb://localhost:27017/A"

app.use(express.json()); 

const options = {
       // Use the new unified topology (for better clustering support)
  };

mongoose.connect(URL , options)
.then(()=> console.log("mongodb not Connected"))
.catch(error => console.error(error))

app.use('/route' ,  route)

app.listen(PORT , ()=>{
    console.log(`Express app is running on ${PORT}`)
})


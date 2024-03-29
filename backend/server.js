const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')

const app =express();

require("dotenv").config();


var corsOptions = {
    origin: "http://localhost:3001"
  };



app.use(cors(corsOptions));

app.use(express.json());

// connect to monngoDB
const db = require("./models")
const uri = process.env.ATLAS_URI ;

db.mongoose
.connect(uri ,{
    useNewUrlParser : true ,  
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
      })
      .catch(err => {
        console.error("Connection error", err);
        process.exit();
      });

      app.get("/" , (req ,res )=> {
          res.json({message : "xelcom to your application."})
      });

// routes 
require('./routs/doctor')(app);
require('./routs/patient')(app);




const port = process.env.PORT || 3000 ;
app.listen(port, () =>{
    console.log(`server is running on port : ${port}`);
});




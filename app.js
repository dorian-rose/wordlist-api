const express = require('express');
//connect with mongodb
const { connection } = require("./helpers/dbConect");

const app = express();

const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());

//to parse JSON and URLENCODED req.bodies
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//set ejs folders virtually in public
app.use(express.static(__dirname + "/public"));



app.use("/", require("./routers/wordRouters"))

//call function connects to db
connection()

//let app to listen to port 
app.listen(port, () => {
    console.log(`App listening to ${port}`)
})
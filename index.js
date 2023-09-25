// create app
const express = require("express")
const app = express();

// define PORT
require("dotenv").config()
const PORT = process.env.PORT || 3000;

// use middleware for parse data
app.use(express.json());

// import database
const dbConnect = require('./config/database');
dbConnect();

// import and mount routes 
const userRoutes = require("./routes/userRoutes")
app.use("/api/auth", userRoutes)


// start server
app.listen(PORT, (req, res)=>{
    console.log(`Server is started at the port ${PORT}`)
})

// default route
app.get('/',(req, res)=>{
    console.log('<h1>Hello ji kya hal chal</h1>')
})

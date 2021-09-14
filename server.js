const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

///const username = "<divyaanandads>";
//const password = "<Ads8050>";
//const cluster = "<DIVYA>";
//onst dbname = "usersdb";

//mongoose.connect('mongodb+srv://divyaanandads:Ads8050@cluster0.dqok6.mongodb.net/usersdb?retryWrites=true&w=majority',
  //{
    //useNewUrlParser: true,
    //useFindAndModify: false,
    //useUnifiedTopology: true
  //}, err => {
    //if(err) throw err;
    //console.log('Connected to MongoDB!!!')
   // }
//);

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


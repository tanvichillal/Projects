const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongourl = "mongodb://127.0.0.1:27017/ashraya";

main().then(() =>{
    console.log("Connected to DB successfully")
}).catch((err) =>{
    console.log(err);
})

async function main() {
    await mongoose.connect(mongourl);
    
}
app.get("/" , (req , res) =>{
    res.send("Hi am the root");
})

app.listen(8080 , () =>{
    console.log("the port is working in the background");
});



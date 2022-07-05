//in express ,we need to write require but in node
//we write nclude,import
const express = require("express");
const app=express();
//bya ause of ap,we can use many function


//now we are creating our own server

app.get("/mm",function(req,res){
    res.send("jjj");
})

app.listen(3003,function(req,res){
    console.log("helllloo")
   
});


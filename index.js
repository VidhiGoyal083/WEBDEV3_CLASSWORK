const express = require("express");
const app = express();
const packages = require("./data/tour");

app.get("/",(req, res)=>{
    res.send("hiee !!! welcome to my server");
});

app.get("/packages",(req, res)=>{
    res.json(packages);
});

app.get("/packages/:id",(req, res)=>{
    const id = Number(req.params.id);
    const onePack = packages.find(item=>item.id === id);
    res.json(onePack); 
    
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

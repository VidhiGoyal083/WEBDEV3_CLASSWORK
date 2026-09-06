const express=require('express');

const app=express();
app.use(express.json())


app.get('/',(req,res)=>{
    
    res.send({'msg':"Yo bro"}) 
});

app.post('/submit',(req,res)=>{
    res.send("This is the post method")
    console.log(req.body)
})

app.listen(3000,()=>{
    console.log("Server is running")
})
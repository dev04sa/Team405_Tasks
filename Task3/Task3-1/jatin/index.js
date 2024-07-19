const express=require("express");
const app=express();
app.get('/', (req,res)=>{
    return res.send("hello world - it's home page ");
});
app.get('/about', (req,res)=>{
    return res.send("hello world - it's about page");
});

app.listen(8000, ()=> console.log("A server is started !"));

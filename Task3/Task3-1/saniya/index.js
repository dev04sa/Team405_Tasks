const express = require('express');
const app = express();

app.get( '/getRequest',function(req,res){
res.send("<h1>Hello World !!</h1>");
});
app.listen(5000,()=>{
    console.log("Hello world using get method.");
})


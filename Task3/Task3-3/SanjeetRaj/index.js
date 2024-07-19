const bodyParser = require("body-parser")
const express=require("express")
const mongoose=require("mongoose")

const project=require("./routes/projects")
const constants=require("./routes/constants")
require("dotenv").config()

const DB_URL=process.env.DB_URL

const app =express()

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.set('view engine', 'pug');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/",constants)
app.use("/project",project)

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})
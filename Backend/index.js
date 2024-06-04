const express= require("express")
require("dotenv").config()
const connect=require("./Database/Database.js")
const router=require('./Router/Router.js')
const cookiesParser=require("cookie-parser")


const app=express();
connect()




app.use(cookiesParser())
app.use(express.json())

app.use('/api',router)

app.get('/',(req,res)=>
{
    res.send("authentication page")
})
const port=process.env.port || 7000

app.listen(port,()=>{
    console.log(`this port is listening to ${port}`);
})
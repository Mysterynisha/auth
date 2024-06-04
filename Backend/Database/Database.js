const  mongoose = require("mongoose");


async function connect()
{
 try {
       await mongoose.connect(`mongodb+srv://460nisha:${process.env.password}@cluster0.wkga1xj.mongodb.net/authentication`)
       console.log("mongodb connection successfull");
 } catch (error) {
    console.log("mongodb connection failed");
 }
}

module.exports=connect
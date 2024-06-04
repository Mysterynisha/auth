const  mongoose = require("mongoose");
const validator=require("validator")


const authenticationSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Username is Required"],
            unique:[true,"Username must be unique"]
        },

        email:{
            type:String,
            required:[true,"Email is required"],
            unique:[true,"Email must be unique"],
            valdate:{
                validator:validator.isEmail,
                message:"Invalid email format"
            }
        },
        password:
        {
            type:String,
             required:[true,"Password is Required"],
             minlength:[6,"password length should be greater than 6"]
        }
    }
)


const authenticate=mongoose.model("authenticate",authenticationSchema)

module.exports=authenticate
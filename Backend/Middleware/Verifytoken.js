const jwt=require("jsonwebtoken")
const ErrorHandle=require("../Utils/Errorhandle")
const authenticate = require("../Module/Schema")
require("dotenv").config

//midddileware:- server ko request denae k phele we use middleware
const verifyToken=async(req,res,next)=>
{
    // here we are checking the client which is logging is right user or not
    //so it will check from its cookies
     try {
        const token=req.cookies?.token || req.header("Authorization")?.replace("Bareer","")
            if(!token)
        throw new ErrorHandle("Authentication failed","failed")
        

            //now for matching the token
            const decode=jwt.verify(token,process.env.jwt_password); //this will give userid:response.id
            console.log(decode);
         

            const user=await authenticate.findOne({"_id":decode.UserId})//userid is coming from payload....searching from mongodb this user is present or not
              if(!user)
                throw new ErrorHandle("Invalid user","failed")//when this will throw error then errorhandle will work
                req.user=user
            next()
     
        } catch (error) {
        res.status(404).json(
            {
                "status":error.status,
                "message":error.message
            }
        )
     }
}


module.exports=verifyToken
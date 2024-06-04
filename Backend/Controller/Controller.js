const authenticate = require("../Module/Schema")
const ErrorHandle=require("../Utils/Errorhandle")
const Error=require("../Middleware/Error")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Register=async(req,res)=>{
  try {
    let obj=req.body
    console.log(obj)
    let encrpt= await bcrypt.hash(obj.password,10)
    console.log(encrpt)

    let newobj={
        username:obj.username,
        email:obj.email,
        password:encrpt
        
    }

    let response=await authenticate.create(newobj )
    console.log(response)
    res.status(201).json(
      {
      "status":"sucess",
      "message":"Register Successfully",
      "Data":response
      }
    )
  } catch (error) {
     Error(error,req,res)
  }
    
}

const Login=async(req,res)=>{
  try {
    let obj=req.body
    console.log(obj)

    
    let response=await authenticate.findOne({"username":obj.username})
    console.log(response);
    if(!response)
      throw new ErrorHandle("user does not exit","failed");


     const ischeckpass=await bcrypt.compare(obj.password,response.password)
       console.log(ischeckpass)
    if(!ischeckpass)
      {
      throw new ErrorHandle("password does not match","failed")
      }
      
     console.log(ischeckpass);

     //jwt token generate
     let Token=jwt.sign({"UserId":response._id},process.env.jwt_password,{expiresIn:'1h'})
     console.log(Token);
     res.cookie('token',Token,{httpOnly:true,maxAge:60*60*24*10}).status(201).json({
      "status":"sucess",
      "message":"login Successfull",
      "Data":response
    }
   )
  } catch (error) {
    res.status(404).json(
      {
        "status":error.status,
        "message":error.message
      }
    )
  }
}

const logout=async(req,res)=>{
  try {
      
      
    res.clearCookie('token').status(200).json({
        "status":"sucess",
        "message":"Logout Sucessfully"});
} catch (error) {
 Error(error,req,res)
}

}



module.exports={Register,Login,logout}
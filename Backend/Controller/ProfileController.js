const authenticate = require("../Module/Schema");

const UpdateController=async(req,res)=>
{
   try{
    let obj=req.user
    console.log(obj);

    let response=await authenticate.updateOne(obj)
    console.log(response);
        res.status(201).json(
            {
            "staus":"sucess",
            "message":"Register Successfully",
            "Data":response
            }
          )
        } catch (error) {
           Error(error,req,res)
        }




}


const DeleteController=async(req,res)=>
    {
       
        try{
            let obj=req.body
            console.log(obj);
        
            let response=await authenticate.deleteOne(obj)
            console.log(response);
                res.status(201).json(
                    {
                    "staus":"sucess",
                    "message":"Register Successfully",
                    "Data":response
                    }
                  )
                } catch (error) {
                   Error(error,req,res)
                }
        
    }










module.exports={UpdateController,DeleteController}
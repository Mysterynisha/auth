import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios  from "axios";
import toast, { Toaster } from 'react-hot-toast';

export const loginController=createAsyncThunk("users/loginController",async(obj,{rejectWithValue})=>{
   try {
     let response=await axios.post("api/login",obj)
    // console.log(response);
     toast.success(response.data.message)
     return response.data
   } catch (error) {
    toast.error(error.response.data.message)
     return rejectWithValue(error.response.data)
   }
})


export const RegisterController=createAsyncThunk("users/RegisterController",async(obj,{rejectWithValue})=>{
     try {
         let response=await axios.post("api/register",obj)
        //console.log(response.data);
         toast.success(response.data.message)
         return response.data
     } catch (error) {
        console.log(error);
          toast.error(error.response.data.message)
     }

 })

 export const LogoutController=createAsyncThunk("users/LogoutController",async()=>{
   try {
    
    let response=await axios.get("api/logout")
    console.log(response);
    toast.success(response.data.message)
    return response.data

   } catch (error) {

    console.log(error);
    toast.error(error.response.data.message)
    
   }

})


export const UpdateController=createAsyncThunk("users/UpdateController",async(obj,{rejectWithValue})=>{
    try {
        let response=await axios.patch("api/update",obj)
      // console.log(response.data);
        toast.success(response.data.message)
        return response.data
    } catch (error) {
       console.log(error);
         toast.error(error.response.data.message)
    }

})



const authSlice=createSlice(
    {
        name:"users",
        initialState:{
            currentuser:null,
            isloading:false,
            isError:false,
            


        },
        reducers:{},
        extraReducers:(builder)=>
            {
                builder.addCase(loginController.pending,(state,action)=>
                    {
                     //console.log(action);
                     state.isloading=true
                    }
                )

                builder.addCase(loginController.fulfilled,(state,action)=>
                    {
                    // console.log(action.payload.Data);
                     state.isloading=false
            
                     state.currentuser=({...action.payload.Data})
                    }
                )
              
                builder.addCase(loginController.rejected,(state,action)=>
                    {
                     //console.log(action);
                     state.isloading=false
                     state.isError=true
            
                    }
                )

            
                builder.addCase(RegisterController.pending,(state,action)=>{
                    state.isloading=true;
     
                 })
                 builder.addCase(RegisterController.fulfilled,(state,action)=>{
                     state.isloading=false;
                    
                     
                  })
                
                  builder.addCase(RegisterController.rejected,(state,action)=>{
                     
                     state.isloading=false
                        state.isError=true
                        
                  })  
    

                  builder.addCase(LogoutController.fulfilled,(state,action)=>
                    {
                    // console.log(action.payload.Data);
                     state.isloading=false
                      state.isError=false
                     state.currentuser=null
                    }
                )
                



            }


    }
)


export default authSlice
import React, { useRef } from 'react'
import axios from 'axios'
import toast ,{Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RegisterController } from '../Store/AuthSlice'

const Register = () => {
  let name=useRef()
  let Email=useRef()
  let pwd=useRef()
  let confirmpwd=useRef()
  let Navigate= useNavigate()
   let dispatch= useDispatch()

  async function registerhandle(e)
  {
    e.preventDefault();
    let username=name.current.value
    let email=Email.current.value
    let password=pwd.current.value
    let confirmpassword=confirmpwd.current.value
    // console.log(username,email,password,confirmpassword);
      
       if(password!=confirmpassword)
        {
          toast.error("password doesn't match")
          return 
        }

      let data={
        username,email,password
      }
        let obj= await dispatch(RegisterController(data))
     //  console.log(obj);
      
            

         // const responseData=JSON.parse(error.message)//......................*........................
          //toast.error(error.response.data.message)
     
      }

  return (
    
    <div className=' container flex-col border-4 w-96 p-7 m-auto bg-slate-600 rounded-2xl mt-12 mb-12'>
        
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className=' text-3xl font-bold font-serif text-center text-green-600'>Register</h1>
        <div>
            <h1 className=' text-xl font-medium text-white mt-2'>UserName</h1>
            <input type='text' placeholder=' Enter UserName' className=' border-2 w-full ' ref={name}/>


            <h1 className=' text-xl font-medium text-white  mt-2'>Email</h1>
            <input type='text' placeholder=' Enter UserName' className=' border-2 w-full' ref={Email}/>  

            <h1 className=' text-xl font-medium text-white  mt-2'>Password</h1>
            <input type='password' placeholder=' Enter UserName' className=' border-2 w-full' ref={pwd}/>

            <h1 className=' text-xl font-medium text-white  mt-2'> Confirm Password</h1>
            <input type='password' placeholder=' Enter UserName' className=' border-2 w-full' ref={confirmpwd}/>
        </div>
              <button className=' text-white bg-cyan-700 mt-4 border-2 rounded-xl p-2' onClick={registerhandle}>Register</button>
    </div>
  )
}

export default Register
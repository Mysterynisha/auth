import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { loginController } from '../Store/AuthSlice'

const Login = () => {

let name=useRef()
let pwd=useRef()
let Navigate = useNavigate()
 let dispatch= useDispatch()


async function handle(e)
{
  e.preventDefault();
  let username=name.current.value
  let password=pwd.current.value

 // console.log(username,password);
 let data={
  username,password
 }
  
   
   
  let abc= await dispatch(loginController(data))
 // console.log(abc);
 // console.log(response.data.message);
 
 if(abc.payload.status==="sucess")
  {
      Navigate("/")
  }

 
}

  return (
    <div className=' container flex-col border-4 w-96 p-7 m-auto bg-slate-600 rounded-2xl mt-20 mb-20'>
       <Toaster position='top-center' reverseOrder={false}/>
        <h1 className=' text-3xl font-bold font-serif text-center text-green-600'>Login</h1>
        <div>
            <h1 className=' text-xl font-medium text-white'>UserName</h1>
            <input type='text' placeholder=' Enter UserName' className=' border-2 w-full ' ref={name}/>

            <h1 className=' text-xl font-medium text-white'>Password</h1>
            <input type='text' placeholder=' Enter UserName' className=' border-2 w-full' ref={pwd}/>
             
            <h2 className=' text-red-800'>
              <Link to={'/signup'} >Click Here to register </Link></h2>
            
            <button className=' border-2 min-w-full text-xl mt-4 font-semibold text-white bg-orange-600 p-2 rounded-xl'>Login With Google</button>

        </div>
        <button className=' border-2 mt-2 p-1 text-xl bg-teal-700 text-white rounded-xl' onClick={handle}>Login</button>
    </div>
  )
}

export default Login
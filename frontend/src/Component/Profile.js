import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { UpdateController } from '../Store/AuthSlice'

const Profile = () => {
    const Username=useRef()
    const Email=useRef()
    const Pwd=useRef()

     const dispatch=  useDispatch()

    function updatehandle(e)
    {
      e.preventDefault()
      const obj={
       username:Username.current.value,
       email:Email.current.value,
       password:Pwd.current.value
      
      }

      dispatch(UpdateController(obj))

      console.log(obj);
    }
  return (
    <div className=' container text-center text-2xl font-serif bg-slate-800 text-white'>
        <h1>Profile</h1>
        <h1>🙍</h1>
        <form className=' flex flex-col gap-2 max-w-lg mx-auto'>
        
            <input type='text' placeholder='username' className=' border-2 rounded-2xl p-3 m-4 bg-teal-700' ref={Username}/>
            <input type='email' placeholder='email' className=' border-2 rounded-2xl p-3 m-4 bg-teal-700' ref={Email} />
            <input type='password' placeholder='password' className=' border-2 rounded-2xl p-3 m-4 bg-teal-700'ref={Pwd}/>
            <button className=' border-2 rounded-2xl p-3 m-4 bg-teal-950' onClick={updatehandle}>UPDATE</button>
            <div>
            <div className='flex justify-between mt-5'>
          <span className='text-red-700 cursor-pointer'>
            Delete Account
          </span>
          <span className='text-red-700 cursor-pointer'>
            Sign Out
          </span>
        </div>
            </div>
            </form>
    </div>
  )
}

export default Profile
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LogoutController } from '../Store/AuthSlice';
const Navbar = () => {
       const dispatch=useDispatch()
  const Navigate = useNavigate()
  const [toogle,settoogle]=useState(false)
  const { currentuser } = useSelector(state => state.users);

  async function handleLogout(e) {
    e.preventDefault();
    
   const abc=await dispatch(LogoutController())
  console.log(abc);
      if(abc.payload.status==="sucess")
       {
   Navigate('/login')
  }   
  
  }


  function dropdownhandle()
  {
     settoogle(!toogle)
  }


 function handleProfile()
 {
    Navigate('/profile')
 }

  return (
    <div className=' container flex gap-8 border-2 px-4 bg-slate-900 text-white p-4  justify-between'>
      <div>
        <h1 className=' text-3xl'>Auth</h1>
      </div>
      <div className=' flex list-none gap-5'>
        <NavLink to={"/"}><li className='hover:text -43e-500'></li>Home</NavLink>
        <li className=' hover:text-red-500'>Contact</li>
        <li className=' hover:text-red-500'>About</li>


      </div>
      <div className=' flex gap-4 '>
        <div className='  flex gap-4'>
          <input type='text' /><FaSearch size={30} />
        </div>

        {
         ! currentuser ?
           
          <Link to={"/login"}>
          <div className=' px-3 p-1 font-bold bg-sky-500 rounded-lg border-2 border-solid mr-3 hover:bg-green-900 '>
             <button>Login</button>
         </div>  </Link>
            :
            <div className="relative pr-3">
            {/* .......................................Icon ...........................................................*/}
            <div className="text-center font-bold bg-sky-500 rounded-full border-2 border-solid w-14 h-14 cursor-pointer" onClick={dropdownhandle}>
              <label className="text-4xl cursor-pointer">🙎</label>
            </div>
              {/* Dropdown menu */}
              <div className={`flex flex-col mt-4 bg-slate-300 text-slate-900 p-3 absolute top-16 rounded-lg font-bold ${!toogle && 'hidden'}`}>
                <p className="mt-1 cursor-pointer border-b border-gray-400 hover:text-sky-900" onClick={handleProfile}>Profile</p>
                <p className="mt-1 cursor-pointer hover:text-sky-900" onClick={handleLogout}>Logout</p>
              </div>
           
          </div>
        
        }
      </div>
      </div>
      )
}

      export default Navbar
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className=' bg-slate-800'>
        <Navbar/>
        
        {<Outlet/>}
        <Footer/>
    </div>
  )
}

export default Layout
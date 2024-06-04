import React from 'react'

import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home'

import Login from './Component/Login'
import  Register from './Component/Register'
import Profile from './Component/Profile'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='/signup' element={<Register/>}/>
           <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
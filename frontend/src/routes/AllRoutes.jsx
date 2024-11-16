import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/profile" element={<Profile/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound />} />
     </Routes>
  )
}

export default AllRoutes
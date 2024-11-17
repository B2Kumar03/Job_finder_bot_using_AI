import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import Signup from '../pages/Signup'
import JobDetails from '../pages/JobDetails'
import Dashboard from '../pages/Dashboard'

const AllRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/profile" element={<Profile/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/jobdetails' element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
  )
}

export default AllRoutes
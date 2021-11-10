import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Students from '../pages/Students'

const routes = () => {
    return (
       <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/students" element={<Students />} />
           <Route path="/register" element={<Register />} />
       </Routes>
    )
}

export default routes

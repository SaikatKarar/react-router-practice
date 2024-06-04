import React from 'react'
import Home from '../components/Home/Home'
import User from '../components/User/User'
import About from '../components/About/About'
import { Route, Routes } from 'react-router-dom'

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Routing
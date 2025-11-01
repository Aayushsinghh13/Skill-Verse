import { useState } from 'react'
import React from 'react'
import {   Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrowRight, Users, Zap, Shield, TrendingUp, Star } from "lucide-react"
import {Link} from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import SkillSwapPage from './Pages/SkillSwap';
// import Link from "next/link"

function App() {

  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/requests" element={<SkillSwapPage/>} />
      </Routes>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import NavProducts from './components/NavProducts'
import BottomNav from './components/BottomNav'
import DeliveryLocationNav from '/src/components/DeliveryLocationNav'
import ExtraOffBanner from './components/ExtraOffBanner'
import Categories from './components/Categories'
import MegaDeals from './components/MegaDeals'
import RecommendedForYou from './components/RecommendedForYou'
import RamzanEssentials from './components/RamzanEssentials'
import MoreOnFashon from './components/MoreOnFashon'
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
import Login from './pages/Login'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
 
  
  return (
    <>
   
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
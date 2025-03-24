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

const App = () => {
 
  
  return (
    <>
    <Navbar/>
    <NavProducts/>
    <BottomNav/>
    <DeliveryLocationNav/>
    <ExtraOffBanner/>
    <Categories/>
    <MegaDeals/>
    <RecommendedForYou/>
    <RamzanEssentials/>
    
    
    </>
  )
}

export default App
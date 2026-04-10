import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from "react";
import AddAndSubstract from './pages/AddAndSubstract';
import ManualCalculator from './pages/ManualCalculator';
import About from './pages/about';

import  Contact  from './pages/contact';
import Navbar from './pages/navbar'
import Footer from './pages/footer';

export default function App() {

return (
  <>
  <Navbar/>
  <Routes>
     
    <Route path='/' element={<AddAndSubstract/>} />
    <Route path='/manualcalculator' element={<ManualCalculator/> } />
    <Route path='/about' element={<About/> } />
    <Route path='/contact' element={<Contact/> } />
  </Routes>

  <Footer/>
  </>
)

}
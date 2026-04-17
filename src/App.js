import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from "react";
import AddAndSubstract from './pages/AddAndSubstract';
import ManualCalculator from './pages/ManualCalculator';
import About from './pages/about';

import  Contact  from './pages/contact';
import Navbar from './pages/navbar'
import Footer from './pages/footer';
import Privacy from './pages/privacy';
import Converter from './pages/Converter';
import Newcal from './pages/newCal';
export default function App() {

return (
  <>
  <Navbar/> 
  <Routes>
     
    <Route path='/' element={<ManualCalculator/>} />
    <Route path='/addAndSubstract' element={<AddAndSubstract/> } />
    <Route path='/about' element={<About/> } />
    <Route path='/contact' element={<Contact/> } />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/converter" element={<Converter />} />
    <Route path="/newcal" element={<Newcal />} />
  </Routes>

  <Footer/>
  </>
)

}
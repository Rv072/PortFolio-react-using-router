import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import ContactMe from './Contactme'
import Details from './Details'
import Home from './Home'
import Myproject from './MyProject'
import Search from './Search'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Myproject" element={<Myproject />} />
      <Route path="/Contactme" element={<ContactMe />} />
      <Route path="/About" element={<About />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details/:funId/:uId" element={<Details />} />
      <Route path='*' element={<p>Something went Wrong</p>} />
    </Routes>
  </BrowserRouter>
)

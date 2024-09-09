import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Solutions from './pages/Solutions'
import Resources from './pages/Resources'
import Pricing from './pages/Pricing'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/solutions' element={<Solutions/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/pricing' element={<Pricing/>} />
      </Routes>
    </Router>
  )
}

export default App
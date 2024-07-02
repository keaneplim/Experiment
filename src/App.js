// src/App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Navbar from './components/Navbar';
//import SignUp from './components/SignUp';
import './index.css'; // Import your CSS file\

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navbar />
      <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Company' element={<About />} />

        </Routes>     
      </BrowserRouter>

        
      </div>
    </div>
  );
};

export default App;

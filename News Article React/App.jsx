import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/main';
import MH370 from './Pages/MH370';
import TW2UA from './Pages/TW2UA';
import KLM from './Pages/KLM';
import Random from './Pages/random';
import Contact from './Pages/Contact'



export default function hope() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/MH370" element={<MH370 />} />
          <Route path="/TW2UA" element={<TW2UA />} />
          <Route path="/KLM" element={<KLM />} />
          <Route path="/Random" element={<Random />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    
    );
  }



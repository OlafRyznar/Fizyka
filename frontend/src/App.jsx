import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MatematykaPodstawowy from './pages/MatematykaPodstawowy';
import MatematykaRozszerzony from './pages/MatematykaRozszerzony';
import FizykaRozszerzony from './pages/FizykaRozszerzony';
import KinematykaWektory from './pages/KinematykaWektory';
// Dodaj inne importy dla stron

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matematyka/podstawowy" element={<MatematykaPodstawowy />} />
        <Route path="/matematyka/rozszerzony" element={<MatematykaRozszerzony />} />
        <Route path="/fizyka/rozszerzony" element={<FizykaRozszerzony />} />
        <Route path="/kinematyka-wektory" element={<KinematykaWektory />} />
        {/* Dodaj inne ścieżki według potrzeb */}
      </Routes>
    </Router>
  );
}

export default App;

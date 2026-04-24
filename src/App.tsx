import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Products, Pedia, Gync, OurStory, Contact } from './pages/Placeholders';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className="relative min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pedia" element={<Pedia />} />
          <Route path="/gync" element={<Gync />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;

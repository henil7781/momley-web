import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { Gync, OurStory, Contact } from './pages/Placeholders';
import Pedia from './pages/Pedia';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pedia" element={<Pedia />} />
          <Route path="/gync" element={<Gync />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

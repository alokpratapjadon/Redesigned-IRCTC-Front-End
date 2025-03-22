import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Holidays from './components/Holidays';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Services />
        <Holidays />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
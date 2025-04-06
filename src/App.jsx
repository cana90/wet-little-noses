import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/i18n'; // This will be created

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages - We'll implement these
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import About from './pages/About';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
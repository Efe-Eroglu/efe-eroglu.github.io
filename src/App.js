import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Research from './components/Research/Research';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ThemeToggle />
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;

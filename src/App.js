import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <Menu />
      <Hero />
      <div className="mainContainer">
        <Routes>
          {/* Use the `element` prop to pass the component */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      {/* Remove these duplicate components */}
      {/* <HomePage />
      <LoginPage />
      <AboutPage /> */}
      <Footer />
    </Router>
  );
}

export default App;
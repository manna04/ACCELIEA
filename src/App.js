import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './Shared/header/Nav';
import Index from './Component/Index';
import NewsAndEvents from './Component/NewsAndEvents';
import Solutions from './Component/Solutions';
import Expertise from './Component/Expertise';
import Careers from './Component/Careers';
import About from './Component/About';
import Locations from './Component/Locations';
import Contact from './Component/Contact';
import Loader from './Component/Loader'; 


function AppRoutes() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/news-resources' element={<NewsAndEvents />} />
      <Route path='/solutions' element={<Solutions />} />
      <Route path='/expertise' element={<Expertise />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/about' element={<About />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
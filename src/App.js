// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarCustom from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import ContactUs from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Product from './Pages/Product'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  

  // Define an array of valid email and password pairs
  const [validCredentials, setValidCredentials] = useState([
    { email: 'test@gmail.com', password: '123', user_name: 'TEST', selected: false },
    { email: 'abdulmaliknoufel@gmail.com', password: '456', user_name: "Abdul Malik", selected: false },
  ]);

  return (
    <Router>
      <div>
        <NavbarCustom isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} validCredentials={validCredentials} setValidCredentials={setValidCredentials}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/:service" element={<Services />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} validCredentials={validCredentials} setValidCredentials={setValidCredentials} />} />
          <Route path="/products" element={<Product />} />
          {/* Wildcard route for unmatched routes */} 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

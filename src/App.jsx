

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from './component/HeroSection';
import About from './component/About';
import Project from './component/Project';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Services from './component/Services';
import "./App.css"
import Navbar from './component/Navbar';

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    // improve browser refresh problem using storage
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setLoading(false);
      } else {
        const res = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const userData = res?.data?.user;
        if (userData) {
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          setLoading(false);
        } else {
          setError('Failed to fetch user data');
        }
      }
    } catch (error) {
      console.log(error);
      setError('Failed to fetch user data');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div className='text-center py-10 text-2xl font-medium text-gray-700 '>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
  <>
      <Navbar/>
    <div className='max-w-7xl mx-auto'>
      <HeroSection user={user} />
      <About user={user} />
      <Project user={user} />
      <Testimonial user={user} />
      <Services user={user} />
      <Contact />
    </div>
    </>
    
  );
}

export default App;

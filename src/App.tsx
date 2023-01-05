import React from 'react';
import Navagator from './components/common/Navbar';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <div className='w-full h-screen bg-white dark:bg-gray-900'>
      <Navagator />
      <Footer />
    </div>
  )
}
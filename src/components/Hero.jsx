import React from 'react'
import heroImg from '../assets/hero-graphic.svg'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center md:text-left md:flex md:items-center md:justify-between">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Unused Software into Cash</h1>
        <p className="text-lg md:text-xl mb-6">Sell your unused licenses securely and instantly with SoftSell.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Sell My Licenses</button>
      </div>
      <img src={heroImg} alt="Software resale" className="hidden md:block w-1/2 h-60" />
    </section>
  );
};

export default Hero

import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import logo from '../../src/assets/logo.png'; // Make sure path is correct

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Image */}
          <div className="flex items-center">
            <img src={logo} alt="SoftSell Logo" className="w-auto h-8" />
            <div className="text-xl font-bold text-blue-600 dark:text-white">SoftSell</div>
          </div>
                   
          {/* Desktop Menu */}
          <div className="items-center hidden space-x-6 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 transition dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
              Sign Up
            </a>
            <DarkModeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="ml-4 text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="px-4 pb-4 space-y-2 bg-white shadow md:hidden dark:bg-gray-900">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="block py-2 font-medium text-center text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

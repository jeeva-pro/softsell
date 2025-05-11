import React from 'react';

const Footer = () => {
  return (
    <section id="contact"  className="px-6 py-16 bg-gray-10 text-gray- 700 text-center-16 dark:bg-gray-900 dark:text-gray-300">
      <div className="grid max-w-6xl gap-8 mx-auto text-center md:grid-cols-3 md:text-left">
        <div>
          <h4 className="mb-2 text-xl font-semibold">SoftSell</h4>
          <p>Turning unused software into revenue since 2025.</p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="#why-us" className="hover:underline">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Contact</h4>
          <p>Email: support@softsell.com</p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
      </div>

      <div className="mt-10 text-sm text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;

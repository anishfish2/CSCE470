// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-black text-white font-poppins flex flex-col md:flex-row">
      {/* ... (unchanged code) ... */}
      <div className="mb-8 text-center">
        Discover more:
        <Link to="/services" className="text-white hover:underline mx-2">
          Services
        </Link>
        <Link to="/contact" className="text-white hover:underline mx-2">
          Contact
        </Link>
        <Link to="/blog" className="text-white hover:underline mx-2">
          Blog
        </Link>
      </div>
    </div>
  );
}

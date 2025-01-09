import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
            <img src="../static/logo.png" alt="Logo"  className='h-6 w-10'/>
              <span className="ml-2 text-xl font-serif">Mahaai ayuveda</span>
            </Link>
            <p className="text-sage-300">Ancient wisdom for modern wellness</p>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sage-300 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-sage-300 hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="text-sage-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <ul className="space-y-2 text-sage-300">
              <li>Mahaaiayurveda@gmail.com</li>
              <li>+91 9001908599</li>
              <li>141 shri karni ,uma vihar,Gokulpura,JAIPUR, RAJASTHAN 302012</li>
            </ul>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
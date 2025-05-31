import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Leaf className="w-8 h-8 text-primary-500 mr-2" />
              <span className="font-heading font-bold text-xl">
                Lengo <span className="text-primary-500">Fresh</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Premium Kenyan fresh produce, direct from our farms to global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/exotic-packs" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Exotic Packs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products#vegetables" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products#herbs" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Herbs
                </Link>
              </li>
              <li>
                <Link to="/exotic-packs" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Exotic Packs
                </Link>
              </li>
              <li>
                <Link to="/products#fruits" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products#greens" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Greens & Roots
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Mwea, Kirinyaga County, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+254 700 000 000</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@lengofresh.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Lengo Fresh Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
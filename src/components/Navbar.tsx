import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Leaf className="w-8 h-8 text-primary-600 mr-2" />
            <span className="font-heading font-bold text-xl">
              Lengo <span className="text-primary-600">Fresh</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'navbar-link-active' : 'navbar-link'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'navbar-link-active' : 'navbar-link'
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? 'navbar-link-active' : 'navbar-link'
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/exotic-packs" 
              className={({ isActive }) => 
                isActive ? 'navbar-link-active' : 'navbar-link'
              }
            >
              Exotic Packs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'navbar-link-active' : 'navbar-link'
              }
            >
              Contact
            </NavLink>
            <Link to="/contact" className="btn btn-primary ml-4">
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-primary-600 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white ${
          isOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? 'navbar-link-active block py-2' 
                : 'navbar-link block py-2'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? 'navbar-link-active block py-2' 
                : 'navbar-link block py-2'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive 
                ? 'navbar-link-active block py-2' 
                : 'navbar-link block py-2'
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/exotic-packs" 
            className={({ isActive }) => 
              isActive 
                ? 'navbar-link-active block py-2' 
                : 'navbar-link block py-2'
            }
          >
            Exotic Packs
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? 'navbar-link-active block py-2' 
                : 'navbar-link block py-2'
            }
          >
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-primary w-full text-center mt-4">
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Pedia', href: '/pedia' },
    { name: 'Gync', href: '/gync' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-6 py-2 sm:py-4 ${
        scrolled ? 'pt-2' : 'pt-3 sm:pt-6'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl sm:rounded-3xl ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg border border-white/20'
            : 'bg-white/10 backdrop-blur-md border border-white/10'
        }`}
      >
        <div className="px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/momley_logo.png"
              alt="Momley Logo"
              className="h-10 sm:h-16 w-auto object-contain brightness-110"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-pink ${
                  scrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-slate-700'
                } ${location.pathname === link.href ? 'text-brand-pink' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-white/10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu className={scrolled || location.pathname !== '/' ? 'text-brand-pink' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl rounded-b-3xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg font-semibold transition-colors ${
                       location.pathname === link.href ? 'text-brand-pink' : 'text-slate-800'
                    } hover:text-brand-pink`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

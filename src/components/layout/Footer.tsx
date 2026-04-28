import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'Our Story', href: '/our-story' },
      { name: 'Contact Us', href: '/contact' },
    ],
    specialties: [
      { name: 'Pedia Care', href: '/pedia' },
      { name: 'Gynecology', href: '/gync' },
      { name: 'Neonatal', href: '#' },
      { name: 'Nutrition', href: '#' },
    ],
    company: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'WHO-GMP Certified', href: '#' },
      { name: 'Global Network', href: '#' },
    ]
  };

  const socialLinks = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      href: '#' 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ), 
      href: '#' 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: '#' 
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-white pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-pink/[0.05] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/[0.05] blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-8 mb-12 sm:mb-20">
          {/* Brand Section */}
          <div className="space-y-6 sm:space-y-8">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-brand-pink/10 group-hover:-translate-y-1">
                <img
                  src="/momley_logo.png"
                  alt="Momley Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed max-w-xs text-sm sm:text-base">
              Precision medicine for maternal and neonatal care. Dedicated to the health of the next generation through global excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -4, backgroundColor: '#ec4899' }}
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:pl-0 lg:pl-8">
            <h4 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-brand-pink" />
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-blue-400" />
              Specialties
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.specialties.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:pl-4">
            <h4 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-slate-400" />
              Contact
            </h4>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-lg bg-brand-pink/10 text-brand-pink">
                  <MapPin className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Corporate Office</span>
                  <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    AGS Life Science, Medical Park,<br />Global Business Hub.
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Call Us</span>
                  <span className="text-slate-300 text-xs sm:text-sm">+1 (800) MOMLEY-AGS</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-lg bg-slate-500/10 text-slate-400">
                  <Mail className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Email</span>
                  <span className="text-slate-300 text-xs sm:text-sm">contact@momleyags.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-center md:text-left">
          <div className="text-slate-500 flex flex-col md:flex-row items-center gap-2 sm:gap-4">
            <p>© {currentYear} Momley AGS Life Sciences. All rights reserved.</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <span className="text-slate-600 font-medium">Precision in Care. Excellence in Health.</span>
          </div>
          <div className="flex gap-6 sm:gap-8 text-slate-500">
            {footerLinks.company.slice(0, 2).map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

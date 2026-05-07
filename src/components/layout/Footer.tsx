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
      { name: 'Maternal Health', href: '/gync' },
      { name: 'Neonatal Care', href: '/pedia' },
    ],
    company: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'WHO-GMP Certified', href: '#' },
      { name: 'Global Network', href: '#' },
    ]
  };

  // const socialLinks = [
  //   { icon: <Instagram className="w-5 h-5" />, href: '#' },
  //   { icon: <Facebook className="w-5 h-5" />, href: '#' },
  //   { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  // ];

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/[0.05] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-4 rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-brand-pink/10 group-hover:-translate-y-1">
                <img
                  src="/momley_logo.png"
                  alt="Momley Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed max-w-xs text-sm sm:text-base">
              Precision medicine for maternal and neonatal care. Dedicated to the health of the next generation through global excellence.
            </p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -4, backgroundColor: '#ec4899', borderColor: '#ec4899' }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Navigation */}
          <div className="lg:pl-12">
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-pink" />
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="font-medium">{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              Specialties
            </h4>
            <ul className="space-y-4">
              {footerLinks.specialties.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="font-medium">{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:pl-4">
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-brand-pink/10 text-brand-pink">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">Corporate Office</span>
                  <span className="text-slate-300 text-sm leading-relaxed">
                    131-132, Sun Gravitas, Opp. Ganesh Gruh Udhyog, Near Shyamal Cross Road, Ahmedabad, Gujarat, India. 380015
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">Call Us</span>
                  <span className="text-slate-300 text-sm font-bold">+91 93281 84047</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-slate-500/10 text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">Email Us</span>
                  <a href="mailto:momleyagslifescience@gmail.com" className="text-slate-300 text-sm hover:text-brand-pink transition-colors">
                    momleyagslifescience@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-center md:text-left">
          <div className="text-slate-500 flex flex-col md:flex-row items-center gap-4">
            <p>© {currentYear} Momley AGS Life Sciences.</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <span className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Precision in Care. Excellence in Health.</span>
          </div>
          <div className="flex gap-8 text-slate-500">
            {footerLinks.company.slice(0, 2).map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-white transition-colors font-medium">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

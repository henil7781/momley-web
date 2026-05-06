import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, Send, ShieldCheck, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* ── TOP SECTION: NEWSLETTER ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-20 border-b border-white/10">
        <div className="space-y-4">
          <h4 className="text-3xl font-black tracking-tighter">Join The Momley <span className="text-brand-pink italic">Circle.</span></h4>
          <p className="text-white/50 max-w-sm text-sm font-medium">Stay updated with our latest neonatal research and maternal wellness insights.</p>
        </div>
        <div className="relative flex items-center">
          <input 
            type="email" 
            placeholder="Enter your email for the HCP Journal" 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-brand-pink transition-all font-medium"
          />
          <button className="absolute right-2 bg-brand-pink text-white p-3 rounded-xl hover:scale-105 transition-transform">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        
        {/* Column 1: Identity */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <span className="text-2xl font-black tracking-tighter">MOMLEY<span className="text-brand-pink">AGS</span></span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-medium">
              Advancing neonatal and maternal wellness through clinical precision and research-driven formulations.
            </p>
          </div>
          <div className="flex gap-4">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-pink transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-6">
          <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">Explore</h5>
          <ul className="space-y-4 text-sm font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Research Core</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Momley Journal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
          </ul>
        </div>

        {/* Column 3: Specialties */}
        <div className="space-y-6">
          <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">Focus Areas</h5>
          <ul className="space-y-4 text-sm font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Pediatric Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Neonatal Safety</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Maternal Health</a></li>
            <li><a href="#" className="hover:text-white transition-colors">HCP Portal</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-6">
          <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">Connect</h5>
          <ul className="space-y-4 text-sm font-medium text-white/50">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-pink shrink-0" />
              <span>Registered Office,<br />Ahmedabad, Gujarat</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-pink shrink-0" />
              <span>inquiry@momley.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-pink shrink-0" />
              <span>+91 0000 000 000</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── COMPLIANCE & LEGAL BAR ── */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-brand-pink flex items-center gap-2">
            <AlertCircle className="w-3 h-3" /> Pharmacovigilance
          </a>
          <a href="#" className="hover:text-brand-pink">Privacy Policy</a>
          <a href="#" className="hover:text-brand-pink">Terms of Use</a>
        </div>
        
        <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
          <ShieldCheck className="w-8 h-8" />
          <div className="w-px h-6 bg-white/20" />
          <span className="text-[10px] font-bold tracking-widest">WHO-GMP CERTIFIED</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-[9px] text-white/20 font-medium uppercase tracking-[0.2em] leading-relaxed max-w-4xl mx-auto">
          Disclaimer: The information provided on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.
          <br /><br />
          © 2026 Momley AGS Life Science. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
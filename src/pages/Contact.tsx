import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Client-side Validation
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim() || formData.firstName.length < 2) newErrors.firstName = "Must be at least 2 characters.";
        if (!formData.lastName.trim() || formData.lastName.length < 2) newErrors.lastName = "Must be at least 2 characters.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
        if (!formData.message.trim() || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters long.";

        if (Object.keys(newErrors).length > 0) {
            setFieldErrors(newErrors);
            return;
        }
        
        setFieldErrors({});
        setStatus('loading');
        
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setStatus('success');
                setStatusMessage('Your message has been sent successfully. Please check your email.');
                setFormData({ firstName: '', lastName: '', email: '', inquiryType: 'General Inquiry', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(data.errors ? data.errors[0].msg : data.error || 'Failed to send message.');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('Network error. Please ensure the server is running.');
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] pt-24 pb-20 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/[0.04] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                <div className="mb-16">
                    <SectionHeader
                        icon={Mail}
                        sublabel="Get in Touch"
                        title={<>Connect with <span className="text-slate-400">Momley.</span></>}
                        description="Whether you're a healthcare provider, a distributor, or a parent, we are here to support you with clinical excellence."
                        accentColor="text-brand-pink"
                    />
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Contact Information Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <motion.a
                            href="https://maps.app.goo.gl/HmiYRpmKkgNW7oe56"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex gap-6 group hover:border-brand-pink/20 transition-all cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-brand-pink group-hover:text-white rounded-2xl flex items-center justify-center shrink-0 transition-all">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-brand-pink transition-colors">Global Headquarters</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                    131-132, Sun Gravitas,<br />
                                    Opp. Ganesh Gruh Udhyog,<br /> Near Shyamal Cross Road,<br />
                                    Ahmedabad, Gujarat, India.
                                    <br /> 380015
                                </p>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex gap-6 group hover:border-brand-pink/20 transition-all"
                        >
                            <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-brand-pink group-hover:text-white rounded-2xl flex items-center justify-center shrink-0 transition-all">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 mb-2">Email Us</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                    For general inquiries & distribution:<br />
                                    <a href="mailto:info@momleyags.com" className="text-brand-pink hover:underline">momleyagslifescience@gmail.com</a>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl flex gap-6 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 blur-3xl rounded-full" />
                            <div className="w-14 h-14 bg-white/10 text-brand-pink rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-black text-white mb-2">Clinical Support Line</h3>
                                <p className="text-slate-400 font-medium leading-relaxed text-sm">
                                    Available Mon-Fri,<br />10am - 6pm for healthcare professionals.
                                </p>
                                <div className="mt-4 text-white font-black tracking-widest">
                                    +91 93281 84047
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-7 bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
                    >
                        <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">First Name</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all font-medium text-slate-900 ${fieldErrors.firstName ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-slate-100 focus:border-brand-pink/50 focus:ring-brand-pink/20'}`} placeholder="John" />
                                    {fieldErrors.firstName && <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">{fieldErrors.firstName}</div>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Last Name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all font-medium text-slate-900 ${fieldErrors.lastName ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-slate-100 focus:border-brand-pink/50 focus:ring-brand-pink/20'}`} placeholder="Doe" />
                                    {fieldErrors.lastName && <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">{fieldErrors.lastName}</div>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all font-medium text-slate-900 ${fieldErrors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-slate-100 focus:border-brand-pink/50 focus:ring-brand-pink/20'}`} placeholder="john@example.com" />
                                {fieldErrors.email && <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">{fieldErrors.email}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
                                <div className="relative">
                                    <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-pink/50 focus:ring-2 focus:ring-brand-pink/20 transition-all font-medium text-slate-900 appearance-none">
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Distribution & Partnerships">Distribution & Partnerships</option>
                                        <option value="Medical Information">Medical Information</option>
                                        <option value="Career Opportunities">Career Opportunities</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all font-medium text-slate-900 resize-none ${fieldErrors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-slate-100 focus:border-brand-pink/50 focus:ring-brand-pink/20'}`} placeholder="How can we help you today?"></textarea>
                                {fieldErrors.message && <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">{fieldErrors.message}</div>}
                            </div>

                            {statusMessage && (
                                <div className={`p-4 rounded-xl text-sm font-medium ${status === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                    {statusMessage}
                                </div>
                            )}

                            <button disabled={status === 'loading'} type="submit" className="w-full bg-brand-pink text-white rounded-2xl px-8 py-5 font-bold flex items-center justify-center gap-3 hover:bg-pink-600 transition-all shadow-xl shadow-brand-pink/20 group disabled:opacity-70 disabled:cursor-not-allowed">
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

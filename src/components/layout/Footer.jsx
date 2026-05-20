import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Info', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Writing', href: '#writing' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/jaysmithpmp/', label: 'LinkedIn' },
        { icon: <FiTwitter />, href: 'https://x.com/JaySmithNotes', label: 'Twitter' },
        { icon: <FiMail />, href: 'mailto:contact@jaysmith.com', label: 'Email' },
    ];

    return (
        <footer className="border-t-2 border-slate-900 dark:border-slate-100 bg-slate-50 dark:bg-background-dark/50 pt-24 pb-12 px-6 lg:px-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <h2 className="text-4xl font-black uppercase tracking-tighter font-display">JAY SMITH</h2>
                    <p className="text-lg font-bold uppercase opacity-60 leading-relaxed max-w-sm">
                        30+ years at the intersection of enterprise technology and decentralized systems. President, Accumulate Protocol · Founder, Genialt.ai · Chair, Accumulate Governance Committee.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                whileHover={{ scale: 1.1, rotate: 5, backgroundColor: '#f23b0d', color: '#fff' }}
                                className="size-12 rounded border-2 border-slate-900 dark:border-slate-100 flex items-center justify-center text-xl transition-all"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">NAVIGATION</h4>
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-12">
                    <div className="p-8 lg:p-12 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 shadow-[10px_10px_0px_#f23b0d]">
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">STAY UPDATED</h4>
                        <p className="text-sm font-bold uppercase opacity-60 mb-8">GET THE LATEST INSIGHTS ON WEB3, BLOCKCHAIN, DIGITAL TRUST, AND AI GOVERNANCE.</p>
                        <form className="flex border-2 border-slate-900 dark:border-slate-100" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-1 bg-transparent p-4 text-xs font-black uppercase tracking-widest outline-none"
                            />
                            <button className="bg-primary text-white px-8 font-black uppercase tracking-widest hover:bg-slate-900 transition-all">
                                JOIN
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t border-slate-900/10 dark:border-slate-100/10 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 flex items-center gap-2">
                    © {currentYear} JAY SMITH. MADE WITH <FiHeart className="text-primary" /> ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-8">
                    {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                        <a key={item} href="#/" className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
            
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 left-8 size-14 bg-background-light dark:bg-background-dark border-2 border-slate-900 dark:border-slate-100 flex items-center justify-center text-2xl shadow-[4px_4px_0px_#181211] dark:shadow-[4px_4px_0px_#f8f6f5] z-40 lg:hidden"
            >
                <FiArrowUp />
            </motion.button>
        </footer>
    );
};

export default Footer;
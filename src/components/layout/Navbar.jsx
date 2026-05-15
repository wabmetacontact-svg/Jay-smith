import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Info', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Work', href: '#work' },
        { name: 'Writing', href: '#writing' },
    ];

    return (
        <header className={`flex items-center justify-between whitespace-nowrap border-b-2 border-slate-900 dark:border-slate-100 px-6 lg:px-20 py-4 sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md py-3' : 'bg-background-light dark:bg-background-dark py-6'
        }`}>
            <div className="flex items-center gap-4">
                <motion.div 
                    initial={{ rotate: -15 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="size-8 text-primary"
                >
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
                    </svg>
                </motion.div>
                <h2 className="text-xl lg:text-2xl font-black leading-tight tracking-tighter uppercase font-display">JAY SMITH</h2>
            </div>

            <div className="flex flex-1 justify-end gap-6 lg:gap-10 items-center">
                <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            className="text-sm font-black leading-normal uppercase hover:text-primary transition-all underline decoration-2 decoration-transparent hover:decoration-primary underline-offset-8" 
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="size-10 flex items-center justify-center rounded-full border-2 border-slate-900 dark:border-slate-100 hover:bg-primary hover:text-white transition-all duration-300"
                        title="Toggle Dark Mode"
                    >
                        {darkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
                    </button>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded bg-primary text-white text-sm font-black leading-normal tracking-widest uppercase py-3 px-6 hover:bg-slate-900 transition-colors shadow-[4px_4px_0px_#181211] dark:shadow-[4px_4px_0px_#f8f6f5]"
                    >
                        CONTACT
                    </motion.button>

                    <button 
                        className="md:hidden text-slate-900 dark:text-slate-100"
                        onClick={() => setIsMobileOpen(true)}
                    >
                        <HiMenu size={32} />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark flex flex-col items-center justify-center gap-8 p-6"
                    >
                        <button 
                            className="absolute top-8 right-8 text-slate-900 dark:text-slate-100"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <HiX size={40} />
                        </button>
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                className="text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
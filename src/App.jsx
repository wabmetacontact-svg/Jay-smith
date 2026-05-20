import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Expertise from './components/sections/Expertise';
import Vision from './components/sections/Vision';
import CoreValues from './components/sections/CoreValues';
import MediaSpeaking from './components/sections/MediaSpeaking';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';
import { motion } from 'framer-motion';

const App = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' || 
               (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display selection:bg-primary selection:text-white transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                
                <main className="flex flex-col">
                    <Hero />
                    <About />
                    <Expertise />
                    <Vision />
                    <CoreValues />
                    <MediaSpeaking />
                    <Achievements />
                    <Contact />
                    <Community />
                </main>
                
                <Footer />
                
                {/* Floating "Back to Top" shortcut */}
                <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 size-14 bg-primary text-white hidden lg:flex items-center justify-center border-2 border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_#181211] dark:shadow-[4px_4px_0px_#f8f6f5] z-40"
                >
                    <span className="material-symbols-outlined text-3xl font-black">arrow_upward</span>
                </motion.button>
            </div>
        </div>
    );
};

export default App;
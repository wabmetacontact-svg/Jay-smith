import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiArrowRight } from 'react-icons/hi';

const Vision = () => {
    return (
        <section id="vision" className="border-t-2 border-slate-900 dark:border-slate-100 py-32 px-6 lg:px-20 overflow-hidden bg-slate-100 dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="size-24 rounded-full border-2 border-slate-900 dark:border-slate-100 bg-primary text-white flex items-center justify-center text-4xl shadow-[8px_8px_0px_#181211] dark:shadow-[8px_8px_0px_#f8f6f5]"
                >
                    <HiOutlineLightBulb />
                </motion.div>

                <div className="flex flex-col gap-8">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Vision & Mission</span>
                    <h2 className="text-4xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter font-display">
                        "BRIDGING TRUST <br /> AND <span className="text-primary italic">TECHNOLOGY</span> <br /> TO EMPOWER THE <br /> DIGITAL WORLD."
                    </h2>
                </div>

                <p className="text-xl lg:text-3xl font-medium max-w-4xl text-slate-700 dark:text-slate-300 border-y-2 border-slate-900/10 dark:border-slate-100/10 py-12 px-6 italic">
                    My mission is to lead the development of infrastructure that empowers individuals and organizations to interact in a digital ecosystem built on transparency, security, and mutual trust.
                </p>

                <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[300px] cursor-pointer items-center justify-center gap-4 rounded bg-primary text-white text-lg font-black leading-normal tracking-widest uppercase py-6 px-12 hover:bg-slate-900 transition-colors shadow-[10px_10px_0px_#181211] dark:shadow-[10px_10px_0px_#f8f6f5]"
                >
                    LET'S BUILD TOGETHER <HiArrowRight />
                </motion.a>
            </div>
        </section>
    );
};

export default Vision;
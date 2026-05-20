import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 pb-24 px-6 lg:px-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-4"
            >
                <div
                    className="bg-slate-200 dark:bg-slate-800 aspect-[4/5] w-full grayscale hover:grayscale-0 transition-all duration-700 rounded border-2 border-slate-900 dark:border-slate-100 bg-cover bg-[position:20%_center] shadow-[12px_12px_0px_#f23b0d]"
                    style={{ backgroundImage: "url('/Jaysmith hero section.jpeg')" }}
                ></div>
            </motion.div>

            <div className="lg:col-span-8 flex flex-col justify-end gap-6">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    <h1 className="text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase font-display">
                        BLOCKCHAIN <br /> GOVERNANCE & <br /> <span className="text-primary italic">ENTERPRISE AI LEADER</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl lg:text-3xl font-medium max-w-2xl text-slate-700 dark:text-slate-300 border-l-4 border-primary pl-6 py-2"
                >
                    DECENTRALIZED SYSTEMS | DIGITAL IDENTITY | FUTURE INFRASTRUCTURE
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-8 mt-4"
                >
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-primary font-display">30+</span>
                        <span className="text-xs font-black uppercase tracking-widest opacity-60">Years Experience</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
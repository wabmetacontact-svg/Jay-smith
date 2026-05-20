import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiLightningBolt, HiUserGroup } from 'react-icons/hi';

const CoreValues = () => {
    const values = [
        {
            icon: <HiShieldCheck />,
            title: 'Integrity',
            tagline: "DOING WHAT'S RIGHT — ALWAYS.",
            description: 'Governance without integrity is theater. Every framework I design and every committee I chair is built on the principle that accountability must be structural, not aspirational.',
        },
        {
            icon: <HiLightningBolt />,
            title: 'Innovation',
            tagline: 'CHALLENGING THE STATUS QUO.',
            description: 'I was building on blockchain when most enterprises still called it a fad. Real innovation means committing to a direction before consensus arrives and having the architecture ready when it does.',
        },
        {
            icon: <HiUserGroup />,
            title: 'Collaboration',
            tagline: 'BUILDING STRONG PARTNERSHIPS.',
            description: "Decentralized systems only work when governance is shared. I've led distributed committees, open-protocol communities, and enterprise delivery teams, all requiring real alignment, not just coordination.",
        },
    ];

    return (
        <section id="values" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-8 mb-16">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Pillars</span>
                <h2 className="text-4xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                    Core <br /> <span className="text-primary italic">Values</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {values.map((v, i) => (
                    <motion.div 
                        key={v.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-12 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 shadow-[12px_12px_0px_#181211] dark:shadow-[12px_12px_0px_#f8f6f5] hover:shadow-[12px_12px_0px_#f23b0d] hover:-translate-y-2 transition-all group"
                    >
                        <div className="size-20 rounded bg-primary text-white flex items-center justify-center text-4xl mb-8 group-hover:rotate-12 transition-transform shadow-[4px_4px_0px_#181211]">
                            {v.icon}
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                            {v.title}
                        </h3>
                        <p className="text-sm font-black uppercase tracking-widest text-primary mb-6">
                            {v.tagline}
                        </p>
                        <p className="text-lg font-bold uppercase opacity-60 leading-relaxed font-display">
                            {v.description}
                        </p>
                        
                        {/* Huge background letter */}
                        <span className="absolute -bottom-10 -right-4 text-[160px] font-black opacity-[0.03] select-none group-hover:opacity-10 transition-opacity">
                            {v.title[0]}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;
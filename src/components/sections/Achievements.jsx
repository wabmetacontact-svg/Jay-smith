import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiOutlineSparkles } from 'react-icons/hi';

const Achievements = () => {
    const milestones = [
        {
            year: '2024',
            title: 'Genialt.ai Launch & Certen Advisory',
            description: "Launched Genialt.ai, a blockchain-powered governance layer for enterprise AI agents, addressing the compliance gap between autonomous AI and institutional accountability. Acted as Senior Tokenomics Advisor at Certen Protocol, playing a pivotal role in shaping the governance framework for tokenized assets.",
            achievements: ['AI agent identity framework', 'Auditable approval workflows', 'Enterprise pilot integrations']
        },
        {
            year: '2023',
            title: 'Accumulate Identity System',
            description: "Brought Accumulate Protocol's identity-centric architecture to production — enabling enterprise-grade digital identity at scale on a decentralized infrastructure.",
            achievements: ['Identity-centric blockchain live', 'Chainable identity keys (ADIs)', 'Governance committee established']
        },
        {
            year: '2022',
            title: 'Global Web3 Conferences',
            description: 'Keynote speaker at major Web3 conferences worldwide, establishing thought leadership.',
            achievements: ['20+ international conferences', 'Industry expert status', 'Media features']
        },
        {
            year: '2021',
            title: 'Accumulate Protocol',
            description: 'Joined as President and established the foundational governance structure for a new identity-centric blockchain — building the technical roadmap, core team, and community governance framework.',
            achievements: ['Protocol architecture defined', 'Governance committee formed', 'Foundation mission anchored']
        },
    ];

    return (
        <section id="milestones" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-8 mb-16">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Record</span>
                <h2 className="text-4xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                    Key <span className="text-primary italic">Achievements</span>
                </h2>
            </div>

            <div className="relative">
                {/* Brutalist Timeline Line */}
                <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-2 bg-slate-900 dark:bg-slate-100 lg:-translate-x-1/2"></div>
                
                {milestones.map((milestone, index) => (
                    <motion.div 
                        key={milestone.year}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative flex flex-col lg:flex-row items-center gap-12 mb-24 lg:mb-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Year Marker */}
                        <div className="absolute left-[20px] lg:left-1/2 size-10 bg-primary border-4 border-background-light dark:border-background-dark outline outline-2 outline-slate-900 dark:outline-slate-100 lg:-translate-x-1/2 z-10"></div>
                        
                        {/* Year Text */}
                        <div className={`w-full lg:w-1/2 flex pt-12 lg:pt-0 ${index % 2 === 1 ? 'lg:justify-start lg:pl-20' : 'lg:justify-end lg:pr-20'}`}>
                            <span className="text-6xl lg:text-9xl font-black font-display text-primary/20 group-hover:text-primary transition-colors select-none">
                                {milestone.year}
                            </span>
                        </div>

                        {/* Content Card */}
                        <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${index % 2 === 1 ? 'lg:pr-20' : 'lg:pl-20'}`}>
                            <div className="p-8 lg:p-12 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 shadow-[10px_10px_0px_#181211] dark:shadow-[10px_10px_0px_#f8f6f5] hover:shadow-[10px_10px_0px_#f23b0d] hover:-translate-y-2 transition-all group">
                                <div className="flex items-center gap-3 mb-6">
                                    <HiOutlineSparkles className="text-primary text-2xl" />
                                    <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">
                                        {milestone.title}
                                    </h3>
                                </div>
                                <p className="text-sm font-bold uppercase opacity-60 leading-relaxed mb-8 font-display">
                                    {milestone.description}
                                </p>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">CORE RESULTS:</p>
                                    {milestone.achievements.map((a, i) => (
                                        <div key={i} className="flex items-center gap-3 border-b border-slate-900/10 dark:border-slate-100/10 pb-2">
                                            <HiCheck className="text-primary" />
                                            <span className="text-xs font-black uppercase tracking-wider opacity-80">{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
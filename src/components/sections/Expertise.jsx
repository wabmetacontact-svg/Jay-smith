import React from 'react';
import { motion } from 'framer-motion';
import { HiLockClosed, HiServer, HiShieldCheck, HiGlobeAlt, HiLink, HiCube } from 'react-icons/hi';

const Expertise = () => {
    const expertiseAreas = [
        {
            icon: <HiLockClosed />,
            title: 'Decentralized Identity Systems',
            description: 'Building secure, user-controlled identity solutions that give individuals ownership of their digital identity while enabling seamless verification across platforms.',
            features: ['Self-Sovereign Identity', 'Privacy-Preserving Auth', 'Verification']
        },
        {
            icon: <HiServer />,
            title: 'Enterprise Blockchain Infrastructure',
            description: 'Designing and implementing scalable blockchain solutions for enterprise needs, ensuring security, compliance, and seamless integration with existing systems.',
            features: ['Scalable Architecture', 'Enterprise Integration', 'Compliance']
        },
        {
            icon: <HiShieldCheck />,
            title: 'Digital Trust Frameworks',
            description: 'Creating comprehensive frameworks that establish and maintain trust in digital interactions, from data integrity to transaction verification.',
            features: ['Trust Verification', 'Data Integrity', 'Secure TX']
        },
        {
            icon: <HiGlobeAlt />,
            title: 'Web3 Governance',
            description: 'Developing governance models for decentralized organizations that balance efficiency with true decentralization and community participation.',
            features: ['DAO Structures', 'Voting Mechanisms', 'Token Economics']
        },
        {
            icon: <HiLink />,
            title: 'Blockchain Interoperability',
            description: 'Enabling seamless communication and value transfer between different networks, creating a more connected decentralized ecosystem.',
            features: ['Cross-Chain Bridges', 'Protocol Standards', 'Multi-Chain']
        },
        {
            icon: <HiCube />,
            title: 'Protocol Development',
            description: 'Architecting and building foundational protocols that power the next generation of decentralized applications and services.',
            features: ['Consensus', 'Smart Contracts', 'Layer Solutions']
        },
    ];

    return (
        <section id="expertise" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-8 mb-16">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Expertise</span>
                <h2 className="text-4xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                    Deep Technical <br /> <span className="text-primary italic">Expertise</span>
                </h2>
                <p className="text-xl lg:text-3xl font-medium max-w-3xl opacity-70">
                    Specialized knowledge in building the infrastructure for tomorrow's digital economy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-slate-900 dark:border-slate-100">
                {expertiseAreas.map((area, index) => (
                    <motion.div 
                        key={area.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-8 lg:p-12 border-slate-900 dark:border-slate-100 flex flex-col gap-6 group hover:bg-primary transition-colors duration-500 overflow-hidden relative ${
                            index % 3 !== 2 ? 'lg:border-r-2' : ''
                        } ${
                            index < 3 ? 'lg:border-b-2' : ''
                        } ${
                            index % 2 !== 1 ? 'md:border-r-2 lg:border-r-0' : '' // Adjustment for 2-col on md
                        } ${
                            index < 4 ? 'md:border-b-2 lg:border-b-0' : ''
                        } border-b-2 md:border-b-0 last:border-b-0`}
                    >
                        <div className="size-16 rounded border-2 border-slate-900 dark:border-slate-100 bg-background-light dark:bg-background-dark text-primary flex items-center justify-center text-3xl group-hover:bg-background-light group-hover:text-primary transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                            {area.icon}
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-white transition-colors duration-500">
                            {area.title}
                        </h3>
                        <p className="text-sm font-bold uppercase leading-relaxed opacity-60 group-hover:text-white group-hover:opacity-90 transition-all duration-500">
                            {area.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {area.features.map(f => (
                                <span key={f} className="text-[10px] font-black uppercase tracking-widest border border-slate-900/20 dark:border-slate-100/20 px-2 py-1 bg-slate-100 dark:bg-slate-800 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 transition-all duration-500">
                                    {f}
                                </span>
                            ))}
                        </div>
                        {/* Huge background number */}
                        <span className="absolute -bottom-10 -right-4 text-[120px] font-black opacity-[0.03] group-hover:opacity-10 transition-opacity select-none group-hover:translate-x-4">
                            0{index + 1}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
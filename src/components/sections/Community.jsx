import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiYoutube, FiMessageSquare, FiExternalLink } from 'react-icons/fi';
import { SiTelegram } from 'react-icons/si';

const Community = () => {
    const platforms = [
        { icon: <FiLinkedin />, name: 'LinkedIn', handle: '@jaysmith', count: '50K+', color: '#0077b5' },
        { icon: <FiTwitter />, name: 'Twitter / X', handle: '@jay_smith', count: '35K+', color: '#1da1f2' },
        { icon: <FiYoutube />, name: 'YouTube', handle: 'Jay Smith', count: '20K+', color: '#ff0000' },
        { icon: <SiTelegram />, name: 'Telegram', handle: 'Jay Smith Community', count: '15K+', color: '#0088cc' },
        { icon: <FiMessageSquare />, name: 'Podcasts', handle: 'Multiple Shows', count: '100+', color: '#8b5cf6' },
    ];

    return (
        <section id="community" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-8 mb-16">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Social</span>
                <h2 className="text-4xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                    Join The <br /> <span className="text-primary italic">Community</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-2 border-slate-900 dark:border-slate-100 divide-x-2 divide-y-2 lg:divide-y-0 divide-slate-900 dark:divide-slate-100">
                {platforms.map((p, i) => (
                    <motion.a 
                        key={p.name}
                        href="#"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-10 flex flex-col items-center text-center gap-6 group hover:bg-primary transition-all duration-300"
                    >
                        <div className="size-20 rounded border-2 border-slate-900 dark:border-slate-100 flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-primary group-hover:rotate-12 transition-all">
                            {p.icon}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">
                                {p.name}
                            </h3>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:text-white group-hover:opacity-70">
                                {p.handle}
                            </p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <span className="text-4xl font-black text-primary group-hover:text-white font-display">
                                {p.count}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:text-white group-hover:opacity-70">
                                Global Followers
                            </span>
                        </div>
                        <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all text-white">
                            <FiExternalLink size={24} />
                        </div>
                    </motion.a>
                ))}
            </div>
            
            <div className="mt-16 p-12 lg:p-20 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex flex-col lg:flex-row justify-between items-center gap-12 border-2 border-primary shadow-[15px_15px_0px_#f23b0d]">
                <div className="flex flex-col gap-4">
                    <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">WEEKLY INSIGHTS</h3>
                    <p className="text-lg font-bold uppercase opacity-60">SUBSCRIBE TO THE ARCHITECT'S NEWSLETTER</p>
                </div>
                <div className="w-full lg:w-1/3 flex border-2 border-primary">
                    <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        className="flex-1 bg-transparent p-4 text-xs font-black uppercase tracking-widest outline-none placeholder:text-white/30 dark:placeholder:text-slate-900/30"
                    />
                    <button className="bg-primary text-white p-4 font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all">
                        JOIN
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Community;
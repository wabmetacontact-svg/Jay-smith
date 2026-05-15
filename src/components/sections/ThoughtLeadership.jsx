import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiMicrophone, HiPencilAlt, HiChatAlt2, HiLightningBolt } from 'react-icons/hi';

const ThoughtLeadership = () => {
    const featuredContent = [
        {
            type: 'Article',
            title: 'The Evolution of Digital Trust: Beyond Identity',
            desc: 'Exploring how zero-knowledge proofs and decentralized identifiers are restoring privacy to the user.',
            icon: <HiPencilAlt />
        },
        {
            type: 'Keynote',
            title: 'Scaling the Unscalable: Global Consensus',
            desc: 'A deep dive into the sharding mechanisms and protocol optimizations driving Web3 adoption.',
            icon: <HiMicrophone />
        },
        {
            type: 'Insight',
            title: 'The Convergence of AI and Blockchain',
            desc: 'How decentralized compute will power the next generation of artificial intelligence.',
            icon: <HiLightningBolt />
        }
    ];

    const stats = [
        { count: '25+', label: 'Articles Published' },
        { count: '50+', label: 'Keynotes Delivered' },
        { count: '100+', label: 'Industry Insights' }
    ];

    return (
        <section id="thought-leadership" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-12 flex flex-col gap-8 mb-4">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Insights</span>
                    <h2 className="text-4xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                        Thought <br /> <span className="text-primary italic">Leadership</span>
                    </h2>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-12">
                    <div className="p-8 border-2 border-slate-900 dark:border-slate-100 bg-primary text-white shadow-[10px_10px_0px_#181211] dark:shadow-[10px_10px_0px_#f8f6f5]">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 underline decoration-4 underline-offset-8">THE VISION</h3>
                        <p className="text-lg font-bold uppercase leading-relaxed font-display">
                            "Innovation is not just about building new things, it's about redefining how we interact with the digital world."
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        {stats.map((s, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="text-5xl font-black text-primary font-display group-hover:scale-110 transition-transform">
                                    {s.count}
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest opacity-60 max-w-[100px]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-0 border-2 border-slate-900 dark:border-slate-100 divide-y-2 divide-slate-900 dark:divide-slate-100">
                    {featuredContent.map((content, index) => (
                        <motion.a 
                            key={index}
                            href="#"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-300"
                        >
                            <div className="flex flex-col gap-4 max-w-2xl">
                                <div className="flex items-center gap-3">
                                    <span className="size-8 rounded border-2 border-slate-900 dark:border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        {content.icon}
                                    </span>
                                    <span className="text-xs font-black uppercase tracking-widest text-primary">{content.type}</span>
                                </div>
                                <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">
                                    {content.title}
                                </h3>
                                <p className="text-sm font-bold uppercase opacity-60 leading-relaxed font-display">
                                    {content.desc}
                                </p>
                            </div>
                            <div className="size-16 rounded-full border-2 border-slate-900 dark:border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                                <HiOutlineExternalLink size={30} />
                            </div>
                        </motion.a>
                    ))}
                    
                    <a href="#" className="p-8 text-center font-black uppercase tracking-[0.3em] text-xs hover:bg-primary hover:text-white transition-all cursor-pointer">
                        VIEW ALL PUBLICATIONS ✦
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ThoughtLeadership;
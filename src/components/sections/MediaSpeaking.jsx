import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMicrophone, HiSpeakerphone, HiUsers, HiVideoCamera, HiPlay } from 'react-icons/hi';

const MediaSpeaking = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All', icon: null },
        { id: 'conferences', label: 'Conferences', icon: <HiMicrophone /> },
        { id: 'podcasts', label: 'Podcasts', icon: <HiSpeakerphone /> },
        { id: 'panels', label: 'Panels', icon: <HiUsers /> },
        { id: 'interviews', label: 'Interviews', icon: <HiVideoCamera /> },
    ];

    const mediaItems = [
        { category: 'conferences', title: 'Web3 Summit 2024', subtitle: 'Keynote Speaker', desc: 'The Future of Decentralized Identity', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800' },
        { category: 'podcasts', title: 'Blockchain Insider', subtitle: 'Guest Expert', desc: 'Enterprise Adoption of Web3', img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800' },
        { category: 'panels', title: 'Tech Leaders Forum', subtitle: 'Panel Discussion', desc: 'Building Trust in Digital Systems', img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800' },
        { category: 'interviews', title: 'Forbes Technology', subtitle: 'Feature Interview', desc: 'The Vision Behind Accumulate', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800' },
        { category: 'conferences', title: 'Consensus 2024', subtitle: 'Main Stage', desc: 'Blockchain Interoperability', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800' },
        { category: 'podcasts', title: 'Crypto Deep Dive', subtitle: 'Episode #142', desc: 'Governance in Decentralized Networks', img: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800' },
    ];

    const filteredItems = activeCategory === 'all' 
        ? mediaItems 
        : mediaItems.filter(item => item.category === activeCategory);

    return (
        <section id="media" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                <div className="flex flex-col gap-6">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Speaking</span>
                    <h2 className="text-4xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                        Media & <br /> <span className="text-primary italic">Speaking</span>
                    </h2>
                </div>
                
                <div className="flex flex-wrap gap-2 border-2 border-slate-900 dark:border-slate-100 p-1 bg-white dark:bg-slate-900">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                                activeCategory === cat.id 
                                ? 'bg-primary text-white' 
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group relative flex flex-col border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 shadow-[8px_8px_0px_#181211] dark:shadow-[8px_8px_0px_#f8f6f5] hover:shadow-[8px_8px_0px_#f23b0d] transition-all"
                        >
                            <div className="aspect-video overflow-hidden border-b-2 border-slate-900 dark:border-slate-100 relative">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl shadow-[4px_4px_0px_#181211]">
                                        <HiPlay />
                                    </div>
                                </div>
                                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-[2px_2px_0px_#181211]">
                                    {item.category}
                                </span>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <span className="text-primary text-xs font-black uppercase tracking-widest">{item.subtitle}</span>
                                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-bold uppercase opacity-60 leading-relaxed font-display">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default MediaSpeaking;
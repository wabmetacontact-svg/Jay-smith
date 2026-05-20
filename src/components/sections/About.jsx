import React from 'react';
import { motion } from 'framer-motion';
import { HiFlag, HiUsers, HiLightningBolt, HiGlobe } from 'react-icons/hi';

const About = () => {
    const features = [
        { icon: <HiFlag />, title: 'Strategic Vision', desc: 'Long-term planning for digital transformation' },
        { icon: <HiUsers />, title: 'Human-Centered', desc: 'Technology that empowers people' },
        { icon: <HiLightningBolt />, title: 'Innovation Driver', desc: 'Pushing boundaries in Web3' },
        { icon: <HiGlobe />, title: 'Global Scale', desc: 'Building systems that scale worldwide' },
    ];

    return (
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="lg:col-span-12 flex flex-col gap-8 mb-8">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ About Me</span>
                <h2 className="text-4xl lg:text-7xl font-black uppercase leading-tight tracking-tighter max-w-4xl font-display italic">
                    Building Trusted Digital <br /> Systems for the <span className="text-primary not-italic underline decoration-8 underline-offset-8">Future</span>
                </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="text-2xl lg:text-3xl leading-relaxed space-y-8 font-medium">
                    <p>
                        For over three decades, I've worked at the intersection of business value and technological innovation, turning complex ideas into scalable, real-world enterprise systems. Today my focus is sharper than ever: solving the trust and governance challenges that stand between blockchain and AI and true institutional adoption.
                    </p>
                    <p className="opacity-70">
                        I bring strategic program leadership and deep technical architecture to the hardest problems in enterprise blockchain from governance and tokenomics to identity and compliance. My work spans both the institutional and the decentralized: I've built financial systems for Fortune-scale companies and launched governance frameworks for open protocols.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 border-2 border-slate-900 dark:border-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 group shadow-[4px_4px_0px_#181211] dark:shadow-[4px_4px_0px_#f8f6f5] hover:shadow-[4px_4px_0px_#f23b0d] dark:hover:shadow-[4px_4px_0px_#f23b0d]"
                        >
                            <div className="size-12 rounded bg-primary text-white flex items-center justify-center text-2xl mb-6 shadow-[2px_2px_0px_#181211] dark:shadow-[2px_2px_0px_#f8f6f5]">
                                {feature.icon}
                            </div>
                            <h4 className="font-black uppercase text-lg mb-2">{feature.title}</h4>
                            <p className="text-sm opacity-60 leading-relaxed font-bold uppercase">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center">
                <div className="w-full aspect-[4/5] bg-slate-100 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 p-8 flex flex-col justify-between shadow-[20px_20px_0px_#f23b0d]">
                    <div className="space-y-4">
                        <div className="text-primary"><HiGlobe size={80} /></div>
                        <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">30+ YEARS</h3>
                        <p className="text-lg font-black uppercase opacity-60">OF EXCELLENCE IN THE FIELD</p>
                    </div>
                    <div className="space-y-4 border-t-2 border-slate-900 dark:border-slate-100 pt-8">
                        <p className="text-sm font-black uppercase tracking-widest opacity-60">MISSION STATEMENT:</p>
                        <p className="text-xl font-bold uppercase leading-tight italic">
                            "BUILDING THE NEXT ERA THAT WON’T BE DEFINED BY SPEED ALONE BUT BY TRUST, SECURITY AND TRANSPARENCY."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
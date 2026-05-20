import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMicrophone, HiChatAlt2, HiStar, HiPaperAirplane, HiUser } from 'react-icons/hi';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const collaborationTypes = [
        { icon: <HiStar />, title: 'Partnerships', desc: 'Strategic integration' },
        { icon: <HiMicrophone />, title: 'Speaking', desc: 'Keynotes & Panels' },
        { icon: <HiChatAlt2 />, title: 'Media', desc: 'Podcasts & Interviews' },
        { icon: <HiUser />, title: 'Advisory', desc: 'Strategic guidance' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                e.target.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="border-t-2 border-slate-900 dark:border-slate-100 pt-16 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-8 mb-16">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">✦ Collaborate</span>
                <h2 className="text-4xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter font-display">
                    Let's Build <br /> <span className="text-primary italic">Together</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {collaborationTypes.map((type, index) => (
                        <motion.div 
                            key={type.title}
                            whileHover={{ x: 10 }}
                            className="p-6 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 shadow-[6px_6px_0px_#181211] dark:shadow-[6px_6px_0px_#f8f6f5] hover:shadow-[6px_6px_0px_#f23b0d] transition-all flex items-center gap-6 group"
                        >
                            <div className="size-12 rounded bg-primary text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {type.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-black uppercase tracking-tighter">{type.title}</h3>
                                <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest">{type.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                    
                    <div className="mt-8 p-8 border-2 border-primary bg-primary/5 dark:bg-primary/10">
                        <p className="text-xs font-black uppercase tracking-[0.2em] leading-relaxed italic">
                            "TECHNICAL COMPLEXITY IS SOLVED THROUGH ARCHITECTURE. HUMAN COMPLEXITY IS SOLVED THROUGH COMMUNICATION."
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <form onSubmit={handleSubmit} className="p-8 lg:p-12 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 shadow-[15px_15px_0px_#181211] dark:shadow-[15px_15px_0px_#f8f6f5]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col gap-3">
                                <label className="text-xs font-black uppercase tracking-widest opacity-60">Full Name</label>
                                <input 
                                    name="name" 
                                    required 
                                    className="p-4 border-2 border-slate-900 dark:border-slate-100 bg-transparent outline-none focus:border-primary transition-colors text-sm font-bold uppercase"
                                    placeholder="JOHN DOE"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-xs font-black uppercase tracking-widest opacity-60">Email Address</label>
                                <input 
                                    name="email" 
                                    type="email" 
                                    required 
                                    className="p-4 border-2 border-slate-900 dark:border-slate-100 bg-transparent outline-none focus:border-primary transition-colors text-sm font-bold uppercase"
                                    placeholder="ARCHITECT@EXAMPLE.COM"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                            <label className="text-xs font-black uppercase tracking-widest opacity-60">Inquiry Type</label>
                            <select 
                                name="inquiryType"
                                className="p-4 border-2 border-slate-900 dark:border-slate-100 bg-transparent outline-none focus:border-primary transition-colors text-sm font-bold uppercase appearance-none cursor-pointer"
                            >
                                <option className="bg-white dark:bg-slate-900">ENTERPRISE PARTNERSHIP</option>
                                <option className="bg-white dark:bg-slate-900">SPEAKING OPPORTUNITY</option>
                                <option className="bg-white dark:bg-slate-900">MEDIA INQUIRY</option>
                                <option className="bg-white dark:bg-slate-900">ADVISORY ROLE</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                            <label className="text-xs font-black uppercase tracking-widest opacity-60">Message</label>
                            <textarea 
                                name="message"
                                rows="5" 
                                required 
                                className="p-4 border-2 border-slate-900 dark:border-slate-100 bg-transparent outline-none focus:border-primary transition-colors text-sm font-bold uppercase resize-none"
                                placeholder="DESCRIBE YOUR VISION..."
                            />
                        </div>

                        <AnimatePresence>
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`p-4 border-2 mb-8 text-sm font-black uppercase tracking-wider text-center ${
                                        submitStatus === 'success'
                                            ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600'
                                            : 'border-rose-600 bg-rose-50 dark:bg-rose-950/20 text-rose-600'
                                    }`}
                                >
                                    {submitStatus === 'success'
                                        ? '✓ MESSAGE DELIVERED TO THE ARCHITECT.'
                                        : '✗ DELIVERY FAILED. PLEASE TRY AGAIN OR CONTACT DIRECTLY.'}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-6 font-black uppercase tracking-widest text-lg hover:bg-slate-900 transition-colors flex items-center justify-center gap-4 shadow-[5px_5px_0px_#181211] disabled:opacity-50"
                        >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} <HiPaperAirplane className="rotate-90" />
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return scrollProgress;
};
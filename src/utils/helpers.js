// ========== HELPER FUNCTIONS ==========

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/**
 * Format date
 */
export const formatDate = (date, format = 'MMM YYYY') => {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if (format === 'MMM YYYY') {
        return `${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    return d.toLocaleDateString();
};

/**
 * Generate unique ID
 */
export const generateId = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Clamp number between min and max
 */
export const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};

/**
 * Linear interpolation
 */
export const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
};

/**
 * Map number from one range to another
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get scroll progress (0 to 1)
 */
export const getScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return height > 0 ? winScroll / height : 0;
};

/**
 * Copy to clipboard
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
};

/**
 * Validate email
 */
export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

/**
 * Get random number between min and max
 */
export const randomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};

/**
 * Shuffle array
 */
export const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

/**
 * Group array by key
 */
export const groupBy = (array, key) => {
    return array.reduce((result, item) => {
        (result[item[key]] = result[item[key]] || []).push(item);
        return result;
    }, {});
};

/**
 * Remove duplicates from array
 */
export const uniqueArray = (array) => {
    return [...new Set(array)];
};

/**
 * Sleep/delay function
 */
export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
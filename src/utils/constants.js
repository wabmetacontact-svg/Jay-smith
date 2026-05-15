// ========== CONSTANTS ==========

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Speaking', href: '#media' },
    { name: 'Insights', href: '#thought-leadership' },
    { name: 'Contact', href: '#contact' },
];

// Social Media Links
export const SOCIAL_LINKS = [
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/jaysmith',
        icon: 'FiLinkedin',
        color: '#0077b5',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/jay_smith',
        icon: 'FiTwitter',
        color: '#1da1f2',
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@jaysmith',
        icon: 'FiYoutube',
        color: '#ff0000',
    },
    {
        name: 'Telegram',
        url: 'https://t.me/jaysmith',
        icon: 'SiTelegram',
        color: '#0088cc',
    },
];

// Personal Information
export const PERSONAL_INFO = {
    name: 'Jay Smith',
    title: 'President & Chairman',
    company: 'Accumulate',
    tagline: 'Leading Accumulate towards building a smarter, more connected, and trust-driven digital future.',
    email: 'contact@jaysmith.com',
    location: 'Global',
};

// Core Values
export const CORE_VALUES = [
    {
        title: 'Integrity',
        tagline: "Doing what's right — always.",
        description: 'Building trust through transparency, honesty, and ethical leadership.',
        icon: 'FiShield',
        color: '#6366f1',
    },
    {
        title: 'Innovation',
        tagline: 'Challenging the status quo.',
        description: 'Constantly pushing boundaries to create breakthrough solutions.',
        icon: 'FiZap',
        color: '#06b6d4',
    },
    {
        title: 'Collaboration',
        tagline: 'Building strong partnerships.',
        description: 'Creating lasting relationships to achieve shared goals.',
        icon: 'FiUsers',
        color: '#f472b6',
    },
];

// Expertise Areas
export const EXPERTISE_AREAS = [
    {
        title: 'Decentralized Identity Systems',
        icon: 'FiLock',
        color: '#6366f1',
        description: 'Building secure, user-controlled identity solutions.',
        features: ['Self-Sovereign Identity', 'Privacy-Preserving Auth', 'Cross-Platform Verification'],
    },
    {
        title: 'Enterprise Blockchain Infrastructure',
        icon: 'FiServer',
        color: '#06b6d4',
        description: 'Designing scalable blockchain solutions for enterprises.',
        features: ['Scalable Architecture', 'Enterprise Integration', 'Compliance Ready'],
    },
    {
        title: 'Digital Trust Frameworks',
        icon: 'FiShield',
        color: '#f472b6',
        description: 'Creating comprehensive trust frameworks.',
        features: ['Trust Verification', 'Data Integrity', 'Secure Transactions'],
    },
    {
        title: 'Web3 Governance',
        icon: 'FiGlobe',
        color: '#22c55e',
        description: 'Developing governance models for decentralized organizations.',
        features: ['DAO Structures', 'Voting Mechanisms', 'Token Economics'],
    },
    {
        title: 'Blockchain Interoperability',
        icon: 'FiLink',
        color: '#eab308',
        description: 'Enabling seamless communication between blockchains.',
        features: ['Cross-Chain Bridges', 'Protocol Standards', 'Multi-Chain Solutions'],
    },
];

// Statistics
export const STATISTICS = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Keynotes Delivered', value: '50+' },
    { label: 'Partnerships', value: '100+' },
    { label: 'Articles Published', value: '25+' },
];

// Animation Variants
export const ANIMATION_VARIANTS = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6 },
    },
    fadeInUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    fadeInDown: {
        initial: { opacity: 0, y: -30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    slideInLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    },
    slideInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
    },
};

// Breakpoints
export const BREAKPOINTS = {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1200,
    xl: 1400,
};

// SEO Meta Data
export const SEO_DATA = {
    title: 'Jay Smith | President & Chairman - Accumulate',
    description: 'Leading Accumulate towards building a smarter, more connected, and trust-driven digital future.',
    keywords: 'Jay Smith, Accumulate, Web3, Blockchain, Decentralized Identity, Digital Trust, Enterprise Blockchain',
    author: 'Jay Smith',
    siteUrl: 'https://jaysmith.com',
    image: '/og-image.jpg',
    twitterHandle: '@jay_smith',
};
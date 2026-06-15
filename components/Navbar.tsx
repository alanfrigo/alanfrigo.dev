'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDarkMode = savedTheme ? savedTheme === 'dark' : true;
        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle('dark', newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const certificationsLabel = language === 'en' ? 'certifications' : 'certificações';
    const projectsLabel = language === 'en' ? 'projects' : 'projetos';

    const navLinks = [
        { id: 'about', label: t.nav.about },
        { id: 'projects', label: projectsLabel },
        { id: 'experience', label: t.nav.experience },
        { id: 'skills', label: t.nav.skills },
        { id: 'certifications', label: certificationsLabel },
        { id: 'education', label: t.nav.education },
        { id: 'contact', label: t.nav.contact },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between gap-4 border-b border-transparent transition-[background,backdrop-filter,border-color,padding] duration-300 ${isScrolled ? 'nav-scrolled py-3' : 'py-[18px]'
                }`}
            style={{ paddingInline: 'clamp(18px, 5vw, 60px)' }}
        >
            {/* Logo / terminal prompt */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-[11px] font-[family-name:var(--font-mono)] font-semibold text-[15px] text-text-primary"
            >
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg border border-border-bright text-accent bg-[var(--accent-soft)] text-[13px]">
                    af
                </span>
                <span className="hidden sm:inline">
                    <span className="text-text-muted">~/</span>alan-frigo
                </span>
                <span className="hidden sm:inline-block w-[7px] h-[15px] bg-accent rounded-[1px] af-blink" />
            </button>

            {/* Right cluster */}
            <div className="flex items-center" style={{ gap: 'clamp(12px, 2vw, 26px)' }}>
                {/* Desktop links */}
                <div
                    className="hidden lg:flex items-center font-[family-name:var(--font-mono)] text-[13px]"
                    style={{ gap: 'clamp(12px, 1.8vw, 24px)' }}
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-text-secondary hover:text-accent transition-colors duration-200 lowercase"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Language toggle */}
                <button
                    onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                    className="cursor-pointer font-[family-name:var(--font-mono)] text-[12px] font-semibold tracking-[0.05em] text-text-secondary bg-transparent border border-border rounded-lg px-[11px] py-[7px] hover:border-accent hover:text-accent transition-all duration-200"
                    aria-label="Toggle language"
                >
                    {language === 'pt' ? 'EN' : 'PT'}
                </button>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="cursor-pointer inline-flex items-center justify-center w-9 h-9 text-text-secondary bg-transparent border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
                >
                    {isDark ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
                    )}
                </button>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden cursor-pointer inline-flex items-center justify-center w-9 h-9 text-text-secondary border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden absolute top-full left-0 right-0 flex flex-col py-3 border-b border-border font-[family-name:var(--font-mono)] text-[13px]"
                    style={{ background: 'color-mix(in srgb, var(--bg) 92%, transparent)', backdropFilter: 'blur(18px)', paddingInline: 'clamp(18px, 5vw, 60px)' }}
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-left py-3 text-text-secondary hover:text-accent transition-colors duration-200 lowercase"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        let isDarkMode: boolean;

        if (savedTheme) {
            isDarkMode = savedTheme === 'dark';
        } else {
            isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        setIsDark(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const certificationsLabel = language === 'en' ? 'Certifications' : 'Certificações';
    const projectsLabel = language === 'en' ? 'Projects' : 'Projetos';

    const navLinks = [
        { id: 'about', label: t.nav.about },
        { id: 'experience', label: t.nav.experience },
        { id: 'skills', label: t.nav.skills },
        { id: 'projects', label: projectsLabel },
        { id: 'certifications', label: certificationsLabel },
        { id: 'education', label: t.nav.education },
        { id: 'contact', label: t.nav.contact },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-bg-base/85 backdrop-blur-md border-b border-border-subtle'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-[family-name:var(--font-heading)] font-semibold text-xl text-text-primary hover:text-accent transition-colors duration-200"
                    >
                        Alan Frigo
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text-primary rounded-md transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Language Toggle */}
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                            className="ml-4 flex items-center gap-2 px-3 py-2 text-sm font-medium bg-bg-surface-alt hover:bg-border rounded-md transition-colors duration-200"
                            aria-label="Toggle language"
                        >
                            <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇧🇷'}</span>
                            <span className="text-text-muted">{language.toUpperCase()}</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-text-muted hover:text-text-primary bg-bg-surface-alt hover:bg-border rounded-md transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-text-muted hover:text-text-primary transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                            className="p-2 text-lg"
                            aria-label="Toggle language"
                        >
                            {language === 'en' ? '🇺🇸' : '🇧🇷'}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-text-muted hover:text-text-primary rounded-md transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border-subtle">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left px-4 py-3 text-sm font-medium text-text-muted hover:text-text-primary rounded-md transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-bg-base">
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Avatar */}
                <div className="mb-8 flex justify-center">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full ring-2 ring-accent/40 ring-offset-4 ring-offset-bg-base overflow-hidden">
                        <Image
                            src="/profile-pic.jpeg"
                            alt="Alan Frigo"
                            width={144}
                            height={144}
                            className="w-full h-full object-cover"
                            priority
                            unoptimized
                        />
                    </div>
                </div>

                {/* Name */}
                <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl text-text-primary mb-4 animate-fade-in">
                    Alan Frigo
                </h1>

                {/* Role */}
                <p className="text-lg sm:text-xl text-accent font-medium mb-6 animate-fade-in-delayed tracking-wide">
                    {t.hero.role}
                </p>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-delayed-2">
                    {t.hero.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-3">
                    <button
                        onClick={scrollToContact}
                        className="px-7 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
                    >
                        {t.hero.cta.contact}
                    </button>

                    <a
                        href="https://github.com/alanfrigo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-text-primary font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse z-10">
                <svg
                    className="w-6 h-6 text-text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}

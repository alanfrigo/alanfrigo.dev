'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 sm:py-32 bg-white dark:bg-zinc-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.about.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </div>

                {/* Content */}
                <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-20" />

                    <div className="pl-8">
                        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                            {t.about.description}
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { value: '9+', label: 'Years Experience' },
                        { value: '6', label: 'Companies' },
                        { value: '20+', label: 'Technologies' },
                        { value: '3', label: 'Countries' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

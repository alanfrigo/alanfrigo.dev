'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 sm:py-32 bg-bg-base">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.about.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Content */}
                <div className="border-l-2 border-accent/20 pl-8">
                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed whitespace-pre-line">
                        {t.about.description}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { value: '9+', label: t.about.stats.yearsExperience },
                        { value: '6', label: t.about.stats.companies },
                        { value: '20+', label: t.about.stats.technologies },
                        { value: '2', label: t.about.stats.countries },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-5 bg-bg-surface rounded-xl border border-border hover:border-accent/40 transition-colors duration-200"
                        >
                            <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-accent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-text-muted mt-2">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Education() {
    const { t } = useLanguage();

    const degrees = [
        {
            key: 'mba2' as const,
            icon: '🎓',
            inProgress: true,
        },
        {
            key: 'mba' as const,
            icon: '🎓',
            inProgress: true,
        },
        {
            key: 'bachelor' as const,
            icon: '📚',
            inProgress: false,
        },
    ];

    return (
        <section id="education" className="py-20 sm:py-32 bg-bg-surface-alt">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.education.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {degrees.map(({ key, icon, inProgress }) => {
                        const degree = t.education.degrees[key];

                        return (
                            <div
                                key={key}
                                className="relative p-6 bg-bg-surface rounded-xl border border-border hover:border-accent/40 transition-colors duration-200 group"
                            >
                                {/* In Progress Badge */}
                                {inProgress && (
                                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-accent text-white text-xs font-medium rounded-md">
                                        In Progress
                                    </div>
                                )}

                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                                            {degree.degree}
                                        </h3>
                                        <p className="text-accent font-medium mt-1">
                                            {degree.field}
                                        </p>
                                        <p className="text-text-secondary mt-2">
                                            {degree.school}
                                        </p>
                                        <p className="text-sm text-text-muted mt-1">
                                            {degree.period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

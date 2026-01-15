'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Education() {
    const { t } = useLanguage();

    const degrees = [
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
        <section id="education" className="py-20 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.education.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {degrees.map(({ key, icon, inProgress }) => {
                        const degree = t.education.degrees[key];

                        return (
                            <div
                                key={key}
                                className="relative p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                {/* In Progress Badge */}
                                {inProgress && (
                                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                        In Progress
                                    </div>
                                )}

                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {degree.degree}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                                            {degree.field}
                                        </p>
                                        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                                            {degree.school}
                                        </p>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
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

'use client';

import { useLanguage } from '@/context/LanguageContext';
import { skillsData } from '@/lib/i18n';

type CategoryKey = keyof typeof skillsData;

const categoryIcons: Record<CategoryKey, string> = {
    frontend: '🎨',
    backend: '⚙️',
    ai: '🤖',
    infrastructure: '☁️',
    automation: '🔄',
    marketing: '📈',
};

const categoryColors: Record<CategoryKey, { bg: string; border: string; text: string }> = {
    frontend: {
        bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-700 dark:text-blue-300',
    },
    backend: {
        bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-700 dark:text-green-300',
    },
    ai: {
        bg: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-700 dark:text-purple-300',
    },
    infrastructure: {
        bg: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        text: 'text-orange-700 dark:text-orange-300',
    },
    automation: {
        bg: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        text: 'text-pink-700 dark:text-pink-300',
    },
    marketing: {
        bg: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
        border: 'border-teal-200 dark:border-teal-800',
        text: 'text-teal-700 dark:text-teal-300',
    },
};

export default function Skills() {
    const { t } = useLanguage();
    const categories = Object.keys(skillsData) as CategoryKey[];

    return (
        <section id="skills" className="py-20 sm:py-32 bg-white dark:bg-zinc-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.skills.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => {
                        const colors = categoryColors[category];
                        const skills = skillsData[category];
                        const categoryLabel = t.skills.categories[category];

                        return (
                            <div
                                key={category}
                                className={`p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{categoryIcons[category]}</span>
                                    <h3 className={`text-lg font-bold ${colors.text}`}>
                                        {categoryLabel}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm font-medium bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 rounded-lg shadow-sm group-hover:shadow transition-shadow duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

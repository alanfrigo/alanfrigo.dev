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

const categoryColors: Record<CategoryKey, { bg: string; bgDark: string; text: string; textDark: string; border: string; borderDark: string }> = {
    frontend: {
        bg: '#EEF2E8', bgDark: '#2A2E26',
        text: '#5A6B4E', textDark: '#A3B594',
        border: '#D4DEC9', borderDark: '#3A4034',
    },
    backend: {
        bg: '#F0EAE3', bgDark: '#2C2925',
        text: '#7A6B5D', textDark: '#C2A894',
        border: '#DDD2C5', borderDark: '#3D3832',
    },
    ai: {
        bg: '#EDE7F0', bgDark: '#2A272E',
        text: '#6E5A7A', textDark: '#BFA3B7',
        border: '#D6CCDD', borderDark: '#3A3440',
    },
    infrastructure: {
        bg: '#E8EEF0', bgDark: '#262A2C',
        text: '#546A72', textDark: '#94B0BA',
        border: '#CDD8DD', borderDark: '#343B3E',
    },
    automation: {
        bg: '#F0E8E5', bgDark: '#2C2826',
        text: '#7A5E56', textDark: '#C29E94',
        border: '#DDCCC7', borderDark: '#3D3533',
    },
    marketing: {
        bg: '#EAF0E8', bgDark: '#272C26',
        text: '#4E6B4E', textDark: '#94B594',
        border: '#CEDDC9', borderDark: '#353D34',
    },
};

export default function Skills() {
    const { t } = useLanguage();
    const categories = Object.keys(skillsData) as CategoryKey[];
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

    return (
        <section id="skills" className="py-20 sm:py-32 bg-bg-base">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.skills.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
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
                                className="p-6 rounded-xl border transition-colors duration-200"
                                style={{
                                    backgroundColor: `var(--skill-${category}-bg)`,
                                    borderColor: `var(--skill-${category}-border)`,
                                }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{categoryIcons[category]}</span>
                                    <h3
                                        className="text-lg font-semibold"
                                        style={{ color: `var(--skill-${category}-text)` }}
                                    >
                                        {categoryLabel}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 text-sm font-medium bg-bg-surface/80 dark:bg-bg-base/80 text-text-secondary rounded-md"
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

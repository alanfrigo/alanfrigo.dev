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


export default function Skills() {
    const { t } = useLanguage();
    const categories = Object.keys(skillsData) as CategoryKey[];

    return (
        <section id="skills" className="py-20 sm:py-32 bg-bg-base">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">04 / {t.skills.title}</p>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.skills.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => {
                        const skills = skillsData[category];
                        const categoryLabel = t.skills.categories[category];

                        return (
                            <div
                                key={category}
                                className="reveal p-6 rounded-xl border transition-colors duration-200"
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

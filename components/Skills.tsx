'use client';

import { useLanguage } from '@/context/LanguageContext';
import { skillsData } from '@/lib/i18n';

type CategoryKey = keyof typeof skillsData;

const skillOrder: CategoryKey[] = ['ai', 'backend', 'frontend', 'infrastructure', 'automation', 'marketing'];

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" style={{ padding: 'clamp(80px,12vh,140px) clamp(18px,5vw,60px)' }}>
            <div className="mx-auto" style={{ maxWidth: '1180px' }}>
                {/* Header */}
                <div className="reveal mb-[46px]">
                    <div className="font-[family-name:var(--font-mono)] text-accent text-[13px] tracking-[0.1em] mb-3">
                        03 // skills
                    </div>
                    <h2
                        className="font-[family-name:var(--font-heading)] text-text-primary font-semibold m-0"
                        style={{ fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-0.02em' }}
                    >
                        {t.skills.title}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
                    {skillOrder.map((category, i) => (
                        <div
                            key={category}
                            className="reveal bg-bg-surface border border-border rounded-[14px] p-6 transition-[border-color] duration-200 hover:border-[var(--accent-line)]"
                        >
                            <div className="flex items-center gap-[10px] mb-[18px]">
                                <span className="font-[family-name:var(--font-mono)] text-[12px] text-accent">
                                    {'0' + (i + 1)}
                                </span>
                                <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-semibold text-text-primary m-0">
                                    {t.skills.categories[category]}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillsData[category].map((skill) => (
                                    <span
                                        key={skill}
                                        className="font-[family-name:var(--font-mono)] text-[12px] text-text-secondary bg-bg-surface-alt border border-border rounded-[7px] px-[11px] py-[6px] transition-all duration-200 hover:border-[var(--accent-line)] hover:text-accent hover:-translate-y-[2px]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
